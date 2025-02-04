import { tryParse } from "./fable_modules/fable-library-js.4.24.0/Int32.js";
import { FSharpRef } from "./fable_modules/fable-library-js.4.24.0/Types.js";
import { tail, head, isEmpty } from "./fable_modules/fable-library-js.4.24.0/List.js";
import { toList } from "./fable_modules/fable-library-js.4.24.0/Seq.js";

export function $007CInt$007C_$007C(x) {
    let matchValue;
    let outArg = 0;
    matchValue = [tryParse(x, 511, false, 32, new FSharpRef(() => outArg, (v) => {
        outArg = (v | 0);
    })), outArg];
    if (matchValue[0]) {
        return matchValue[1];
    }
    else {
        return undefined;
    }
}

function Base64_toB64c(value) {
    const d = (value & 63) | 0;
    if (d < 26) {
        const value_1 = (~~"A".charCodeAt(0) + d) | 0;
        return String.fromCharCode(value_1);
    }
    else if (d < 52) {
        const value_2 = ((~~"a".charCodeAt(0) + d) - 26) | 0;
        return String.fromCharCode(value_2);
    }
    else if (d < 62) {
        const value_3 = ((~~"0".charCodeAt(0) + d) - 52) | 0;
        return String.fromCharCode(value_3);
    }
    else if (d === 62) {
        return "-";
    }
    else {
        return "_";
    }
}

export function Base64_toB64(value) {
    if (value === 0) {
        return "";
    }
    else {
        return Base64_toB64(value >> 6) + Base64_toB64c(value);
    }
}

function Base64_ofB64c(c) {
    if ((c >= "A") && (c <= "Z")) {
        return (~~c.charCodeAt(0) - ~~"A".charCodeAt(0)) | 0;
    }
    else if ((c >= "a") && (c <= "z")) {
        return ((~~c.charCodeAt(0) - ~~"a".charCodeAt(0)) + 26) | 0;
    }
    else if ((c >= "0") && (c <= "9")) {
        return ((~~c.charCodeAt(0) - ~~"0".charCodeAt(0)) + 52) | 0;
    }
    else if (c === "-") {
        return 62;
    }
    else {
        return 63;
    }
}

export function Base64_ofB64(s) {
    const loop = (n_mut, _arg_mut) => {
        loop:
        while (true) {
            const n = n_mut, _arg = _arg_mut;
            if (isEmpty(_arg)) {
                return n | 0;
            }
            else {
                n_mut = ((n << 6) + Base64_ofB64c(head(_arg)));
                _arg_mut = tail(_arg);
                continue loop;
            }
            break;
        }
    };
    return loop(0, toList(s)) | 0;
}

