import { Union } from "./fable_modules/fable-library-js.4.24.0/Types.js";
import { union_type, float64_type } from "./fable_modules/fable-library-js.4.24.0/Reflection.js";
import { toInt32 } from "./fable_modules/fable-library-js.4.24.0/BigInt.js";
import { utcNow, getTicks } from "./fable_modules/fable-library-js.4.24.0/Date.js";

export class Rand extends Union {
    constructor(seed) {
        super();
        this.tag = 0;
        this.fields = [seed];
    }
    cases() {
        return ["Rand"];
    }
}

export function Rand_$reflection() {
    return union_type("Random.Rand", [], Rand, () => [[["seed", float64_type]]]);
}

export function RandModule_create(seed) {
    return new Rand(seed);
}

export function RandModule_rand() {
    return RandModule_create(Math.abs(~~toInt32(getTicks(utcNow()))));
}

export function RandModule_next(_arg, offset) {
    const r = Math.sin(_arg.fields[0] + offset) * 1000000;
    return [Math.abs(~~r), new Rand(r)];
}

export function RandModule_seed(_arg) {
    return ~~_arg.fields[0];
}

