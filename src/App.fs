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


let facebook id =
    let d = document
    let fjs = d.getElementsByTagName("script").[0]
    if isNull (d.getElementById(id)) then
      let js : HTMLScriptElement = d.createElement("script") |> unbox
      js.id <- id
      js.src <- "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"
      fjs.parentNode.insertBefore(js, fjs) |> ignore

let awaitAnimationFrame() =
  Async.FromContinuations <| fun (cont,_,_) ->
    window.requestAnimationFrame(cont) |> ignore


let rec findTwitterFrame n =
    async {
        let tweet : HTMLIFrameElement = document.getElementsByTagName("iframe").[0] |> unbox
        if isNull tweet then
            if n <> 0 then
                // do! awaitAnimationFrame() |> Async.Ignore
                do! Async.Sleep 100
                return! findTwitterFrame (n-1)
            else
                return null
        else
            return tweet
    }

[<Emit("twttr.widgets.load();")>]
let reloadTwitter() : unit = failwith "JS only"

let twitter (pitch:string) version seed =
    let url = permalink version seed
    let urlAndHash = 280 - (url.Length + 14) //#pitchotron

    let sample =
        if pitch.Length > urlAndHash then
            pitch.Substring(0,urlAndHash-3) + "..."
        else
            pitch


    let tweetFrame : HTMLIFrameElement = document.getElementsByTagName("iframe").[0] |> unbox
    if not (isNull tweetFrame) then
        tweetFrame.remove()
    let btn = document.createElement("a")
    btn.className <- "twitter-share-button"
    btn.setAttribute("href", "http://twitter.com/share")
    btn.setAttribute("data-url", permalink version seed)
    btn.setAttribute("data-text", sample)
    btn.setAttribute("data-hashtags", "pitchotron")


    let twt = document.getElementById("twitter")
    let prevBtn = twt.getElementsByClassName("twitter-share-button").[0]
    if not (isNull prevBtn) then
        twt.replaceChild(btn, prevBtn) |> ignore
    else
        twt.appendChild(btn) |> ignore
    
    reloadTwitter()

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

    facebook "facebook-jssdk"

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

            twitter (concat full) version (Rand.seed rand) 
            // |> Async.Start
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

