[<AutoOpen>]
module Random
open System

[<Struct>]
type Rand = Rand of seed: float

module Rand =

    let create (seed: int) = Rand (float seed) 

    let rand() = create (abs (int DateTime.UtcNow.Ticks)) 

    let next (Rand seed) offset =
        let r = (Math.Sin(seed + float offset) * 1000000.)
        abs (int r), Rand r

    let seed (Rand s) = int s
