module Pitchotron

open Browser.Dom
open Browser.Types
open Fable.Core.JS
open Fable.Core

#if INTERACTIVE
#load "Model.fs"
#load "Pitch.fs"
#endif

open System
open Model

#if INTERACTIVE
let rec count =
    function
    | Txt _ -> 1L
    | Alt nodes -> nodes |> List.sumBy count
    | Cons nodes -> nodes |> List.fold (fun acc n -> acc * count n) 1L 

count Pitch.pitch
#endif



let permalink version seed = 
    let loc = window.location.href
    let path = loc.Split('?').[0]
    path + "?" + (string version) + "." + Base64.toB64 seed  


let rec gen offset (rand, wordCount, pitchls) node =
    match wordCount with
    | 0 -> rand, 0 , pitchls
    | _ ->
        match node with
        | Txt s -> 
            rand, wordCount - 1, pitchls @ [s]
        | Cons ss -> 
            List.fold (gen offset) (rand, wordCount, pitchls) ss
        | Alt alts ->
            let choices = List.length alts
            let r, rand = Rand.next rand (if wordCount = 1 then offset else 0)
            let alt = List.item (r % choices) alts
            gen offset (rand, wordCount,  pitchls) alt


let (|C|_|) (c: string) (s:string) =
    if s.StartsWith(c) then
        Some()
    else
        None
let (|E|_|) (c: string) (s:string) =
    if s.EndsWith(c) then
        Some()
    else
        None

let concat ls =
    let rec loop result = function
        | [] -> result |> List.rev |> String.concat "" |> fun s -> s.Replace(" !","\u00A0!").Replace(" ?","\u00A0?") 
        | " " :: next  -> loop result next
        | (C "." | C ",") as h  :: tail ->
                loop (h :: result) tail
        | (E "'") as h  :: h2 :: tail ->
                loop (h2 :: h :: " " :: result) tail
         | h :: tail ->
                loop (h :: " " :: result) tail

    loop [] ls



let init() =


    let div = document.getElementById("pitch")
    let btn = document.getElementById("generate")
    let lnk = document.getElementById("permalink") :?> HTMLAnchorElement

    let change version rand =
        async {
            let pitch = 
                match version with
                | 0 -> PitchOrigin.pitch
                | _ -> Pitch.pitch

            lnk.href <- permalink version (Rand.seed rand)
            
            let _,_,full = gen 10 (rand, 100, []) pitch

            for wordCount in 1 .. 100 do
                for offset in 0 .. 10 do
                    let _, n, result = 
                        gen offset (rand, wordCount, []) pitch 
                    

                    div.textContent <- concat result
                    if n <> 0  then
                        return()
                    do! Async.Sleep 15
        }
    
    let mutable cancel: Threading.CancellationTokenSource = null
    let generate version seed =
        if not (isNull cancel) then
            cancel.Cancel()
        cancel <- new Threading.CancellationTokenSource()
        Async.StartImmediate (change version seed, cancel.Token)
    
    btn.addEventListener(
        "click", (fun e -> 
        let rand = Rand.rand()
        history.pushState((1, Rand.seed rand) ,"Pitch","/")
        generate 1 rand
        e.stopPropagation()
        ))

    window.addEventListener ("popstate",(fun e ->  
        let event = e :?> PopStateEvent
        let version,seed = unbox event.state
        let rand = seed |> Rand.create
        generate version rand
        e.stopPropagation()
        ))

    let parseQuery (query: string) =
        if query.StartsWith ("?") then
            let q = query.Substring 1
            match q.Split(".",2) with
            | [| Int v; seed |] ->
                Some(v, Base64.ofB64 seed)
            | _ -> None

        else
            None
    let version, rand =
        window.location.search
        |> parseQuery
        |> Option.orElseWith (fun() ->
            match history.state with
            | null -> None
            | s -> s |> unbox |> Some )
        |> Option.map (fun (v,s) -> v, Rand.create s)
        |> Option.defaultWith (fun() -> 1,Rand.rand())
    history.replaceState((version,Rand.seed rand), "Pitchotron", null)

    console.log("generate " + string rand)
    generate version rand

    


init()

