import { Union } from "./fable_modules/fable-library-js.4.24.0/Types.js";
import { union_type, list_type, string_type } from "./fable_modules/fable-library-js.4.24.0/Reflection.js";

export class Node$ extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Txt", "Cons", "Alt"];
    }
}

export function Node$_$reflection() {
    return union_type("Model.Node", [], Node$, () => [[["Item", string_type]], [["Item", list_type(Node$_$reflection())]], [["Item", list_type(Node$_$reflection())]]]);
}

