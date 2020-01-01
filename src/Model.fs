module Model

type Node =
    | Txt of string
    | Cons of Node list
    | Alt of Node list