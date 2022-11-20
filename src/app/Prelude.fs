[<AutoOpen>]
module Prelude
open System

let (|Int|_|) (x: string) =
    match Int32.TryParse(x) with
    | true, v -> Some v
    | false,_ -> None

module Base64 =
    let private toB64c (value) =
        let d = int (value &&& 63)
        if d < 26 then
            int 'A' + d |> char
        elif d < 52 then
            int 'a' + d - 26 |> char
        elif d < 62 then
            int '0' + d - 52 |> char
        elif d = 62 then
            '-'
        else
            '_'

    let rec toB64 value =
        if value = 0 then
            ""
        else 
            toB64 (value >>> 6) + string (toB64c value)

    let private ofB64c c =
        if c >= 'A' && c <= 'Z' then
            int c - int 'A'
        elif c >= 'a' && c <= 'z' then
            int c - int 'a' + 26
        elif c >= '0' && c <= '9' then
            int c - int '0' + 52
        elif c = '-' then 62
        else 63

    let ofB64 s =
        let rec loop n = function
            | h :: t -> loop ((n <<< 6) +  ofB64c h) t
            | [] -> n
        loop 0 (s |> Seq.toList)


