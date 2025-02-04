import { equalsWith, item } from "./fable_modules/fable-library-js.4.24.0/Array.js";
import { substring, join, replace, split } from "./fable_modules/fable-library-js.4.24.0/String.js";
import { toString } from "./fable_modules/fable-library-js.4.24.0/Types.js";
import { Base64_ofB64, $007CInt$007C_$007C, Base64_toB64 } from "./Prelude.fs.js";
import { empty, tail as tail_3, head, isEmpty, ofArrayWithTail, cons, reverse, singleton, append, item as item_1, length, fold } from "./fable_modules/fable-library-js.4.24.0/List.js";
import { RandModule_create, RandModule_rand, RandModule_seed, RandModule_next } from "./Rand.fs.js";
import { orElseWith, map, defaultArgWith, some } from "./fable_modules/fable-library-js.4.24.0/Option.js";
import { equals, defaultOf } from "./fable_modules/fable-library-js.4.24.0/Util.js";
import { sleep, startImmediate, createCancellationToken, cancel as cancel_1 } from "./fable_modules/fable-library-js.4.24.0/Async.js";
import { singleton as singleton_1 } from "./fable_modules/fable-library-js.4.24.0/AsyncBuilder.js";
import { pitch as pitch_1 } from "./Pitch.Old.fs.js";
import { pitch as pitch_2 } from "./Pitch.fs.js";
import { rangeDouble } from "./fable_modules/fable-library-js.4.24.0/Range.js";

export function permalink(version, seed) {
    return (((item(0, split(window.location.href, ["?"], undefined, 0)) + "?") + toString(version)) + ".") + Base64_toB64(seed);
}

export function gen(offset_mut, rand_mut, wordCount_mut, pitchls_mut, node_mut) {
    gen:
    while (true) {
        const offset = offset_mut, rand = rand_mut, wordCount = wordCount_mut, pitchls = pitchls_mut, node = node_mut;
        if (wordCount === 0) {
            return [rand, 0, pitchls];
        }
        else {
            switch (node.tag) {
                case 1:
                    return fold((tupledArg, node_1) => gen(offset, tupledArg[0], tupledArg[1], tupledArg[2], node_1), [rand, wordCount, pitchls], node.fields[0]);
                case 2: {
                    const alts = node.fields[0];
                    const choices = length(alts) | 0;
                    const patternInput = RandModule_next(rand, (wordCount === 1) ? offset : 0);
                    offset_mut = offset;
                    rand_mut = patternInput[1];
                    wordCount_mut = wordCount;
                    pitchls_mut = pitchls;
                    node_mut = item_1(patternInput[0] % choices, alts);
                    continue gen;
                }
                default:
                    return [rand, wordCount - 1, append(pitchls, singleton(node.fields[0]))];
            }
        }
        break;
    }
}

export function $007CC$007C_$007C(c, s) {
    if (s.startsWith(c)) {
        return some(undefined);
    }
    else {
        return undefined;
    }
}

export function $007CE$007C_$007C(c, s) {
    if (s.endsWith(c)) {
        return some(undefined);
    }
    else {
        return undefined;
    }
}

export function concat(ls) {
    const loop = (result_mut, _arg_mut) => {
        loop:
        while (true) {
            const result = result_mut, _arg = _arg_mut;
            let matchResult, next, h, tail;
            if (!isEmpty(_arg)) {
                if (head(_arg) === " ") {
                    matchResult = 1;
                    next = tail_3(_arg);
                }
                else if ($007CC$007C_$007C(".", head(_arg)) != null) {
                    matchResult = 2;
                    h = head(_arg);
                    tail = tail_3(_arg);
                }
                else if ($007CC$007C_$007C(",", head(_arg)) != null) {
                    matchResult = 2;
                    h = head(_arg);
                    tail = tail_3(_arg);
                }
                else {
                    matchResult = 3;
                }
            }
            else {
                matchResult = 0;
            }
            switch (matchResult) {
                case 0:
                    return replace(replace(join("", reverse(result)), " !", " !"), " ?", " ?");
                case 1: {
                    result_mut = result;
                    _arg_mut = next;
                    continue loop;
                }
                case 2: {
                    result_mut = cons(h, result);
                    _arg_mut = tail;
                    continue loop;
                }
                default: {
                    let matchResult_1, h_1, h2, tail_1;
                    if (!isEmpty(_arg)) {
                        if ($007CE$007C_$007C("\'", head(_arg)) != null) {
                            if (!isEmpty(tail_3(_arg))) {
                                matchResult_1 = 0;
                                h_1 = head(_arg);
                                h2 = head(tail_3(_arg));
                                tail_1 = tail_3(tail_3(_arg));
                            }
                            else {
                                matchResult_1 = 1;
                            }
                        }
                        else {
                            matchResult_1 = 1;
                        }
                    }
                    else {
                        matchResult_1 = 1;
                    }
                    switch (matchResult_1) {
                        case 0: {
                            result_mut = ofArrayWithTail([h2, h_1, " "], result);
                            _arg_mut = tail_1;
                            continue loop;
                        }
                        default:
                            if (!isEmpty(_arg)) {
                                result_mut = ofArrayWithTail([head(_arg), " "], result);
                                _arg_mut = tail_3(_arg);
                                continue loop;
                            }
                            else {
                                throw new Error("Match failure");
                            }
                    }
                }
            }
            break;
        }
    };
    return loop(empty(), ls);
}

export function init() {
    let query, matchValue, activePatternResult, seed_3, v;
    const div = document.getElementById("pitch");
    const btn = document.getElementById("generate");
    const lnk = document.getElementById("permalink");
    let cancel = defaultOf();
    const generate = (version_1, seed) => {
        let version, rand;
        if (!(cancel == null)) {
            cancel_1(cancel);
        }
        cancel = createCancellationToken();
        startImmediate((version = (version_1 | 0), (rand = seed, singleton_1.Delay(() => {
            const pitch = (version === 0) ? pitch_1 : pitch_2;
            lnk.href = permalink(version, RandModule_seed(rand));
            const patternInput = gen(10, rand, 100, empty(), pitch);
            return singleton_1.For(rangeDouble(1, 1, 100), (_arg) => singleton_1.For(rangeDouble(0, 1, 10), (_arg_1) => {
                const patternInput_1 = gen(_arg_1, rand, _arg, empty(), pitch);
                div.textContent = concat(patternInput_1[2]);
                return singleton_1.Combine((patternInput_1[1] !== 0) ? singleton_1.Return(undefined) : singleton_1.Zero(), singleton_1.Delay(() => singleton_1.Bind(sleep(15), () => singleton_1.Return(undefined))));
            }));
        }))), cancel);
    };
    btn.addEventListener("click", (e) => {
        const rand_1 = RandModule_rand();
        history.pushState([1, RandModule_seed(rand_1)], "Pitch", "/");
        generate(1, rand_1);
        e.stopPropagation();
    });
    window.addEventListener("popstate", (e_1) => {
        const event = e_1;
        const patternInput_2 = event.state;
        generate(patternInput_2[0], RandModule_create(patternInput_2[1]));
        e_1.stopPropagation();
    });
    const patternInput_3 = defaultArgWith(map((tupledArg) => [tupledArg[0], RandModule_create(tupledArg[1])], orElseWith((query = window.location.search, query.startsWith("?") ? ((matchValue = split(substring(query, 1), ["."], 2, 0), (!equalsWith((x, y) => (x === y), matchValue, defaultOf()) && (matchValue.length === 2)) ? ((activePatternResult = $007CInt$007C_$007C(item(0, matchValue)), (activePatternResult != null) ? ((seed_3 = item(1, matchValue), (v = (activePatternResult | 0), [v, Base64_ofB64(seed_3.split(""))]))) : undefined)) : undefined)) : undefined), () => {
        const matchValue_1 = history.state;
        if (equals(matchValue_1, defaultOf())) {
            return undefined;
        }
        else {
            return matchValue_1;
        }
    })), () => [1, RandModule_rand()]);
    const version_3 = patternInput_3[0] | 0;
    const rand_3 = patternInput_3[1];
    history.replaceState([version_3, RandModule_seed(rand_3)], "Pitchotron", defaultOf());
    console.log(some("generate " + toString(rand_3)));
    generate(version_3, rand_3);
}

init();

