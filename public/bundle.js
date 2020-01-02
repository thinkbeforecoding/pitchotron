/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.fsproj");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.fable/fable-library.2.4.11/Array.js":
/*!**********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Array.js ***!
  \**********************************************/
/*! exports provided: append, filter, fill, getSubArray, last, tryLast, mapIndexed, map, mapIndexed2, map2, mapIndexed3, map3, mapFold, mapFoldBack, indexed, truncate, concat, collect, countBy, distinctBy, distinct, where, contains, except, groupBy, empty, singleton, initialize, pairwise, replicate, copy, reverse, scan, scanBack, skip, skipWhile, take, takeWhile, addRangeInPlace, removeInPlace, removeAllInPlace, copyTo, partition, find, tryFind, findIndex, tryFindIndex, pick, tryPick, findBack, tryFindBack, findLastIndex, findIndexBack, tryFindIndexBack, choose, foldIndexed, fold, iterate, iterateIndexed, iterate2, iterateIndexed2, isEmpty, forAll, permute, setSlice, sortInPlaceBy, sortInPlace, sort, sortBy, sortDescending, sortByDescending, sortWith, unfold, unzip, unzip3, zip, zip3, chunkBySize, splitAt, compareWith, equalsWith, exactlyOne, head, tryHead, tail, item, tryItem, foldBackIndexed, foldBack, foldIndexed2, fold2, foldBackIndexed2, foldBack2, reduce, reduceBack, forAll2, existsOffset, exists, existsOffset2, exists2, sum, sumBy, maxBy, max, minBy, min, average, averageBy, ofSeq, ofList, toList, windowed, splitInto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubArray", function() { return getSubArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryLast", function() { return tryLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed", function() { return mapIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed2", function() { return mapIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map2", function() { return map2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed3", function() { return mapIndexed3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map3", function() { return map3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFold", function() { return mapFold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFoldBack", function() { return mapFoldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexed", function() { return indexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctBy", function() { return distinctBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "except", function() { return except; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicate", function() { return replicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanBack", function() { return scanBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRangeInPlace", function() { return addRangeInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeInPlace", function() { return removeInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllInPlace", function() { return removeAllInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyTo", function() { return copyTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFind", function() { return tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndex", function() { return tryFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPick", function() { return tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBack", function() { return findBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindBack", function() { return tryFindBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return findLastIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexBack", function() { return findIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndexBack", function() { return tryFindIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed", function() { return foldIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed", function() { return iterateIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate2", function() { return iterate2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed2", function() { return iterateIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return permute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSlice", function() { return setSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortInPlaceBy", function() { return sortInPlaceBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortInPlace", function() { return sortInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDescending", function() { return sortDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDescending", function() { return sortByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return sortWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return unfold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return unzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip3", function() { return unzip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip3", function() { return zip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunkBySize", function() { return chunkBySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitAt", function() { return splitAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareWith", function() { return compareWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsWith", function() { return equalsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactlyOne", function() { return exactlyOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryHead", function() { return tryHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "item", function() { return item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryItem", function() { return tryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBackIndexed", function() { return foldBackIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed2", function() { return foldIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold2", function() { return fold2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBackIndexed2", function() { return foldBackIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack2", function() { return foldBack2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBack", function() { return reduceBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll2", function() { return forAll2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existsOffset", function() { return existsOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existsOffset2", function() { return existsOffset2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists2", function() { return exists2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumBy", function() { return sumBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return maxBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return minBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return average; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageBy", function() { return averageBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofSeq", function() { return ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofList", function() { return ofList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowed", function() { return windowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitInto", function() { return splitInto; });
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.4.11/Option.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.4.11/Util.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.js */ "./.fable/fable-library.2.4.11/Map.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Set.js */ "./.fable/fable-library.2.4.11/Set.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.4.11/Seq.js");







function indexNotFound() {
  throw new Error("An index satisfying the predicate was not found in the collection.");
}

function append(array1, array2, cons) {
  if (ArrayBuffer.isView(array1)) {
    const len1 = array1.length | 0;
    const len2 = array2.length | 0;
    const newArray = new cons(len1 + len2);

    for (let i = 0; i <= len1 - 1; i++) {
      newArray[i] = array1[i];
    }

    for (let i$$1 = 0; i$$1 <= len2 - 1; i$$1++) {
      newArray[i$$1 + len1] = array2[i$$1];
    }

    return newArray;
  } else {
    return array1.concat(array2);
  }
}
function filter(predicate, array) {
  return array.filter(predicate);
}
function fill(target, targetIndex, count, value) {
  target.fill(value, targetIndex, targetIndex + count);
  return target;
}
function getSubArray(array$$3, start$$1, count$$2) {
  return array$$3.slice(start$$1, start$$1 + count$$2);
}
function last(array$$5) {
  if (array$$5.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  }

  return array$$5[array$$5.length - 1];
}
function tryLast(array$$6) {
  if (array$$6.length === 0) {
    return null;
  } else {
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(array$$6[array$$6.length - 1]);
  }
}
function mapIndexed(f, source, cons$$1) {
  if (ArrayBuffer.isView(source)) {
    const len = source.length | 0;
    const target$$1 = new cons$$1(len);

    for (let i$$2 = 0; i$$2 <= len - 1; i$$2++) {
      target$$1[i$$2] = f(i$$2, source[i$$2]);
    }

    return target$$1;
  } else {
    return source.map(function (delegateArg0, delegateArg1) {
      return f(delegateArg1, delegateArg0);
    });
  }
}
function map(f$$1, source$$1, cons$$2) {
  if (ArrayBuffer.isView(source$$1)) {
    const len$$1 = source$$1.length | 0;
    const target$$2 = new cons$$2(len$$1);

    for (let i$$4 = 0; i$$4 <= len$$1 - 1; i$$4++) {
      target$$2[i$$4] = f$$1(source$$1[i$$4]);
    }

    return target$$2;
  } else {
    return source$$1.map(function mapping$$1(x$$1) {
      return f$$1(x$$1);
    });
  }
}
function mapIndexed2(f$$2, source1, source2, cons$$3) {
  if (source1.length !== source2.length) {
    throw new Error("Arrays had different lengths");
  }

  const result = new cons$$3(source1.length);

  for (let i$$5 = 0; i$$5 <= source1.length - 1; i$$5++) {
    result[i$$5] = f$$2(i$$5, source1[i$$5], source2[i$$5]);
  }

  return result;
}
function map2(f$$3, source1$$1, source2$$1, cons$$4) {
  if (source1$$1.length !== source2$$1.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$1 = new cons$$4(source1$$1.length);

  for (let i$$6 = 0; i$$6 <= source1$$1.length - 1; i$$6++) {
    result$$1[i$$6] = f$$3(source1$$1[i$$6], source2$$1[i$$6]);
  }

  return result$$1;
}
function mapIndexed3(f$$4, source1$$2, source2$$2, source3, cons$$5) {
  if (source1$$2.length !== source2$$2.length ? true : source2$$2.length !== source3.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$2 = new cons$$5(source1$$2.length);

  for (let i$$7 = 0; i$$7 <= source1$$2.length - 1; i$$7++) {
    result$$2[i$$7] = f$$4(i$$7, source1$$2[i$$7], source2$$2[i$$7], source3[i$$7]);
  }

  return result$$2;
}
function map3(f$$5, source1$$3, source2$$3, source3$$1, cons$$6) {
  if (source1$$3.length !== source2$$3.length ? true : source2$$3.length !== source3$$1.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$3 = new cons$$6(source1$$3.length);

  for (let i$$8 = 0; i$$8 <= source1$$3.length - 1; i$$8++) {
    result$$3[i$$8] = f$$5(source1$$3[i$$8], source2$$3[i$$8], source3$$1[i$$8]);
  }

  return result$$3;
}
function mapFold(mapping$$2, state, array$$9, cons$$7) {
  const matchValue = array$$9.length | 0;

  if (matchValue === 0) {
    return [[], state];
  } else {
    let acc = state;
    const res = new cons$$7(matchValue);

    for (let i$$9 = 0; i$$9 <= array$$9.length - 1; i$$9++) {
      const patternInput = mapping$$2(acc, array$$9[i$$9]);
      res[i$$9] = patternInput[0];
      acc = patternInput[1];
    }

    return [res, acc];
  }
}
function mapFoldBack(mapping$$3, array$$10, state$$1, cons$$8) {
  const matchValue$$1 = array$$10.length | 0;

  if (matchValue$$1 === 0) {
    return [[], state$$1];
  } else {
    let acc$$1 = state$$1;
    const res$$1 = new cons$$8(matchValue$$1);

    for (let i$$10 = array$$10.length - 1; i$$10 >= 0; i$$10--) {
      const patternInput$$1 = mapping$$3(array$$10[i$$10], acc$$1);
      res$$1[i$$10] = patternInput$$1[0];
      acc$$1 = patternInput$$1[1];
    }

    return [res$$1, acc$$1];
  }
}
function indexed(source$$2) {
  const len$$4 = source$$2.length | 0;
  const target$$3 = new Array(len$$4);

  for (let i$$11 = 0; i$$11 <= len$$4 - 1; i$$11++) {
    target$$3[i$$11] = [i$$11, source$$2[i$$11]];
  }

  return target$$3;
}
function truncate(count$$4, array$$11) {
  const count$$5 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["max"])(_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], 0, count$$4) | 0;
  return array$$11.slice(0, 0 + count$$5);
}
function concat(arrays, cons$$9) {
  var arr$$3;
  const arrays$$1 = Array.from(arrays);
  const matchValue$$2 = arrays$$1.length | 0;

  switch (matchValue$$2) {
    case 0:
      {
        return new cons$$9(0);
      }

    case 1:
      {
        return arrays$$1[0];
      }

    default:
      {
        if (arr$$3 = arrays$$1[0], ArrayBuffer.isView(arr$$3)) {
          let totalIdx = 0;
          let totalLength = 0;

          for (let idx = 0; idx <= arrays$$1.length - 1; idx++) {
            const arr$$4 = arrays$$1[idx];
            totalLength = totalLength + arr$$4.length;
          }

          const result$$4 = new cons$$9(totalLength);

          for (let idx$$1 = 0; idx$$1 <= arrays$$1.length - 1; idx$$1++) {
            const arr$$5 = arrays$$1[idx$$1];

            for (let j = 0; j <= arr$$5.length - 1; j++) {
              result$$4[totalIdx] = arr$$5[j];
              totalIdx = totalIdx + 1;
            }
          }

          return result$$4;
        } else {
          return arrays$$1[0].concat(...arrays$$1.slice(1));
        }
      }
  }
}
function collect(mapping$$4, array$$14, cons$$10) {
  const mapped = map(mapping$$4, array$$14, Array);
  return concat(mapped, cons$$10);
}
function countBy(projection, array$$15, eq) {
  const dict = Object(_Map_js__WEBPACK_IMPORTED_MODULE_2__["createMutable"])([], eq);
  const keys = [];

  for (let idx$$2 = 0; idx$$2 <= array$$15.length - 1; idx$$2++) {
    const value$$2 = array$$15[idx$$2];
    const key = projection(value$$2);
    const matchValue$$3 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["tryGetValue"])(dict, key, 0);

    if (matchValue$$3[0]) {
      dict.set(key, matchValue$$3[1] + 1);
    } else {
      dict.set(key, 1);
      const value$$3 = keys.push(key);
      value$$3, null;
    }
  }

  const result$$5 = map(function (key$$1) {
    return [key$$1, Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["getItemFromDict"])(dict, key$$1)];
  }, keys, Array);
  return result$$5;
}
function distinctBy(projection$$1, array$$17, eq$$1) {
  const hashSet = Object(_Set_js__WEBPACK_IMPORTED_MODULE_3__["createMutable"])([], eq$$1);
  return filter(function predicate$$2($arg$$3) {
    const arg00 = projection$$1($arg$$3);
    return Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["addToSet"])(arg00, hashSet);
  }, array$$17);
}
function distinct(array$$19, eq$$2) {
  return distinctBy(function (x$$2) {
    return x$$2;
  }, array$$19, eq$$2);
}
function where(predicate$$3, array$$20) {
  return array$$20.filter(predicate$$3);
}
function contains(value$$4, array$$22, eq$$3) {
  const loop = function loop($i$$12$$79) {
    loop: while (true) {
      const i$$12 = $i$$12$$79;

      if (i$$12 >= array$$22.length) {
        return false;
      } else if (eq$$3.Equals(value$$4, array$$22[i$$12])) {
        return true;
      } else {
        $i$$12$$79 = i$$12 + 1;
        continue loop;
      }

      break;
    }
  };

  return loop(0);
}
function except(itemsToExclude, array$$23, eq$$4) {
  if (array$$23.length === 0) {
    return array$$23;
  } else {
    const cached = Object(_Set_js__WEBPACK_IMPORTED_MODULE_3__["createMutable"])(itemsToExclude, eq$$4);
    return array$$23.filter(function predicate$$5(arg00$$1) {
      return Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["addToSet"])(arg00$$1, cached);
    });
  }
}
function groupBy(projection$$2, array$$26, cons$$11, eq$$5) {
  const dict$$1 = Object(_Map_js__WEBPACK_IMPORTED_MODULE_2__["createMutable"])([], eq$$5);
  const keys$$1 = [];

  for (let idx$$3 = 0; idx$$3 <= array$$26.length - 1; idx$$3++) {
    const v = array$$26[idx$$3];
    const key$$2 = projection$$2(v);
    const matchValue$$4 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["tryGetValue"])(dict$$1, key$$2, null);

    if (matchValue$$4[0]) {
      dict$$1.set(key$$2, new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"](v, matchValue$$4[1]));
    } else {
      Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["addToDict"])(dict$$1, key$$2, new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"](v, new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"]()));
      const value$$5 = keys$$1.push(key$$2);
      value$$5, null;
    }
  }

  const result$$6 = map(function (key$$3) {
    var array$$28;
    return [key$$3, (array$$28 = cons$$11.from(Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["getItemFromDict"])(dict$$1, key$$3)), (array$$28.reverse()))];
  }, keys$$1, Array);
  return result$$6;
}
function empty(cons$$12) {
  return new cons$$12(0);
}
function singleton(value$$6, cons$$14) {
  const ar = new cons$$14(1);
  ar[0] = value$$6;
  return ar;
}
function initialize(count$$8, initializer, cons$$15) {
  if (count$$8 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  }

  const result$$7 = new cons$$15(count$$8);

  for (let i$$13 = 0; i$$13 <= count$$8 - 1; i$$13++) {
    result$$7[i$$13] = initializer(i$$13);
  }

  return result$$7;
}
function pairwise(array$$30) {
  if (array$$30.length < 2) {
    return [];
  } else {
    const count$$9 = array$$30.length - 1 | 0;
    const result$$8 = new Array(count$$9);

    for (let i$$14 = 0; i$$14 <= count$$9 - 1; i$$14++) {
      result$$8[i$$14] = [array$$30[i$$14], array$$30[i$$14 + 1]];
    }

    return result$$8;
  }
}
function replicate(count$$10, initial, cons$$16) {
  if (count$$10 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  }

  const result$$9 = new cons$$16(count$$10);

  for (let i$$15 = 0; i$$15 <= result$$9.length - 1; i$$15++) {
    result$$9[i$$15] = initial;
  }

  return result$$9;
}
function copy(array$$31, cons$$17) {
  return array$$31.slice();
}
function reverse(array$$33, cons$$18) {
  const array$$35 = array$$33.slice();
  return array$$35.reverse();
}
function scan(folder, state$$2, array$$37, cons$$19) {
  const res$$2 = new cons$$19(array$$37.length + 1);
  res$$2[0] = state$$2;

  for (let i$$16 = 0; i$$16 <= array$$37.length - 1; i$$16++) {
    res$$2[i$$16 + 1] = folder(res$$2[i$$16], array$$37[i$$16]);
  }

  return res$$2;
}
function scanBack(folder$$1, array$$38, state$$3, cons$$20) {
  const res$$3 = new cons$$20(array$$38.length + 1);
  res$$3[array$$38.length] = state$$3;

  for (let i$$17 = array$$38.length - 1; i$$17 >= 0; i$$17--) {
    res$$3[i$$17] = folder$$1(array$$38[i$$17], res$$3[i$$17 + 1]);
  }

  return res$$3;
}
function skip(count$$11, array$$39, cons$$21) {
  if (count$$11 > array$$39.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
  }

  if (count$$11 === array$$39.length) {
    return new cons$$21(0);
  } else {
    const count$$12 = (count$$11 < 0 ? 0 : count$$11) | 0;
    return array$$39.slice(count$$12);
  }
}
function skipWhile(predicate$$7, array$$41, cons$$23) {
  let count$$14 = 0;

  while (count$$14 < array$$41.length ? predicate$$7(array$$41[count$$14]) : false) {
    count$$14 = count$$14 + 1;
  }

  if (count$$14 === array$$41.length) {
    return new cons$$23(0);
  } else {
    const count$$15 = count$$14 | 0;
    return array$$41.slice(count$$15);
  }
}
function take(count$$16, array$$43, cons$$25) {
  if (count$$16 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  }

  if (count$$16 > array$$43.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
  }

  if (count$$16 === 0) {
    return new cons$$25(0);
  } else {
    return array$$43.slice(0, 0 + count$$16);
  }
}
function takeWhile(predicate$$8, array$$45, cons$$27) {
  let count$$18 = 0;

  while (count$$18 < array$$45.length ? predicate$$8(array$$45[count$$18]) : false) {
    count$$18 = count$$18 + 1;
  }

  if (count$$18 === 0) {
    return new cons$$27(0);
  } else {
    const count$$19 = count$$18 | 0;
    return array$$45.slice(0, 0 + count$$19);
  }
}
function addRangeInPlace(range, array$$47) {
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_5__["iterate"])(function (x$$3) {
    const value$$7 = array$$47.push(x$$3);
    value$$7, null;
  }, range);
}
function removeInPlace(item$$4, array$$49) {
  const i$$18 = array$$49.indexOf(item$$4);

  if (i$$18 > -1) {
    const value$$8 = array$$49.splice(i$$18, 1);
    value$$8, null;
    return true;
  } else {
    return false;
  }
}
function removeAllInPlace(predicate$$9, array$$52) {
  const countRemoveAll = function countRemoveAll(count$$20) {
    const i$$19 = array$$52.findIndex(predicate$$9);

    if (i$$19 > -1) {
      const value$$9 = array$$52.splice(i$$19, 1);
      value$$9, null;
      return countRemoveAll(count$$20) + 1 | 0;
    } else {
      return count$$20 | 0;
    }
  };

  return countRemoveAll(0) | 0;
}
function copyTo(source$$3, sourceIndex, target$$4, targetIndex$$1, count$$21) {
  const diff = targetIndex$$1 - sourceIndex | 0;

  for (let i$$20 = sourceIndex; i$$20 <= sourceIndex + count$$21 - 1; i$$20++) {
    target$$4[i$$20 + diff] = source$$3[i$$20];
  }
}
function partition(f$$6, source$$4, cons$$29) {
  const len$$7 = source$$4.length | 0;
  const res1 = new cons$$29(len$$7);
  const res2 = new cons$$29(len$$7);
  let iTrue = 0;
  let iFalse = 0;

  for (let i$$21 = 0; i$$21 <= len$$7 - 1; i$$21++) {
    if (f$$6(source$$4[i$$21])) {
      res1[iTrue] = source$$4[i$$21];
      iTrue = iTrue + 1;
    } else {
      res2[iFalse] = source$$4[i$$21];
      iFalse = iFalse + 1;
    }
  }

  return [(truncate(iTrue, res1)), (truncate(iFalse, res2))];
}
function find(predicate$$11, array$$57) {
  const matchValue$$5 = array$$57.find(predicate$$11);

  if (matchValue$$5 == null) {
    return indexNotFound();
  } else {
    const res$$4 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$5);
    return res$$4;
  }
}
function tryFind(predicate$$13, array$$59) {
  return array$$59.find(predicate$$13);
}
function findIndex(predicate$$15, array$$61) {
  const matchValue$$6 = array$$61.findIndex(predicate$$15);

  if (matchValue$$6 > -1) {
    return matchValue$$6 | 0;
  } else {
    return indexNotFound() | 0;
  }
}
function tryFindIndex(predicate$$17, array$$63) {
  const matchValue$$7 = array$$63.findIndex(predicate$$17);

  if (matchValue$$7 > -1) {
    return matchValue$$7;
  } else {
    return null;
  }
}
function pick(chooser, array$$65) {
  const loop$$1 = function loop$$1($i$$22$$147) {
    loop$$1: while (true) {
      const i$$22 = $i$$22$$147;

      if (i$$22 >= array$$65.length) {
        return indexNotFound();
      } else {
        const matchValue$$8 = chooser(array$$65[i$$22]);

        if (matchValue$$8 != null) {
          const res$$5 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$8);
          return res$$5;
        } else {
          $i$$22$$147 = i$$22 + 1;
          continue loop$$1;
        }
      }

      break;
    }
  };

  return loop$$1(0);
}
function tryPick(chooser$$1, array$$66) {
  const loop$$2 = function loop$$2($i$$23$$150) {
    loop$$2: while (true) {
      const i$$23 = $i$$23$$150;

      if (i$$23 >= array$$66.length) {
        return null;
      } else {
        const matchValue$$9 = chooser$$1(array$$66[i$$23]);

        if (matchValue$$9 == null) {
          $i$$23$$150 = i$$23 + 1;
          continue loop$$2;
        } else {
          return matchValue$$9;
        }
      }

      break;
    }
  };

  return loop$$2(0);
}
function findBack(predicate$$19, array$$67) {
  const loop$$3 = function loop$$3($i$$24$$153) {
    loop$$3: while (true) {
      const i$$24 = $i$$24$$153;

      if (i$$24 < 0) {
        return indexNotFound();
      } else if (predicate$$19(array$$67[i$$24])) {
        return array$$67[i$$24];
      } else {
        $i$$24$$153 = i$$24 - 1;
        continue loop$$3;
      }

      break;
    }
  };

  return loop$$3(array$$67.length - 1);
}
function tryFindBack(predicate$$20, array$$68) {
  const loop$$4 = function loop$$4($i$$25$$156) {
    loop$$4: while (true) {
      const i$$25 = $i$$25$$156;

      if (i$$25 < 0) {
        return null;
      } else if (predicate$$20(array$$68[i$$25])) {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(array$$68[i$$25]);
      } else {
        $i$$25$$156 = i$$25 - 1;
        continue loop$$4;
      }

      break;
    }
  };

  return loop$$4(array$$68.length - 1);
}
function findLastIndex(predicate$$21, array$$69) {
  const loop$$5 = function loop$$5($i$$26$$159) {
    loop$$5: while (true) {
      const i$$26 = $i$$26$$159;

      if (i$$26 < 0) {
        return -1 | 0;
      } else if (predicate$$21(array$$69[i$$26])) {
        return i$$26 | 0;
      } else {
        $i$$26$$159 = i$$26 - 1;
        continue loop$$5;
      }

      break;
    }
  };

  return loop$$5(array$$69.length - 1) | 0;
}
function findIndexBack(predicate$$22, array$$70) {
  const loop$$6 = function loop$$6($i$$27$$162) {
    loop$$6: while (true) {
      const i$$27 = $i$$27$$162;

      if (i$$27 < 0) {
        return indexNotFound() | 0;
      } else if (predicate$$22(array$$70[i$$27])) {
        return i$$27 | 0;
      } else {
        $i$$27$$162 = i$$27 - 1;
        continue loop$$6;
      }

      break;
    }
  };

  return loop$$6(array$$70.length - 1) | 0;
}
function tryFindIndexBack(predicate$$23, array$$71) {
  const loop$$7 = function loop$$7($i$$28$$165) {
    loop$$7: while (true) {
      const i$$28 = $i$$28$$165;

      if (i$$28 < 0) {
        return null;
      } else if (predicate$$23(array$$71[i$$28])) {
        return i$$28;
      } else {
        $i$$28$$165 = i$$28 - 1;
        continue loop$$7;
      }

      break;
    }
  };

  return loop$$7(array$$71.length - 1);
}
function choose(chooser$$2, array$$72, cons$$30) {
  const arr$$6 = array$$72.filter(function f$$7(x$$4) {
    const option = chooser$$2(x$$4);
    return option != null;
  });
  return map(function g(x$$5) {
    const option$$1 = chooser$$2(x$$5);
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(option$$1);
  }, arr$$6, cons$$30);
}
function foldIndexed(folder$$2, state$$4, array$$74) {
  return array$$74.reduce(function (delegateArg0$$1, delegateArg1$$1, delegateArg2) {
    return folder$$2(delegateArg2, delegateArg0$$1, delegateArg1$$1);
  }, state$$4);
}
function fold(folder$$4, state$$6, array$$76) {
  return array$$76.reduce(function (delegateArg0$$2, delegateArg1$$2) {
    return folder$$4(delegateArg0$$2, delegateArg1$$2);
  }, state$$6);
}
function iterate(action, array$$78) {
  for (let i$$30 = 0; i$$30 <= array$$78.length - 1; i$$30++) {
    action(array$$78[i$$30]);
  }
}
function iterateIndexed(action$$1, array$$79) {
  for (let i$$31 = 0; i$$31 <= array$$79.length - 1; i$$31++) {
    action$$1(i$$31, array$$79[i$$31]);
  }
}
function iterate2(action$$2, array1$$2, array2$$2) {
  if (array1$$2.length !== array2$$2.length) {
    throw new Error("Arrays had different lengths");
  }

  for (let i$$32 = 0; i$$32 <= array1$$2.length - 1; i$$32++) {
    action$$2(array1$$2[i$$32], array2$$2[i$$32]);
  }
}
function iterateIndexed2(action$$3, array1$$3, array2$$3) {
  if (array1$$3.length !== array2$$3.length) {
    throw new Error("Arrays had different lengths");
  }

  for (let i$$33 = 0; i$$33 <= array1$$3.length - 1; i$$33++) {
    action$$3(i$$33, array1$$3[i$$33], array2$$3[i$$33]);
  }
}
function isEmpty(array$$80) {
  return array$$80.length === 0;
}
function forAll(predicate$$25, array$$81) {
  return array$$81.every(predicate$$25);
}
function permute(f$$8, array$$83) {
  const size = array$$83.length | 0;
  const res$$7 = new array$$83.constructor(array$$83.length);
  const checkFlags = new Array(size);
  iterateIndexed(function (i$$34, x$$8) {
    const j$$1 = f$$8(i$$34) | 0;

    if (j$$1 < 0 ? true : j$$1 >= size) {
      throw new Error("Not a valid permutation");
    }

    res$$7[j$$1] = x$$8;
    checkFlags[j$$1] = 1;
  }, array$$83);
  const isValid = forAll(function (y) {
    return 1 === y;
  }, checkFlags);

  if (!isValid) {
    throw new Error("Not a valid permutation");
  }

  return res$$7;
}
function setSlice(target$$5, lower, upper, source$$5) {
  const lower$$1 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["defaultArg"])(lower, 0) | 0;
  const upper$$1 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["defaultArg"])(upper, 0) | 0;
  const length = (upper$$1 > 0 ? upper$$1 : target$$5.length - 1) - lower$$1 | 0;

  if (ArrayBuffer.isView(target$$5) ? source$$5.length <= length : false) {
    const target$$6 = target$$5;
    const source$$6 = source$$5;
    return target$$6.set(source$$6, lower$$1);
  } else {
    for (let i$$35 = 0; i$$35 <= length; i$$35++) {
      target$$5[i$$35 + lower$$1] = source$$5[i$$35];
    }
  }
}
function sortInPlaceBy(projection$$3, xs, comparer) {
  xs.sort(function (x$$10, y$$1) {
    return comparer.Compare(projection$$3(x$$10), projection$$3(y$$1));
  });
}
function sortInPlace(xs$$1, comparer$$1) {
  xs$$1.sort(function (x$$11, y$$2) {
    return comparer$$1.Compare(x$$11, y$$2);
  });
}

function copyArray(array$$84) {
  const result$$10 = new array$$84.constructor(array$$84.length);

  for (let i$$36 = 0; i$$36 <= array$$84.length - 1; i$$36++) {
    result$$10[i$$36] = array$$84[i$$36];
  }

  return result$$10;
}

function sort(xs$$2, comparer$$2) {
  const xs$$3 = copyArray(xs$$2);
  xs$$3.sort(function comparer$$3(x$$12, y$$3) {
    return comparer$$2.Compare(x$$12, y$$3);
  });
  return xs$$3;
}
function sortBy(projection$$4, xs$$4, comparer$$4) {
  const xs$$5 = copyArray(xs$$4);
  xs$$5.sort(function comparer$$5(x$$13, y$$4) {
    return comparer$$4.Compare(projection$$4(x$$13), projection$$4(y$$4));
  });
  return xs$$5;
}
function sortDescending(xs$$6, comparer$$6) {
  const xs$$7 = copyArray(xs$$6);
  xs$$7.sort(function comparer$$7(x$$14, y$$5) {
    return comparer$$6.Compare(x$$14, y$$5) * -1;
  });
  return xs$$7;
}
function sortByDescending(projection$$5, xs$$8, comparer$$8) {
  const xs$$9 = copyArray(xs$$8);
  xs$$9.sort(function comparer$$9(x$$15, y$$6) {
    return comparer$$8.Compare(projection$$5(x$$15), projection$$5(y$$6)) * -1;
  });
  return xs$$9;
}
function sortWith(comparer$$10, xs$$10) {
  const xs$$11 = copyArray(xs$$10);
  xs$$11.sort(comparer$$10);
  return xs$$11;
}
function unfold(generator, state$$8) {
  const res$$8 = [];

  const loop$$8 = function loop$$8($state$$9$$224) {
    loop$$8: while (true) {
      const state$$9 = $state$$9$$224;
      const matchValue$$10 = generator(state$$9);

      if (matchValue$$10 != null) {
        const x$$16 = matchValue$$10[0];
        const s$0027$$2 = matchValue$$10[1];
        const value$$10 = res$$8.push(x$$16);
        value$$10, null;
        $state$$9$$224 = s$0027$$2;
        continue loop$$8;
      }

      break;
    }
  };

  loop$$8(state$$8);
  return res$$8;
}
function unzip(array$$86) {
  const len$$9 = array$$86.length | 0;
  const res1$$1 = new Array(len$$9);
  const res2$$1 = new Array(len$$9);
  iterateIndexed(function (i$$37, tupledArg) {
    res1$$1[i$$37] = tupledArg[0];
    res2$$1[i$$37] = tupledArg[1];
  }, array$$86);
  return [res1$$1, res2$$1];
}
function unzip3(array$$87) {
  const len$$12 = array$$87.length | 0;
  const res1$$2 = new Array(len$$12);
  const res2$$2 = new Array(len$$12);
  const res3 = new Array(len$$12);
  iterateIndexed(function (i$$38, tupledArg$$1) {
    res1$$2[i$$38] = tupledArg$$1[0];
    res2$$2[i$$38] = tupledArg$$1[1];
    res3[i$$38] = tupledArg$$1[2];
  }, array$$87);
  return [res1$$2, res2$$2, res3];
}
function zip(array1$$4, array2$$4) {
  if (array1$$4.length !== array2$$4.length) {
    throw new Error("Arrays had different lengths");
  }

  let result$$11;
  const len$$16 = array1$$4.length | 0;
  result$$11 = new Array(len$$16);

  for (let i$$39 = 0; i$$39 <= array1$$4.length - 1; i$$39++) {
    result$$11[i$$39] = [array1$$4[i$$39], array2$$4[i$$39]];
  }

  return result$$11;
}
function zip3(array1$$5, array2$$5, array3) {
  if (array1$$5.length !== array2$$5.length ? true : array2$$5.length !== array3.length) {
    throw new Error("Arrays had different lengths");
  }

  let result$$12;
  const len$$17 = array1$$5.length | 0;
  result$$12 = new Array(len$$17);

  for (let i$$40 = 0; i$$40 <= array1$$5.length - 1; i$$40++) {
    result$$12[i$$40] = [array1$$5[i$$40], array2$$5[i$$40], array3[i$$40]];
  }

  return result$$12;
}
function chunkBySize(chunkSize, array$$88) {
  if (chunkSize < 1) {
    throw new Error("The input must be positive.\\nParameter name: size");
  }

  if (array$$88.length === 0) {
    return [[]];
  } else {
    const result$$13 = [];

    for (let x$$17 = 0; x$$17 <= ~~Math.ceil(array$$88.length / chunkSize) - 1; x$$17++) {
      const start$$8 = x$$17 * chunkSize | 0;
      const slice = array$$88.slice(start$$8, start$$8 + chunkSize);
      const value$$11 = result$$13.push(slice);
      value$$11, null;
    }

    return result$$13;
  }
}
function splitAt(index$$4, array$$91) {
  if (index$$4 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: index");
  }

  if (index$$4 > array$$91.length) {
    throw new Error("The input sequence has an insufficient number of elements.\\nParameter name: index");
  }

  return [array$$91.slice(0, 0 + index$$4), array$$91.slice(index$$4)];
}
function compareWith(comparer$$12, array1$$6, array2$$6) {
  if (array1$$6 == null) {
    if (array2$$6 == null) {
      return 0;
    } else {
      return -1 | 0;
    }
  } else if (array2$$6 == null) {
    return 1;
  } else {
    let i$$41 = 0;
    let result$$14 = 0;
    const length1 = array1$$6.length | 0;
    const length2 = array2$$6.length | 0;

    if (length1 > length2) {
      return 1;
    } else if (length1 < length2) {
      return -1 | 0;
    } else {
      while (i$$41 < length1 ? result$$14 === 0 : false) {
        result$$14 = comparer$$12(array1$$6[i$$41], array2$$6[i$$41]);
        i$$41 = i$$41 + 1;
      }

      return result$$14 | 0;
    }
  }
}
function equalsWith(comparer$$13, array1$$7, array2$$7) {
  return compareWith(_Util_js__WEBPACK_IMPORTED_MODULE_1__["compare"], array1$$7, array2$$7) === 0;
}
function exactlyOne(array$$94) {
  if (array$$94.length === 1) {
    return array$$94[0];
  } else if (array$$94.length === 0) {
    throw new Error("The input sequence was empty\\nParameter name: array");
  } else {
    throw new Error("Input array too long\\nParameter name: array");
  }
}
function head(array$$95) {
  if (array$$95.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    return array$$95[0];
  }
}
function tryHead(array$$96) {
  if (array$$96.length === 0) {
    return null;
  } else {
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(array$$96[0]);
  }
}
function tail(array$$97) {
  if (array$$97.length === 0) {
    throw new Error("Not enough elements\\nParameter name: array");
  }

  return array$$97.slice(1);
}
function item(index$$5, array$$99) {
  return array$$99[index$$5];
}
function tryItem(index$$6, array$$100) {
  if (index$$6 < 0 ? true : index$$6 >= array$$100.length) {
    return null;
  } else {
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(array$$100[index$$6]);
  }
}
function foldBackIndexed(folder$$6, array$$101, state$$10) {
  return array$$101.reduceRight(function (delegateArg0$$3, delegateArg1$$3, delegateArg2$$1) {
    return folder$$6(delegateArg2$$1, delegateArg1$$3, delegateArg0$$3);
  }, state$$10);
}
function foldBack(folder$$8, array$$103, state$$12) {
  return array$$103.reduceRight(function (delegateArg0$$4, delegateArg1$$4) {
    return folder$$8(delegateArg1$$4, delegateArg0$$4);
  }, state$$12);
}
function foldIndexed2(folder$$10, state$$14, array1$$8, array2$$8) {
  let acc$$6 = state$$14;

  if (array1$$8.length !== array2$$8.length) {
    throw new Error("Arrays have different lengths");
  }

  for (let i$$43 = 0; i$$43 <= array1$$8.length - 1; i$$43++) {
    acc$$6 = folder$$10(i$$43, acc$$6, array1$$8[i$$43], array2$$8[i$$43]);
  }

  return acc$$6;
}
function fold2(folder$$11, state$$15, array1$$9, array2$$9) {
  return foldIndexed2(function (_arg1, acc$$7, x$$20, y$$7) {
    return folder$$11(acc$$7, x$$20, y$$7);
  }, state$$15, array1$$9, array2$$9);
}
function foldBackIndexed2(folder$$12, array1$$10, array2$$10, state$$16) {
  let acc$$8 = state$$16;

  if (array1$$10.length !== array2$$10.length) {
    throw new Error("Arrays had different lengths");
  }

  const size$$1 = array1$$10.length | 0;

  for (let i$$44 = 1; i$$44 <= size$$1; i$$44++) {
    acc$$8 = folder$$12(i$$44 - 1, array1$$10[size$$1 - i$$44], array2$$10[size$$1 - i$$44], acc$$8);
  }

  return acc$$8;
}
function foldBack2(f$$9, array1$$11, array2$$11, state$$17) {
  return foldBackIndexed2(function (_arg1$$1, x$$21, y$$8, acc$$9) {
    return f$$9(x$$21, y$$8, acc$$9);
  }, array1$$11, array2$$11, state$$17);
}
function reduce(reduction, array$$105) {
  if (array$$105.length === 0) {
    throw new Error("The input array was empty");
  }

  return array$$105.reduce(reduction);
}
function reduceBack(reduction$$2, array$$107) {
  if (array$$107.length === 0) {
    throw new Error("The input array was empty");
  }

  return array$$107.reduceRight(reduction$$2);
}
function forAll2(predicate$$27, array1$$12, array2$$12) {
  return fold2(function (acc$$10, x$$22, y$$9) {
    return acc$$10 ? predicate$$27(x$$22, y$$9) : false;
  }, true, array1$$12, array2$$12);
}
function existsOffset($predicate$$28$$279, $array$$109$$280, $index$$7$$281) {
  existsOffset: while (true) {
    const predicate$$28 = $predicate$$28$$279,
          array$$109 = $array$$109$$280,
          index$$7 = $index$$7$$281;

    if (index$$7 === array$$109.length) {
      return false;
    } else if (predicate$$28(array$$109[index$$7])) {
      return true;
    } else {
      $predicate$$28$$279 = predicate$$28;
      $array$$109$$280 = array$$109;
      $index$$7$$281 = index$$7 + 1;
      continue existsOffset;
    }

    break;
  }
}
function exists(predicate$$29, array$$110) {
  return existsOffset(predicate$$29, array$$110, 0);
}
function existsOffset2($predicate$$30$$284, $array1$$13$$285, $array2$$13$$286, $index$$8$$287) {
  existsOffset2: while (true) {
    const predicate$$30 = $predicate$$30$$284,
          array1$$13 = $array1$$13$$285,
          array2$$13 = $array2$$13$$286,
          index$$8 = $index$$8$$287;

    if (index$$8 === array1$$13.length) {
      return false;
    } else if (predicate$$30(array1$$13[index$$8], array2$$13[index$$8])) {
      return true;
    } else {
      $predicate$$30$$284 = predicate$$30;
      $array1$$13$$285 = array1$$13;
      $array2$$13$$286 = array2$$13;
      $index$$8$$287 = index$$8 + 1;
      continue existsOffset2;
    }

    break;
  }
}
function exists2(predicate$$31, array1$$14, array2$$14) {
  if (array1$$14.length !== array2$$14.length) {
    throw new Error("Arrays had different lengths");
  }

  return existsOffset2(predicate$$31, array1$$14, array2$$14, 0);
}
function sum(array$$111, adder) {
  let acc$$11 = adder.GetZero();

  for (let i$$45 = 0; i$$45 <= array$$111.length - 1; i$$45++) {
    acc$$11 = adder.Add(acc$$11, array$$111[i$$45]);
  }

  return acc$$11;
}
function sumBy(projection$$6, array$$112, adder$$1) {
  let acc$$12 = adder$$1.GetZero();

  for (let i$$46 = 0; i$$46 <= array$$112.length - 1; i$$46++) {
    acc$$12 = adder$$1.Add(acc$$12, projection$$6(array$$112[i$$46]));
  }

  return acc$$12;
}
function maxBy(projection$$7, xs$$12, comparer$$14) {
  return reduce(function (x$$23, y$$10) {
    return comparer$$14.Compare(projection$$7(y$$10), projection$$7(x$$23)) > 0 ? y$$10 : x$$23;
  }, xs$$12);
}
function max(xs$$13, comparer$$15) {
  return reduce(function (x$$24, y$$11) {
    return comparer$$15.Compare(y$$11, x$$24) > 0 ? y$$11 : x$$24;
  }, xs$$13);
}
function minBy(projection$$8, xs$$14, comparer$$16) {
  return reduce(function (x$$25, y$$12) {
    return comparer$$16.Compare(projection$$8(y$$12), projection$$8(x$$25)) > 0 ? x$$25 : y$$12;
  }, xs$$14);
}
function min(xs$$15, comparer$$17) {
  return reduce(function (x$$26, y$$13) {
    return comparer$$17.Compare(y$$13, x$$26) > 0 ? x$$26 : y$$13;
  }, xs$$15);
}
function average(array$$113, averager) {
  if (array$$113.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  }

  let total = averager.GetZero();

  for (let i$$47 = 0; i$$47 <= array$$113.length - 1; i$$47++) {
    total = averager.Add(total, array$$113[i$$47]);
  }

  return averager.DivideByInt(total, array$$113.length);
}
function averageBy(projection$$9, array$$114, averager$$1) {
  if (array$$114.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  }

  let total$$1 = averager$$1.GetZero();

  for (let i$$48 = 0; i$$48 <= array$$114.length - 1; i$$48++) {
    total$$1 = averager$$1.Add(total$$1, projection$$9(array$$114[i$$48]));
  }

  return averager$$1.DivideByInt(total$$1, array$$114.length);
}
function ofSeq(source$$7, cons$$31) {
  return cons$$31.from(source$$7);
}
function ofList(source$$8, cons$$32) {
  return cons$$32.from(source$$8);
}
function toList(source$$9) {
  const len$$18 = source$$9.length | 0;
  let target$$7 = new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"]();

  for (let i$$49 = len$$18 - 1; i$$49 >= 0; i$$49--) {
    target$$7 = new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"](source$$9[i$$49], target$$7);
  }

  return target$$7;
}
function windowed(windowSize, source$$10) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  let res$$9;
  const len$$19 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["max"])(_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], 0, source$$10.length - windowSize) | 0;
  res$$9 = new Array(len$$19);

  for (let i$$50 = windowSize; i$$50 <= source$$10.length; i$$50++) {
    res$$9[i$$50 - windowSize] = source$$10.slice(i$$50 - windowSize, i$$50 - 1 + 1);
  }

  return res$$9;
}
function splitInto(chunks, array$$115) {
  if (chunks < 1) {
    throw new Error("The input must be positive.\\nParameter name: chunks");
  }

  if (array$$115.length === 0) {
    return [[]];
  } else {
    const result$$15 = [];
    const chunks$$1 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["min"])(_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], chunks, array$$115.length) | 0;
    const minChunkSize = ~~(array$$115.length / chunks$$1) | 0;
    const chunksWithExtraItem = array$$115.length % chunks$$1 | 0;

    for (let i$$51 = 0; i$$51 <= chunks$$1 - 1; i$$51++) {
      const chunkSize$$1 = (i$$51 < chunksWithExtraItem ? minChunkSize + 1 : minChunkSize) | 0;
      const start$$11 = i$$51 * minChunkSize + Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["min"])(_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], chunksWithExtraItem, i$$51) | 0;
      const slice$$1 = array$$115.slice(start$$11, start$$11 + chunkSize$$1);
      const value$$12 = result$$15.push(slice$$1);
      value$$12, null;
    }

    return result$$15;
  }
}

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Async.js":
/*!**********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Async.js ***!
  \**********************************************/
/*! exports provided: default, makeAsync, invoke, callThenInvoke, bind, createCancellationToken, cancel, cancelAfter, isCancellationRequested, startChild, awaitPromise, cancellationToken, defaultCancellationToken, catchAsync, fromContinuations, ignore, parallel, sleep, start, startImmediate, startWithContinuations, startAsPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsync", function() { return makeAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callThenInvoke", function() { return callThenInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCancellationToken", function() { return createCancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAfter", function() { return cancelAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCancellationRequested", function() { return isCancellationRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startChild", function() { return startChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitPromise", function() { return awaitPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancellationToken", function() { return cancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCancellationToken", function() { return defaultCancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catchAsync", function() { return catchAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromContinuations", function() { return fromContinuations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignore", function() { return ignore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startImmediate", function() { return startImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startWithContinuations", function() { return startWithContinuations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAsPromise", function() { return startAsPromise; });
/* harmony import */ var _AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncBuilder */ "./.fable/fable-library.2.4.11/AsyncBuilder.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ "./.fable/fable-library.2.4.11/Option.js");
/* harmony import */ var _Seq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Seq */ "./.fable/fable-library.2.4.11/Seq.js");







// Implemented just for type references
class Async {
}
function emptyContinuation(x) {
    // NOP
}
// MakeAsync: body:(AsyncActivation<'T> -> AsyncReturn) -> Async<'T>
function makeAsync(body) {
    return body;
}
// Invoke: computation: Async<'T> -> ctxt:AsyncActivation<'T> -> AsyncReturn
function invoke(computation, ctx) {
    return computation(ctx);
}
// CallThenInvoke: ctxt:AsyncActivation<'T> -> result1:'U -> part2:('U -> Async<'T>) -> AsyncReturn
function callThenInvoke(ctx, result1, part2) {
    return part2(result1)(ctx);
}
// Bind: ctxt:AsyncActivation<'T> -> part1:Async<'U> -> part2:('U -> Async<'T>) -> AsyncReturn
function bind(ctx, part1, part2) {
    return Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedBind"])(part1, part2)(ctx);
}
function createCancellationToken(arg) {
    const token = new _AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["CancellationToken"](typeof arg === "boolean" ? arg : false);
    if (typeof arg === "number") {
        setTimeout(() => { token.cancel(); }, arg);
    }
    return token;
}
function cancel(token) {
    token.cancel();
}
function cancelAfter(token, ms) {
    setTimeout(() => { token.cancel(); }, ms);
}
function isCancellationRequested(token) {
    return token != null && token.isCancelled;
}
function startChild(computation) {
    const promise = startAsPromise(computation);
    // JS Promises are hot, computation has already started
    // but we delay returning the result
    return Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedCont"])((ctx) => Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedReturn"])(awaitPromise(promise))(ctx));
}
function awaitPromise(p) {
    return fromContinuations((conts) => p.then(conts[0]).catch((err) => (err instanceof _AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["OperationCanceledError"]
        ? conts[2] : conts[1])(err)));
}
function cancellationToken() {
    return Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedCont"])((ctx) => ctx.onSuccess(ctx.cancelToken));
}
const defaultCancellationToken = new _AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["CancellationToken"]();
function catchAsync(work) {
    return Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedCont"])((ctx) => {
        work({
            onSuccess: (x) => ctx.onSuccess(Object(_Option__WEBPACK_IMPORTED_MODULE_1__["choice1"])(x)),
            onError: (ex) => ctx.onSuccess(Object(_Option__WEBPACK_IMPORTED_MODULE_1__["choice2"])(ex)),
            onCancel: ctx.onCancel,
            cancelToken: ctx.cancelToken,
            trampoline: ctx.trampoline,
        });
    });
}
function fromContinuations(f) {
    return Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedCont"])((ctx) => f([ctx.onSuccess, ctx.onError, ctx.onCancel]));
}
function ignore(computation) {
    return Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedBind"])(computation, (x) => Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedReturn"])(void 0));
}
function parallel(computations) {
    return awaitPromise(Promise.all(Object(_Seq__WEBPACK_IMPORTED_MODULE_2__["map"])((w) => startAsPromise(w), computations)));
}
function sleep(millisecondsDueTime) {
    return Object(_AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["protectedCont"])((ctx) => {
        let tokenId;
        const timeoutId = setTimeout(() => {
            ctx.cancelToken.removeListener(tokenId);
            ctx.onSuccess(void 0);
        }, millisecondsDueTime);
        tokenId = ctx.cancelToken.addListener(() => {
            clearTimeout(timeoutId);
            ctx.onCancel(new _AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["OperationCanceledError"]());
        });
    });
}
function start(computation, cancellationToken) {
    return startWithContinuations(computation, cancellationToken);
}
function startImmediate(computation, cancellationToken) {
    return start(computation, cancellationToken);
}
function startWithContinuations(computation, continuation, exceptionContinuation, cancellationContinuation, cancelToken) {
    if (typeof continuation !== "function") {
        cancelToken = continuation;
        continuation = null;
    }
    const trampoline = new _AsyncBuilder__WEBPACK_IMPORTED_MODULE_0__["Trampoline"]();
    computation({
        onSuccess: continuation ? continuation : emptyContinuation,
        onError: exceptionContinuation ? exceptionContinuation : emptyContinuation,
        onCancel: cancellationContinuation ? cancellationContinuation : emptyContinuation,
        cancelToken: cancelToken ? cancelToken : defaultCancellationToken,
        trampoline,
    });
}
function startAsPromise(computation, cancellationToken) {
    return new Promise((resolve, reject) => startWithContinuations(computation, resolve, reject, reject, cancellationToken ? cancellationToken : defaultCancellationToken));
}
//# sourceMappingURL=Async.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/AsyncBuilder.js":
/*!*****************************************************!*\
  !*** ./.fable/fable-library.2.4.11/AsyncBuilder.js ***!
  \*****************************************************/
/*! exports provided: CancellationToken, OperationCanceledError, Trampoline, protectedCont, protectedBind, protectedReturn, AsyncBuilder, singleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationToken", function() { return CancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationCanceledError", function() { return OperationCanceledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trampoline", function() { return Trampoline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protectedCont", function() { return protectedCont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protectedBind", function() { return protectedBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protectedReturn", function() { return protectedReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncBuilder", function() { return AsyncBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
class CancellationToken {
    constructor(cancelled = false) {
        this._id = 0;
        this._cancelled = cancelled;
        this._listeners = new Map();
    }
    get isCancelled() {
        return this._cancelled;
    }
    cancel() {
        if (!this._cancelled) {
            this._cancelled = true;
            for (const [, listener] of this._listeners) {
                listener();
            }
        }
    }
    addListener(f) {
        const id = this._id;
        this._listeners.set(this._id++, f);
        return id;
    }
    removeListener(id) {
        return this._listeners.delete(id);
    }
    register(f, state) {
        const $ = this;
        const id = this.addListener(state == null ? f : () => f(state));
        return { Dispose() { $.removeListener(id); } };
    }
}
class OperationCanceledError extends Error {
    constructor() {
        super("The operation was canceled");
        Object.setPrototypeOf(this, OperationCanceledError.prototype);
    }
}
class Trampoline {
    constructor() {
        this.callCount = 0;
    }
    static get maxTrampolineCallCount() {
        return 2000;
    }
    incrementAndCheck() {
        return this.callCount++ > Trampoline.maxTrampolineCallCount;
    }
    hijack(f) {
        this.callCount = 0;
        setTimeout(f, 0);
    }
}
function protectedCont(f) {
    return (ctx) => {
        if (ctx.cancelToken.isCancelled) {
            ctx.onCancel(new OperationCanceledError());
        }
        else if (ctx.trampoline.incrementAndCheck()) {
            ctx.trampoline.hijack(() => {
                try {
                    f(ctx);
                }
                catch (err) {
                    ctx.onError(err);
                }
            });
        }
        else {
            try {
                f(ctx);
            }
            catch (err) {
                ctx.onError(err);
            }
        }
    };
}
function protectedBind(computation, binder) {
    return protectedCont((ctx) => {
        computation({
            onSuccess: (x) => {
                try {
                    binder(x)(ctx);
                }
                catch (ex) {
                    ctx.onError(ex);
                }
            },
            onError: ctx.onError,
            onCancel: ctx.onCancel,
            cancelToken: ctx.cancelToken,
            trampoline: ctx.trampoline,
        });
    });
}
function protectedReturn(value) {
    return protectedCont((ctx) => ctx.onSuccess(value));
}
class AsyncBuilder {
    Bind(computation, binder) {
        return protectedBind(computation, binder);
    }
    Combine(computation1, computation2) {
        return this.Bind(computation1, () => computation2);
    }
    Delay(generator) {
        return protectedCont((ctx) => generator()(ctx));
    }
    For(sequence, body) {
        const iter = sequence[Symbol.iterator]();
        let cur = iter.next();
        return this.While(() => !cur.done, this.Delay(() => {
            const res = body(cur.value);
            cur = iter.next();
            return res;
        }));
    }
    Return(value) {
        return protectedReturn(value);
    }
    ReturnFrom(computation) {
        return computation;
    }
    TryFinally(computation, compensation) {
        return protectedCont((ctx) => {
            computation({
                onSuccess: (x) => {
                    compensation();
                    ctx.onSuccess(x);
                },
                onError: (x) => {
                    compensation();
                    ctx.onError(x);
                },
                onCancel: (x) => {
                    compensation();
                    ctx.onCancel(x);
                },
                cancelToken: ctx.cancelToken,
                trampoline: ctx.trampoline,
            });
        });
    }
    TryWith(computation, catchHandler) {
        return protectedCont((ctx) => {
            computation({
                onSuccess: ctx.onSuccess,
                onCancel: ctx.onCancel,
                cancelToken: ctx.cancelToken,
                trampoline: ctx.trampoline,
                onError: (ex) => {
                    try {
                        catchHandler(ex)(ctx);
                    }
                    catch (ex2) {
                        ctx.onError(ex2);
                    }
                },
            });
        });
    }
    Using(resource, binder) {
        return this.TryFinally(binder(resource), () => resource.Dispose());
    }
    While(guard, computation) {
        if (guard()) {
            return this.Bind(computation, () => this.While(guard, computation));
        }
        else {
            return this.Return(void 0);
        }
    }
    Zero() {
        return protectedCont((ctx) => ctx.onSuccess(void 0));
    }
}
const singleton = new AsyncBuilder();
//# sourceMappingURL=AsyncBuilder.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Date.js":
/*!*********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Date.js ***!
  \*********************************************/
/*! exports provided: offsetRegex, dateOffsetToString, dateToHalfUTCString, toString, default, fromTicks, fromDateTimeOffset, getTicks, minValue, maxValue, parseRaw, parse, tryParse, create, now, utcNow, today, isLeapYear, daysInMonth, toUniversalTime, toLocalTime, specifyKind, timeOfDay, date, day, hour, millisecond, minute, month, second, year, dayOfWeek, dayOfYear, add, addDays, addHours, addMinutes, addSeconds, addMilliseconds, addYears, addMonths, subtract, toLongDateString, toShortDateString, toLongTimeString, toShortTimeString, equals, compare, compareTo, op_Addition, op_Subtraction, isDaylightSavingTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetRegex", function() { return offsetRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateOffsetToString", function() { return dateOffsetToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToHalfUTCString", function() { return dateToHalfUTCString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTicks", function() { return fromTicks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDateTimeOffset", function() { return fromDateTimeOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTicks", function() { return getTicks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minValue", function() { return minValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxValue", function() { return maxValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRaw", function() { return parseRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParse", function() { return tryParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcNow", function() { return utcNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return isLeapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInMonth", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUniversalTime", function() { return toUniversalTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocalTime", function() { return toLocalTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifyKind", function() { return specifyKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeOfDay", function() { return timeOfDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day", function() { return day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hour", function() { return hour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "millisecond", function() { return millisecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minute", function() { return minute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "second", function() { return second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year", function() { return year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfWeek", function() { return dayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfYear", function() { return dayOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHours", function() { return addHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMinutes", function() { return addMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSeconds", function() { return addSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMilliseconds", function() { return addMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addYears", function() { return addYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMonths", function() { return addMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLongDateString", function() { return toLongDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toShortDateString", function() { return toShortDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLongTimeString", function() { return toLongTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toShortTimeString", function() { return toShortTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTo", function() { return compareTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Addition", function() { return op_Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Subtraction", function() { return op_Subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTime", function() { return isDaylightSavingTime; });
/* harmony import */ var _Long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Long */ "./.fable/fable-library.2.4.11/Long.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.4.11/Util.js");
/**
 * DateTimeOffset functions.
 *
 * Note: Date instances are always DateObjects in local
 * timezone (because JS dates are all kinds of messed up).
 * A local date returns UTC epoc when `.getTime()` is called.
 *
 * Basically; invariant: date.getTime() always return UTC time.
 */


const offsetRegex = /(?:Z|[+-](\d+):?([0-5]?\d)?)\s*$/;
function dateOffsetToString(offset) {
    const isMinus = offset < 0;
    offset = Math.abs(offset);
    const hours = ~~(offset / 3600000);
    const minutes = (offset % 3600000) / 60000;
    return (isMinus ? "-" : "+") +
        Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(hours, 2) + ":" +
        Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(minutes, 2);
}
function dateToHalfUTCString(date, half) {
    const str = date.toISOString();
    return half === "first"
        ? str.substring(0, str.indexOf("T"))
        : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function dateToISOString(d, utc) {
    if (utc) {
        return d.toISOString();
    }
    else {
        // JS Date is always local
        const printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
        return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getFullYear(), 4) + "-" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getMonth() + 1, 2) + "-" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getDate(), 2) + "T" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getHours(), 2) + ":" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getMinutes(), 2) + ":" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getSeconds(), 2) + "." +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getMilliseconds(), 3) +
            (printOffset ? dateOffsetToString(d.getTimezoneOffset() * -60000) : "");
    }
}
function dateToISOStringWithOffset(dateWithOffset, offset) {
    const str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + dateOffsetToString(offset);
}
function dateToStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, (match) => {
        let rep = Number.NaN;
        switch (match.substring(0, 1)) {
            case "y":
                const y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                const h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
            case "f":
                rep = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
                break;
        }
        if (Number.isNaN(rep)) {
            return match;
        }
        else {
            return (rep < 10 && match.length > 1) ? "0" + rep : "" + rep;
        }
    });
}
function dateToStringWithOffset(date, format) {
    const d = new Date(date.getTime() + date.offset);
    if (typeof format !== "string") {
        return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + dateOffsetToString(date.offset);
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d": return dateToHalfUTCString(d, "first");
            case "T":
            case "t": return dateToHalfUTCString(d, "second");
            case "O":
            case "o": return dateToISOStringWithOffset(d, date.offset);
            default: throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return dateToStringWithCustomFormat(d, format, true);
    }
}
function dateToStringWithKind(date, format) {
    const utc = date.kind === 1 /* UTC */;
    if (typeof format !== "string") {
        return utc ? date.toUTCString() : date.toLocaleString();
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return utc ? dateToHalfUTCString(date, "first") : date.toLocaleDateString();
            case "T":
            case "t":
                return utc ? dateToHalfUTCString(date, "second") : date.toLocaleTimeString();
            case "O":
            case "o":
                return dateToISOString(date, utc);
            default:
                throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return dateToStringWithCustomFormat(date, format, utc);
    }
}
function toString(date, format) {
    return date.offset != null
        ? dateToStringWithOffset(date, format)
        : dateToStringWithKind(date, format);
}
function DateTime(value, kind) {
    const d = new Date(value);
    d.kind = (kind == null ? 0 /* Unspecified */ : kind) | 0;
    return d;
}
function fromTicks(ticks, kind) {
    ticks = Object(_Long__WEBPACK_IMPORTED_MODULE_0__["fromValue"])(ticks);
    kind = kind != null ? kind : 0 /* Unspecified */;
    let date = DateTime(Object(_Long__WEBPACK_IMPORTED_MODULE_0__["ticksToUnixEpochMilliseconds"])(ticks), kind);
    // Ticks are local to offset (in this case, either UTC or Local/Unknown).
    // If kind is anything but UTC, that means that the tick number was not
    // in utc, thus getTime() cannot return UTC, and needs to be shifted.
    if (kind !== 1 /* UTC */) {
        date = DateTime(date.getTime() - Object(_Util__WEBPACK_IMPORTED_MODULE_1__["dateOffset"])(date), kind);
    }
    return date;
}
function fromDateTimeOffset(date, kind) {
    switch (kind) {
        case 1 /* UTC */: return DateTime(date.getTime(), 1 /* UTC */);
        case 2 /* Local */: return DateTime(date.getTime(), 2 /* Local */);
        default:
            const d = DateTime(date.getTime() + date.offset, kind);
            return DateTime(d.getTime() - Object(_Util__WEBPACK_IMPORTED_MODULE_1__["dateOffset"])(d), kind);
    }
}
function getTicks(date) {
    return Object(_Long__WEBPACK_IMPORTED_MODULE_0__["unixEpochMillisecondsToTicks"])(date.getTime(), Object(_Util__WEBPACK_IMPORTED_MODULE_1__["dateOffset"])(date));
}
function minValue() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return DateTime(-62135596800000, 0 /* Unspecified */);
}
function maxValue() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return DateTime(253402300799999, 0 /* Unspecified */);
}
function parseRaw(str) {
    let date = new Date(str);
    if (isNaN(date.getTime())) {
        // Try to check strings JS Date cannot parse (see #1045, #1422)
        // tslint:disable-next-line:max-line-length
        const m = /^\s*(\d+[^\w\s:]\d+[^\w\s:]\d+)?\s*(\d+:\d+(?::\d+(?:\.\d+)?)?)?\s*([AaPp][Mm])?\s*([+-]\d+(?::\d+)?)?\s*$/.exec(str);
        if (m != null) {
            let baseDate = null;
            let timeInSeconds = 0;
            if (m[2] != null) {
                const timeParts = m[2].split(":");
                timeInSeconds =
                    parseInt(timeParts[0], 10) * 3600 +
                        parseInt(timeParts[1] || "0", 10) * 60 +
                        parseFloat(timeParts[2] || "0");
                if (m[3] != null && m[3].toUpperCase() === "PM") {
                    timeInSeconds += 720;
                }
            }
            if (m[4] != null) { // There's an offset, parse as UTC
                if (m[1] != null) {
                    baseDate = new Date(m[1] + " UTC");
                }
                else {
                    const d = new Date();
                    baseDate = new Date(d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate());
                }
                const offsetParts = m[4].substr(1).split(":");
                let offsetInMinutes = parseInt(offsetParts[0], 10) * 60 + parseInt(offsetParts[1] || "0", 10);
                if (m[4][0] === "+") {
                    offsetInMinutes *= -1;
                }
                timeInSeconds += offsetInMinutes * 60;
            }
            else {
                if (m[1] != null) {
                    baseDate = new Date(m[1]);
                }
                else {
                    const d = new Date();
                    baseDate = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate());
                }
            }
            date = new Date(baseDate.getTime() + timeInSeconds * 1000);
            // correct for daylight savings time
            date = new Date(date.getTime() + (date.getTimezoneOffset() - baseDate.getTimezoneOffset()) * 60000);
        }
        else {
            throw new Error("The string is not a valid Date.");
        }
    }
    return date;
}
function parse(str, detectUTC = false) {
    const date = parseRaw(str);
    const offset = offsetRegex.exec(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    const kind = offset != null
        ? (detectUTC && offset[0] === "Z" ? 1 /* UTC */ : 2 /* Local */)
        : 0 /* Unspecified */;
    return DateTime(date.getTime(), kind);
}
function tryParse(v) {
    try {
        // if value is null or whitespace, parsing fails
        if (v == null || v.trim() === "") {
            return [false, minValue()];
        }
        return [true, parse(v)];
    }
    catch (_err) {
        return [false, minValue()];
    }
}
function create(year, month, day, h = 0, m = 0, s = 0, ms = 0, kind) {
    const dateValue = kind === 1 /* UTC */
        ? Date.UTC(year, month - 1, day, h, m, s, ms)
        : new Date(year, month - 1, day, h, m, s, ms).getTime();
    if (isNaN(dateValue)) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    const date = DateTime(dateValue, kind);
    if (year <= 99) {
        date.setFullYear(year, month - 1, day);
    }
    return date;
}
function now() {
    return DateTime(Date.now(), 2 /* Local */);
}
function utcNow() {
    return DateTime(Date.now(), 1 /* UTC */);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
    return month === 2
        ? (isLeapYear(year) ? 29 : 28)
        : (month >= 8 ? (month % 2 === 0 ? 31 : 30) : (month % 2 === 0 ? 30 : 31));
}
function toUniversalTime(date) {
    return date.kind === 1 /* UTC */ ? date : DateTime(date.getTime(), 1 /* UTC */);
}
function toLocalTime(date) {
    return date.kind === 2 /* Local */ ? date : DateTime(date.getTime(), 2 /* Local */);
}
function specifyKind(d, kind) {
    return create(year(d), month(d), day(d), hour(d), minute(d), second(d), millisecond(d), kind);
}
function timeOfDay(d) {
    return hour(d) * 3600000
        + minute(d) * 60000
        + second(d) * 1000
        + millisecond(d);
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
function day(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDate() : d.getDate();
}
function hour(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCHours() : d.getHours();
}
function millisecond(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function minute(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMinutes() : d.getMinutes();
}
function month(d) {
    return (d.kind === 1 /* UTC */ ? d.getUTCMonth() : d.getMonth()) + 1;
}
function second(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCSeconds() : d.getSeconds();
}
function year(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCFullYear() : d.getFullYear();
}
function dayOfWeek(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDay() : d.getDay();
}
function dayOfYear(d) {
    const _year = year(d);
    const _month = month(d);
    let _day = day(d);
    for (let i = 1; i < _month; i++) {
        _day += daysInMonth(_year, i);
    }
    return _day;
}
function add(d, ts) {
    const newDate = DateTime(d.getTime() + ts, d.kind);
    if (d.kind === 2 /* Local */) {
        const oldTzOffset = d.getTimezoneOffset();
        const newTzOffset = newDate.getTimezoneOffset();
        return oldTzOffset !== newTzOffset
            ? DateTime(newDate.getTime() + (newTzOffset - oldTzOffset) * 60000, d.kind)
            : newDate;
    }
    else {
        return newDate;
    }
}
function addDays(d, v) {
    return add(d, v * 86400000);
}
function addHours(d, v) {
    return add(d, v * 3600000);
}
function addMinutes(d, v) {
    return add(d, v * 60000);
}
function addSeconds(d, v) {
    return add(d, v * 1000);
}
function addMilliseconds(d, v) {
    return add(d, v);
}
function addYears(d, v) {
    const newMonth = month(d);
    const newYear = year(d) + v;
    const _daysInMonth = daysInMonth(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function addMonths(d, v) {
    let newMonth = month(d) + v;
    let newMonth_ = 0;
    let yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    }
    else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    const newYear = year(d) + yearOffset;
    const _daysInMonth = daysInMonth(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function subtract(d, that) {
    return typeof that === "number" ? add(d, -that) : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() === d2.getTime();
}
const compare = _Util__WEBPACK_IMPORTED_MODULE_1__["compareDates"];
const compareTo = _Util__WEBPACK_IMPORTED_MODULE_1__["compareDates"];
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}
function isDaylightSavingTime(x) {
    const jan = new Date(x.getFullYear(), 0, 1);
    const jul = new Date(x.getFullYear(), 6, 1);
    return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}
//# sourceMappingURL=Date.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Decimal.js":
/*!************************************************!*\
  !*** ./.fable/fable-library.2.4.11/Decimal.js ***!
  \************************************************/
/*! exports provided: default, get_Zero, get_One, get_MinusOne, get_MaxValue, get_MinValue, compare, equals, abs, round, truncate, ceiling, floor, pow, sqrt, op_Addition, op_Subtraction, op_Multiply, op_Division, op_Modulus, op_UnaryNegation, add, subtract, multiply, divide, remainder, negate, toString, tryParse, parse, toNumber, fromIntArray, fromInts, fromParts, getBits, makeRangeStepFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_Zero", function() { return get_Zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_One", function() { return get_One; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_MinusOne", function() { return get_MinusOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_MaxValue", function() { return get_MaxValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_MinValue", function() { return get_MinValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceiling", function() { return ceiling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Addition", function() { return op_Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Subtraction", function() { return op_Subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Multiply", function() { return op_Multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Division", function() { return op_Division; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Modulus", function() { return op_Modulus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation", function() { return op_UnaryNegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remainder", function() { return remainder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParse", function() { return tryParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromIntArray", function() { return fromIntArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInts", function() { return fromInts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromParts", function() { return fromParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBits", function() { return getBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRangeStepFunction", function() { return makeRangeStepFunction; });
/* harmony import */ var _lib_big__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/big */ "./.fable/fable-library.2.4.11/lib/big.js");

/* harmony default export */ __webpack_exports__["default"] = (_lib_big__WEBPACK_IMPORTED_MODULE_0__["default"]);
const get_Zero = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](0);
const get_One = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](1);
const get_MinusOne = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](-1);
const get_MaxValue = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"]("79228162514264337593543950335");
const get_MinValue = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"]("-79228162514264337593543950335");
function compare(x, y) {
    return x.cmp(y);
}
function equals(x, y) {
    return !x.cmp(y);
}
function abs(x) {
    return x.abs();
}
function round(x, digits = 0) {
    return x.round(digits, 2 /* ROUND_HALF_EVEN */);
}
function truncate(x) {
    return x.round(0, 0 /* ROUND_DOWN */);
}
function ceiling(x) {
    return x.round(0, x.cmp(0) >= 0 ? 3 /* ROUND_UP */ : 0 /* ROUND_DOWN */);
}
function floor(x) {
    return x.round(0, x.cmp(0) >= 0 ? 0 /* ROUND_DOWN */ : 3 /* ROUND_UP */);
}
function pow(x, n) {
    return x.pow(n);
}
function sqrt(x) {
    return x.sqrt();
}
function op_Addition(x, y) {
    return x.add(y);
}
function op_Subtraction(x, y) {
    return x.sub(y);
}
function op_Multiply(x, y) {
    return x.mul(y);
}
function op_Division(x, y) {
    return x.div(y);
}
function op_Modulus(x, y) {
    return x.mod(y);
}
function op_UnaryNegation(x) {
    const x2 = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](x);
    x2.s = -x2.s || 0;
    return x2;
}
const add = op_Addition;
const subtract = op_Subtraction;
const multiply = op_Multiply;
const divide = op_Division;
const remainder = op_Modulus;
const negate = op_UnaryNegation;
function toString(x) {
    return x.toString();
}
function tryParse(str) {
    try {
        return [true, new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](str.trim())];
    }
    catch (_a) {
        return [false, get_Zero];
    }
}
function parse(str) {
    const [ok, value] = tryParse(str);
    if (ok) {
        return value;
    }
    else {
        throw new Error("Input string was not in a correct format.");
    }
}
function toNumber(x) {
    return +x;
}
function decimalToHex(dec, bitSize) {
    const hex = new Uint8Array(bitSize / 4 | 0);
    let hexCount = 1;
    for (let d = 0; d < dec.length; d++) {
        let value = dec[d];
        for (let i = 0; i < hexCount; i++) {
            const digit = hex[i] * 10 + value | 0;
            hex[i] = digit & 0xF;
            value = digit >> 4;
        }
        if (value !== 0) {
            hex[hexCount++] = value;
        }
    }
    return hex.slice(0, hexCount); // digits in reverse order
}
function hexToDecimal(hex, bitSize) {
    const dec = new Uint8Array(bitSize * 301 / 1000 + 1 | 0);
    let decCount = 1;
    for (let d = hex.length - 1; d >= 0; d--) {
        let carry = hex[d];
        for (let i = 0; i < decCount; i++) {
            const val = dec[i] * 16 + carry | 0;
            dec[i] = (val % 10) | 0;
            carry = (val / 10) | 0;
        }
        while (carry > 0) {
            dec[decCount++] = (carry % 10) | 0;
            carry = (carry / 10) | 0;
        }
    }
    return dec.slice(0, decCount); // digits in reverse order
}
function setInt32Bits(hexDigits, bits, offset) {
    for (let i = 0; i < 8; i++) {
        hexDigits[offset + i] = (bits >> (i * 4)) & 0xF;
    }
}
function getInt32Bits(hexDigits, offset) {
    let bits = 0;
    for (let i = 0; i < 8; i++) {
        bits = bits | (hexDigits[offset + i] << (i * 4));
    }
    return bits;
}
function fromIntArray(bits) {
    return fromInts(bits[0], bits[1], bits[2], bits[3]);
}
function fromInts(low, mid, high, signExp) {
    const isNegative = signExp < 0;
    const scale = (signExp >> 16) & 0x7F;
    return fromParts(low, mid, high, isNegative, scale);
}
function fromParts(low, mid, high, isNegative, scale) {
    const bitSize = 96;
    const hexDigits = new Uint8Array(bitSize / 4);
    setInt32Bits(hexDigits, low, 0);
    setInt32Bits(hexDigits, mid, 8);
    setInt32Bits(hexDigits, high, 16);
    const decDigits = hexToDecimal(hexDigits, bitSize);
    scale = scale & 0x7F;
    const big = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](0);
    big.c = Array.from(decDigits.reverse());
    big.e = decDigits.length - scale - 1;
    big.s = isNegative ? -1 : 1;
    const d = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](big);
    return d;
}
function getBits(d) {
    const bitSize = 96;
    const decDigits = Uint8Array.from(d.c);
    const hexDigits = decimalToHex(decDigits, bitSize);
    const low = getInt32Bits(hexDigits, 0);
    const mid = getInt32Bits(hexDigits, 8);
    const high = getInt32Bits(hexDigits, 16);
    const decStr = d.toString();
    const dotPos = decStr.indexOf(".");
    const scale = dotPos < 0 ? 0 : decStr.length - dotPos - 1;
    const signExp = ((scale & 0x7F) << 16) | (d.s < 0 ? 0x80000000 : 0);
    return [low, mid, high, signExp];
}
function makeRangeStepFunction(step, last) {
    const stepComparedWithZero = step.cmp(get_Zero);
    if (stepComparedWithZero === 0) {
        throw new Error("The step of a range cannot be zero");
    }
    const stepGreaterThanZero = stepComparedWithZero > 0;
    return (x) => {
        const comparedWithLast = x.cmp(last);
        if ((stepGreaterThanZero && comparedWithLast <= 0)
            || (!stepGreaterThanZero && comparedWithLast >= 0)) {
            return [x, op_Addition(x, step)];
        }
        else {
            return null;
        }
    };
}
//# sourceMappingURL=Decimal.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Int32.js":
/*!**********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Int32.js ***!
  \**********************************************/
/*! exports provided: NumberStyles, isValid, parse, tryParse, op_UnaryNegation_Int8, op_UnaryNegation_Int16, op_UnaryNegation_Int32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberStyles", function() { return NumberStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParse", function() { return tryParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation_Int8", function() { return op_UnaryNegation_Int8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation_Int16", function() { return op_UnaryNegation_Int16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation_Int32", function() { return op_UnaryNegation_Int32; });
var NumberStyles;
(function (NumberStyles) {
    // None = 0x00000000,
    // AllowLeadingWhite = 0x00000001,
    // AllowTrailingWhite = 0x00000002,
    // AllowLeadingSign = 0x00000004,
    // AllowTrailingSign = 0x00000008,
    // AllowParentheses = 0x00000010,
    // AllowDecimalPoint = 0x00000020,
    // AllowThousands = 0x00000040,
    // AllowExponent = 0x00000080,
    // AllowCurrencySymbol = 0x00000100,
    NumberStyles[NumberStyles["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
    // Integer = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign,
    // HexNumber = AllowLeadingWhite | AllowTrailingWhite | AllowHexSpecifier,
    // Number = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
    //          AllowTrailingSign | AllowDecimalPoint | AllowThousands,
    // Float = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
    //         AllowDecimalPoint | AllowExponent,
    // Currency = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
    //            AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol,
    // Any = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
    //       AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol | AllowExponent,
})(NumberStyles || (NumberStyles = {}));
function validResponse(regexMatch, radix) {
    const [_all, sign, prefix, digits] = regexMatch;
    return {
        sign: sign || "",
        prefix: prefix || "",
        digits,
        radix,
    };
}
function getRange(unsigned, bitsize) {
    switch (bitsize) {
        case 8: return unsigned ? [0, 255] : [-128, 127];
        case 16: return unsigned ? [0, 65535] : [-32768, 32767];
        case 32: return unsigned ? [0, 4294967295] : [-2147483648, 2147483647];
        default: throw new Error("Invalid bit size.");
    }
}
function getInvalidDigits(radix) {
    switch (radix) {
        case 2: return /[^0-1]/;
        case 8: return /[^0-7]/;
        case 10: return /[^0-9]/;
        case 16: return /[^0-9a-fA-F]/;
        default:
            throw new Error("Invalid Base.");
    }
}
function getRadix(prefix, style) {
    if (style & NumberStyles.AllowHexSpecifier) {
        return 16;
    }
    else {
        switch (prefix) {
            case "0b":
            case "0B": return 2;
            case "0o":
            case "0O": return 8;
            case "0x":
            case "0X": return 16;
            default: return 10;
        }
    }
}
function isValid(str, style, radix) {
    const integerRegex = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/;
    const res = integerRegex.exec(str.replace(/_/g, ""));
    if (res != null) {
        const [_all, sign, prefix, digits] = res;
        radix = radix || getRadix(prefix, style);
        const invalidDigits = getInvalidDigits(radix);
        if (!invalidDigits.test(digits)) {
            return validResponse(res, radix);
        }
    }
    return null;
}
function parse(str, style, unsigned, bitsize, radix) {
    const res = isValid(str, style, radix);
    if (res != null) {
        let v = Number.parseInt(res.sign + res.digits, res.radix);
        if (!Number.isNaN(v)) {
            const [umin, umax] = getRange(true, bitsize);
            if (!unsigned && res.radix !== 10 && v >= umin && v <= umax) {
                v = v << (32 - bitsize) >> (32 - bitsize);
            }
            const [min, max] = getRange(unsigned, bitsize);
            if (v >= min && v <= max) {
                return v;
            }
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize) {
    try {
        const v = parse(str, style, unsigned, bitsize);
        return [true, v];
    }
    catch (_a) {
        // supress error
    }
    return [false, 0];
}
function op_UnaryNegation_Int8(x) {
    return x === -128 ? x : -x;
}
function op_UnaryNegation_Int16(x) {
    return x === -32768 ? x : -x;
}
function op_UnaryNegation_Int32(x) {
    return x === -2147483648 ? x : -x;
}
//# sourceMappingURL=Int32.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/List.js":
/*!*********************************************!*\
  !*** ./.fable/fable-library.2.4.11/List.js ***!
  \*********************************************/
/*! exports provided: head, tryHead, tail, last, tryLast, compareWith, foldIndexedAux, foldIndexed, fold, reverse, foldBack, toSeq, ofSeq, concat, foldIndexed2Aux, foldIndexed2, fold2, foldBack2, unfold, foldIndexed3Aux, foldIndexed3, fold3, scan, scanBack, length, append, collect, map, mapIndexed, indexed, map2, mapIndexed2, map3, mapIndexed3, mapFold, mapFoldBack, iterate, iterate2, iterateIndexed, iterateIndexed2, ofArray, empty, isEmpty, tryPickIndexedAux, tryPickIndexed, tryPick, pick, tryFindIndexed, tryFind, findIndexed, find, findBack, tryFindBack, tryFindIndex, tryFindIndexBack, findIndex, findIndexBack, item, tryItem, filter, partition, choose, contains, except, initialize, replicate, reduce, reduceBack, forAll, forAll2, exists, exists2, unzip, unzip3, zip, zip3, sort, sortBy, sortDescending, sortByDescending, sortWith, sum, sumBy, maxBy, max, minBy, min, average, averageBy, permute, chunkBySize, skip, skipWhile, takeSplitAux, take, takeWhile, truncate, splitAt, outOfRange, slice, distinctBy, distinct, exactlyOne, groupBy, countBy, where, pairwise, windowed, splitInto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryHead", function() { return tryHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryLast", function() { return tryLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareWith", function() { return compareWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexedAux", function() { return foldIndexedAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed", function() { return foldIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSeq", function() { return toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofSeq", function() { return ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed2Aux", function() { return foldIndexed2Aux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed2", function() { return foldIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold2", function() { return fold2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack2", function() { return foldBack2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return unfold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed3Aux", function() { return foldIndexed3Aux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed3", function() { return foldIndexed3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold3", function() { return fold3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanBack", function() { return scanBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed", function() { return mapIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexed", function() { return indexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map2", function() { return map2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed2", function() { return mapIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map3", function() { return map3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed3", function() { return mapIndexed3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFold", function() { return mapFold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFoldBack", function() { return mapFoldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate2", function() { return iterate2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed", function() { return iterateIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed2", function() { return iterateIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofArray", function() { return ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPickIndexedAux", function() { return tryPickIndexedAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPickIndexed", function() { return tryPickIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPick", function() { return tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndexed", function() { return tryFindIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFind", function() { return tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexed", function() { return findIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBack", function() { return findBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindBack", function() { return tryFindBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndex", function() { return tryFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndexBack", function() { return tryFindIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexBack", function() { return findIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "item", function() { return item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryItem", function() { return tryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "except", function() { return except; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicate", function() { return replicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBack", function() { return reduceBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll2", function() { return forAll2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists2", function() { return exists2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return unzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip3", function() { return unzip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip3", function() { return zip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDescending", function() { return sortDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDescending", function() { return sortByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return sortWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumBy", function() { return sumBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return maxBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return minBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return average; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageBy", function() { return averageBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return permute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunkBySize", function() { return chunkBySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeSplitAux", function() { return takeSplitAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitAt", function() { return splitAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outOfRange", function() { return outOfRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctBy", function() { return distinctBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactlyOne", function() { return exactlyOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowed", function() { return windowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitInto", function() { return splitInto; });
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.4.11/Option.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.4.11/Seq.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.4.11/Util.js");
/* harmony import */ var _Array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Array.js */ "./.fable/fable-library.2.4.11/Array.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Set.js */ "./.fable/fable-library.2.4.11/Set.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Map.js */ "./.fable/fable-library.2.4.11/Map.js");








function head(_arg1) {
  if (_arg1.tail != null) {
    return _arg1.head;
  } else {
    throw new Error("List was empty");
  }
}
function tryHead(_arg1$$1) {
  if (_arg1$$1.tail != null) {
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(_arg1$$1.head);
  } else {
    return null;
  }
}
function tail(_arg1$$2) {
  if (_arg1$$2.tail != null) {
    return _arg1$$2.tail;
  } else {
    throw new Error("List was empty");
  }
}
function last($_arg1$$3$$5) {
  last: while (true) {
    const _arg1$$3 = $_arg1$$3$$5;

    if (_arg1$$3.tail != null) {
      if (_arg1$$3.tail.tail == null) {
        return _arg1$$3.head;
      } else {
        $_arg1$$3$$5 = _arg1$$3.tail;
        continue last;
      }
    } else {
      throw new Error("List was empty");
    }

    break;
  }
}
function tryLast($_arg1$$4$$6) {
  tryLast: while (true) {
    const _arg1$$4 = $_arg1$$4$$6;

    if (_arg1$$4.tail != null) {
      if (_arg1$$4.tail.tail == null) {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(_arg1$$4.head);
      } else {
        $_arg1$$4$$6 = _arg1$$4.tail;
        continue tryLast;
      }
    } else {
      return null;
    }

    break;
  }
}
function compareWith(comparer, xs$$3, ys) {
  if (xs$$3 === ys) {
    return 0;
  } else {
    const loop = function loop($xs$$4$$10, $ys$$1$$11) {
      loop: while (true) {
        const xs$$4 = $xs$$4$$10,
              ys$$1 = $ys$$1$$11;

        if (xs$$4.tail != null) {
          if (ys$$1.tail != null) {
            const matchValue$$1 = comparer(xs$$4.head, ys$$1.head) | 0;

            if (matchValue$$1 === 0) {
              $xs$$4$$10 = xs$$4.tail;
              $ys$$1$$11 = ys$$1.tail;
              continue loop;
            } else {
              return matchValue$$1 | 0;
            }
          } else {
            return 1;
          }
        } else if (ys$$1.tail == null) {
          return 0;
        } else {
          return -1 | 0;
        }

        break;
      }
    };

    return loop(xs$$3, ys) | 0;
  }
}
function foldIndexedAux($f$$12, $i$$13, $acc$$14, $_arg1$$5$$15) {
  foldIndexedAux: while (true) {
    const f = $f$$12,
          i = $i$$13,
          acc = $acc$$14,
          _arg1$$5 = $_arg1$$5$$15;

    if (_arg1$$5.tail != null) {
      $f$$12 = f;
      $i$$13 = i + 1;
      $acc$$14 = f(i, acc, _arg1$$5.head);
      $_arg1$$5$$15 = _arg1$$5.tail;
      continue foldIndexedAux;
    } else {
      return acc;
    }

    break;
  }
}
function foldIndexed(f$$1, state, xs$$7) {
  return foldIndexedAux(f$$1, 0, state, xs$$7);
}
function fold($f$$2$$19, $state$$1$$20, $xs$$8$$21) {
  fold: while (true) {
    const f$$2 = $f$$2$$19,
          state$$1 = $state$$1$$20,
          xs$$8 = $xs$$8$$21;

    if (xs$$8.tail != null) {
      $f$$2$$19 = f$$2;
      $state$$1$$20 = f$$2(state$$1, xs$$8.head);
      $xs$$8$$21 = xs$$8.tail;
      continue fold;
    } else {
      return state$$1;
    }

    break;
  }
}
function reverse(xs$$9) {
  return fold(function (acc$$1, x$$6) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$6, acc$$1);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$9);
}
function foldBack(f$$3, xs$$10, state$$2) {
  return fold(function (acc$$2, x$$7) {
    return f$$3(x$$7, acc$$2);
  }, state$$2, reverse(xs$$10));
}
function toSeq(xs$$11) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x$$8) {
    return x$$8;
  }, xs$$11);
}
function ofSeq(xs$$12) {
  const xs$$13 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["fold"])(function (acc$$3, x$$9) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$9, acc$$3);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$12);
  return reverse(xs$$13);
}
function concat(lists) {
  const xs$$15 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["fold"])(function (state$$3, xs$$14) {
    return fold(function f$$4(acc$$4, x$$10) {
      return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$10, acc$$4);
    }, state$$3, xs$$14);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), lists);
  return reverse(xs$$15);
}
function foldIndexed2Aux($f$$5$$31, $i$$1$$32, $acc$$5$$33, $bs$$34, $cs$$35) {
  foldIndexed2Aux: while (true) {
    const f$$5 = $f$$5$$31,
          i$$1 = $i$$1$$32,
          acc$$5 = $acc$$5$$33,
          bs = $bs$$34,
          cs = $cs$$35;
    var $target$$36, x$$11, xs$$16, y$$1, ys$$3;

    if (bs.tail != null) {
      if (cs.tail != null) {
        $target$$36 = 1;
        x$$11 = bs.head;
        xs$$16 = bs.tail;
        y$$1 = cs.head;
        ys$$3 = cs.tail;
      } else {
        $target$$36 = 2;
      }
    } else if (cs.tail == null) {
      $target$$36 = 0;
    } else {
      $target$$36 = 2;
    }

    switch ($target$$36) {
      case 0:
        {
          return acc$$5;
        }

      case 1:
        {
          $f$$5$$31 = f$$5;
          $i$$1$$32 = i$$1 + 1;
          $acc$$5$$33 = f$$5(i$$1, acc$$5, x$$11, y$$1);
          $bs$$34 = xs$$16;
          $cs$$35 = ys$$3;
          continue foldIndexed2Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function foldIndexed2(f$$6, state$$4, xs$$17, ys$$4) {
  return foldIndexed2Aux(f$$6, 0, state$$4, xs$$17, ys$$4);
}
function fold2(f$$7, state$$5, xs$$18, ys$$5) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["fold2"])(f$$7, state$$5, xs$$18, ys$$5);
}
function foldBack2(f$$8, xs$$19, ys$$6, state$$6) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["foldBack2"])(f$$8, xs$$19, ys$$6, state$$6);
}
function unfold(f$$9, state$$7) {
  const unfoldInner = function unfoldInner($acc$$6$$51, $state$$8$$52) {
    unfoldInner: while (true) {
      const acc$$6 = $acc$$6$$51,
            state$$8 = $state$$8$$52;
      const matchValue$$3 = f$$9(state$$8);

      if (matchValue$$3 != null) {
        const x$$12 = matchValue$$3[0];
        const state$$9 = matchValue$$3[1];
        $acc$$6$$51 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$12, acc$$6);
        $state$$8$$52 = state$$9;
        continue unfoldInner;
      } else {
        return reverse(acc$$6);
      }

      break;
    }
  };

  return unfoldInner(new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), state$$7);
}
function foldIndexed3Aux($f$$10$$53, $i$$2$$54, $acc$$7$$55, $bs$$1$$56, $cs$$1$$57, $ds$$58) {
  foldIndexed3Aux: while (true) {
    const f$$10 = $f$$10$$53,
          i$$2 = $i$$2$$54,
          acc$$7 = $acc$$7$$55,
          bs$$1 = $bs$$1$$56,
          cs$$1 = $cs$$1$$57,
          ds = $ds$$58;
    var $target$$59, x$$13, xs$$20, y$$2, ys$$7, z, zs;

    if (bs$$1.tail != null) {
      if (cs$$1.tail != null) {
        if (ds.tail != null) {
          $target$$59 = 1;
          x$$13 = bs$$1.head;
          xs$$20 = bs$$1.tail;
          y$$2 = cs$$1.head;
          ys$$7 = cs$$1.tail;
          z = ds.head;
          zs = ds.tail;
        } else {
          $target$$59 = 2;
        }
      } else {
        $target$$59 = 2;
      }
    } else if (cs$$1.tail == null) {
      if (ds.tail == null) {
        $target$$59 = 0;
      } else {
        $target$$59 = 2;
      }
    } else {
      $target$$59 = 2;
    }

    switch ($target$$59) {
      case 0:
        {
          return acc$$7;
        }

      case 1:
        {
          $f$$10$$53 = f$$10;
          $i$$2$$54 = i$$2 + 1;
          $acc$$7$$55 = f$$10(i$$2, acc$$7, x$$13, y$$2, z);
          $bs$$1$$56 = xs$$20;
          $cs$$1$$57 = ys$$7;
          $ds$$58 = zs;
          continue foldIndexed3Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function foldIndexed3(f$$11, seed, xs$$21, ys$$8, zs$$1) {
  return foldIndexed3Aux(f$$11, 0, seed, xs$$21, ys$$8, zs$$1);
}
function fold3(f$$12, state$$10, xs$$22, ys$$9, zs$$2) {
  return foldIndexed3(function (_arg1$$6, acc$$8, x$$14, y$$3, z$$1) {
    return f$$12(acc$$8, x$$14, y$$3, z$$1);
  }, state$$10, xs$$22, ys$$9, zs$$2);
}
function scan(f$$13, state$$11, xs$$23) {
  const xs$$24 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["scan"])(f$$13, state$$11, xs$$23);
  return ofSeq(xs$$24);
}
function scanBack(f$$14, xs$$25, state$$12) {
  const xs$$26 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["scanBack"])(f$$14, xs$$25, state$$12);
  return ofSeq(xs$$26);
}
function length(xs$$27) {
  return fold(function (acc$$9, _arg1$$7) {
    return acc$$9 + 1;
  }, 0, xs$$27);
}
function append(xs$$28, ys$$10) {
  return fold(function (acc$$10, x$$15) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$15, acc$$10);
  }, ys$$10, reverse(xs$$28));
}
function collect(f$$15, xs$$29) {
  const xs$$30 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["collect"])(f$$15, xs$$29);
  return ofSeq(xs$$30);
}
function map(f$$16, xs$$31) {
  const xs$$32 = fold(function (acc$$11, x$$16) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$16(x$$16), acc$$11);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$31);
  return reverse(xs$$32);
}
function mapIndexed(f$$17, xs$$33) {
  const xs$$34 = foldIndexed(function (i$$3, acc$$12, x$$17) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$17(i$$3, x$$17), acc$$12);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$33);
  return reverse(xs$$34);
}
function indexed(xs$$35) {
  return mapIndexed(function (i$$4, x$$18) {
    return [i$$4, x$$18];
  }, xs$$35);
}
function map2(f$$18, xs$$36, ys$$11) {
  const xs$$37 = fold2(function (acc$$13, x$$19, y$$4) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$18(x$$19, y$$4), acc$$13);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$36, ys$$11);
  return reverse(xs$$37);
}
function mapIndexed2(f$$19, xs$$38, ys$$12) {
  const xs$$39 = foldIndexed2(function (i$$5, acc$$14, x$$20, y$$5) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$19(i$$5, x$$20, y$$5), acc$$14);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$38, ys$$12);
  return reverse(xs$$39);
}
function map3(f$$20, xs$$40, ys$$13, zs$$3) {
  const xs$$41 = fold3(function (acc$$15, x$$21, y$$6, z$$2) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$20(x$$21, y$$6, z$$2), acc$$15);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$40, ys$$13, zs$$3);
  return reverse(xs$$41);
}
function mapIndexed3(f$$21, xs$$42, ys$$14, zs$$4) {
  const xs$$43 = foldIndexed3(function (i$$6, acc$$16, x$$22, y$$7, z$$3) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$21(i$$6, x$$22, y$$7, z$$3), acc$$16);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$42, ys$$14, zs$$4);
  return reverse(xs$$43);
}
function mapFold(f$$22, s, xs$$44) {
  const patternInput$$1 = fold(function foldFn(tupledArg, x$$23) {
    const patternInput = f$$22(tupledArg[1], x$$23);
    return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](patternInput[0], tupledArg[0]), patternInput[1]];
  }, [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), s], xs$$44);
  return [reverse(patternInput$$1[0]), patternInput$$1[1]];
}
function mapFoldBack(f$$23, xs$$45, s$$2) {
  return mapFold(function (s$$3, v) {
    return f$$23(v, s$$3);
  }, s$$2, reverse(xs$$45));
}
function iterate(f$$24, xs$$46) {
  fold(function (unitVar0, x$$24) {
    f$$24(x$$24);
  }, null, xs$$46);
}
function iterate2(f$$25, xs$$47, ys$$15) {
  fold2(function (unitVar0$$1, x$$25, y$$8) {
    f$$25(x$$25, y$$8);
  }, null, xs$$47, ys$$15);
}
function iterateIndexed(f$$26, xs$$48) {
  foldIndexed(function (i$$7, unitVar1, x$$26) {
    f$$26(i$$7, x$$26);
  }, null, xs$$48);
}
function iterateIndexed2(f$$27, xs$$49, ys$$16) {
  foldIndexed2(function (i$$8, unitVar1$$1, x$$27, y$$9) {
    f$$27(i$$8, x$$27, y$$9);
  }, null, xs$$49, ys$$16);
}
function ofArray(xs$$50) {
  let res$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();

  for (let i$$9 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["count"])(xs$$50) - 1; i$$9 >= 0; i$$9--) {
    res$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$50[i$$9], res$$1);
  }

  return res$$1;
}
function empty() {
  return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
}
function isEmpty(_arg1$$8) {
  if (_arg1$$8.tail == null) {
    return true;
  } else {
    return false;
  }
}
function tryPickIndexedAux($f$$28$$120, $i$$10$$121, $_arg1$$9$$122) {
  tryPickIndexedAux: while (true) {
    const f$$28 = $f$$28$$120,
          i$$10 = $i$$10$$121,
          _arg1$$9 = $_arg1$$9$$122;

    if (_arg1$$9.tail != null) {
      const result = f$$28(i$$10, _arg1$$9.head);

      if (result == null) {
        $f$$28$$120 = f$$28;
        $i$$10$$121 = i$$10 + 1;
        $_arg1$$9$$122 = _arg1$$9.tail;
        continue tryPickIndexedAux;
      } else {
        return result;
      }
    } else {
      return null;
    }

    break;
  }
}
function tryPickIndexed(f$$29, xs$$52) {
  return tryPickIndexedAux(f$$29, 0, xs$$52);
}
function tryPick(f$$30, xs$$53) {
  return tryPickIndexed(function (_arg1$$10, x$$29) {
    return f$$30(x$$29);
  }, xs$$53);
}
function pick(f$$31, xs$$54) {
  const matchValue$$5 = tryPick(f$$31, xs$$54);

  if (matchValue$$5 != null) {
    const x$$30 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$5);
    return x$$30;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function tryFindIndexed(f$$32, xs$$55) {
  return tryPickIndexed(function (i$$11, x$$31) {
    return f$$32(i$$11, x$$31) ? Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(x$$31) : null;
  }, xs$$55);
}
function tryFind(f$$33, xs$$56) {
  return tryPickIndexed(function (_arg1$$11, x$$32) {
    return f$$33(x$$32) ? Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(x$$32) : null;
  }, xs$$56);
}
function findIndexed(f$$34, xs$$57) {
  const matchValue$$6 = tryFindIndexed(f$$34, xs$$57);

  if (matchValue$$6 != null) {
    const x$$33 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$6);
    return x$$33;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function find(f$$35, xs$$58) {
  return findIndexed(function (_arg1$$12, x$$34) {
    return f$$35(x$$34);
  }, xs$$58);
}
function findBack(f$$36, xs$$59) {
  let xs$$61;
  xs$$61 = reverse(xs$$59);
  return find(f$$36, xs$$61);
}
function tryFindBack(f$$37, xs$$62) {
  let xs$$64;
  xs$$64 = reverse(xs$$62);
  return tryFind(f$$37, xs$$64);
}
function tryFindIndex(f$$38, xs$$65) {
  return tryPickIndexed(function (i$$12, x$$35) {
    return f$$38(x$$35) ? i$$12 : null;
  }, xs$$65);
}
function tryFindIndexBack(f$$39, xs$$66) {
  const array = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$66, Array);
  return Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["tryFindIndexBack"])(f$$39, array);
}
function findIndex(f$$40, xs$$67) {
  const matchValue$$7 = tryFindIndex(f$$40, xs$$67);

  if (matchValue$$7 != null) {
    const x$$36 = matchValue$$7 | 0;
    return x$$36 | 0;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function findIndexBack(f$$41, xs$$68) {
  const array$$1 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$68, Array);
  return Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["findIndexBack"])(f$$41, array$$1) | 0;
}
function item(n, xs$$69) {
  return findIndexed(function (i$$13, _arg1$$13) {
    return n === i$$13;
  }, xs$$69);
}
function tryItem(n$$1, xs$$70) {
  return tryFindIndexed(function (i$$14, _arg1$$14) {
    return n$$1 === i$$14;
  }, xs$$70);
}
function filter(f$$42, xs$$71) {
  const xs$$72 = fold(function (acc$$17, x$$37) {
    return f$$42(x$$37) ? new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$37, acc$$17) : acc$$17;
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$71);
  return reverse(xs$$72);
}
function partition(f$$43, xs$$73) {
  return fold(function (tupledArg$$1, x$$38) {
    return f$$43(x$$38) ? [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$38, tupledArg$$1[0]), tupledArg$$1[1]] : [tupledArg$$1[0], new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$38, tupledArg$$1[1])];
  }, [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()], reverse(xs$$73));
}
function choose(f$$44, xs$$74) {
  const xs$$75 = fold(function (acc$$18, x$$39) {
    const matchValue$$8 = f$$44(x$$39);

    if (matchValue$$8 == null) {
      return acc$$18;
    } else {
      const y$$10 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$8);
      return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](y$$10, acc$$18);
    }
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$74);
  return reverse(xs$$75);
}
function contains(value, list, eq) {
  const loop$$1 = function loop$$1($xs$$76$$162) {
    loop$$1: while (true) {
      const xs$$76 = $xs$$76$$162;

      if (xs$$76.tail != null) {
        if (eq.Equals(value, xs$$76.head)) {
          return true;
        } else {
          $xs$$76$$162 = xs$$76.tail;
          continue loop$$1;
        }
      } else {
        return false;
      }

      break;
    }
  };

  return loop$$1(list);
}
function except(itemsToExclude, array$$2, eq$$1) {
  if (isEmpty(array$$2)) {
    return array$$2;
  } else {
    const cached = Object(_Set_js__WEBPACK_IMPORTED_MODULE_5__["createMutable"])(itemsToExclude, eq$$1);
    return filter(function f$$45(arg00) {
      return Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["addToSet"])(arg00, cached);
    }, array$$2);
  }
}
function initialize(n$$2, f$$46) {
  let xs$$78 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();

  for (let i$$15 = 1; i$$15 <= n$$2; i$$15++) {
    xs$$78 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$46(n$$2 - i$$15), xs$$78);
  }

  return xs$$78;
}
function replicate(n$$3, x$$40) {
  return initialize(n$$3, function (_arg1$$15) {
    return x$$40;
  });
}
function reduce(f$$47, _arg1$$16) {
  if (_arg1$$16.tail != null) {
    return fold(f$$47, _arg1$$16.head, _arg1$$16.tail);
  } else {
    throw new Error("List was empty");
  }
}
function reduceBack(f$$48, _arg1$$17) {
  if (_arg1$$17.tail != null) {
    return foldBack(f$$48, _arg1$$17.tail, _arg1$$17.head);
  } else {
    throw new Error("List was empty");
  }
}
function forAll(f$$49, xs$$79) {
  return fold(function (acc$$19, x$$41) {
    return acc$$19 ? f$$49(x$$41) : false;
  }, true, xs$$79);
}
function forAll2(f$$50, xs$$80, ys$$17) {
  return fold2(function (acc$$20, x$$42, y$$11) {
    return acc$$20 ? f$$50(x$$42, y$$11) : false;
  }, true, xs$$80, ys$$17);
}
function exists($f$$51$$180, $_arg1$$18$$181) {
  exists: while (true) {
    const f$$51 = $f$$51$$180,
          _arg1$$18 = $_arg1$$18$$181;

    if (_arg1$$18.tail != null) {
      if (f$$51(_arg1$$18.head)) {
        return true;
      } else {
        $f$$51$$180 = f$$51;
        $_arg1$$18$$181 = _arg1$$18.tail;
        continue exists;
      }
    } else {
      return false;
    }

    break;
  }
}
function exists2($f$$52$$182, $bs$$2$$183, $cs$$2$$184) {
  exists2: while (true) {
    const f$$52 = $f$$52$$182,
          bs$$2 = $bs$$2$$183,
          cs$$2 = $cs$$2$$184;
    var $target$$185, x$$44, xs$$82, y$$12, ys$$18;

    if (bs$$2.tail != null) {
      if (cs$$2.tail != null) {
        $target$$185 = 1;
        x$$44 = bs$$2.head;
        xs$$82 = bs$$2.tail;
        y$$12 = cs$$2.head;
        ys$$18 = cs$$2.tail;
      } else {
        $target$$185 = 2;
      }
    } else if (cs$$2.tail == null) {
      $target$$185 = 0;
    } else {
      $target$$185 = 2;
    }

    switch ($target$$185) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          if (f$$52(x$$44, y$$12)) {
            return true;
          } else {
            $f$$52$$182 = f$$52;
            $bs$$2$$183 = xs$$82;
            $cs$$2$$184 = ys$$18;
            continue exists2;
          }
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function unzip(xs$$83) {
  return foldBack(function (tupledArg$$2, tupledArg$$3) {
    return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$2[0], tupledArg$$3[0]), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$2[1], tupledArg$$3[1])];
  }, xs$$83, [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()]);
}
function unzip3(xs$$84) {
  return foldBack(function (tupledArg$$4, tupledArg$$5) {
    return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$4[0], tupledArg$$5[0]), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$4[1], tupledArg$$5[1]), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$4[2], tupledArg$$5[2])];
  }, xs$$84, [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()]);
}
function zip(xs$$85, ys$$19) {
  return map2(function (x$$47, y$$15) {
    return [x$$47, y$$15];
  }, xs$$85, ys$$19);
}
function zip3(xs$$86, ys$$20, zs$$5) {
  return map3(function (x$$48, y$$16, z$$5) {
    return [x$$48, y$$16, z$$5];
  }, xs$$86, ys$$20, zs$$5);
}
function sort(xs$$87, comparer$$1) {
  let xs$$89;
  const xs$$88 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$87, Array);
  xs$$88.sort(function comparer$$2(x$$49, y$$17) {
    return comparer$$1.Compare(x$$49, y$$17);
  });
  xs$$89 = xs$$88;
  return ofArray(xs$$89);
}
function sortBy(projection, xs$$90, comparer$$3) {
  let xs$$92;
  const xs$$91 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$90, Array);
  xs$$91.sort(function comparer$$4(x$$50, y$$18) {
    return comparer$$3.Compare(projection(x$$50), projection(y$$18));
  });
  xs$$92 = xs$$91;
  return ofArray(xs$$92);
}
function sortDescending(xs$$93, comparer$$5) {
  let xs$$95;
  const xs$$94 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$93, Array);
  xs$$94.sort(function comparer$$6(x$$51, y$$19) {
    return comparer$$5.Compare(x$$51, y$$19) * -1;
  });
  xs$$95 = xs$$94;
  return ofArray(xs$$95);
}
function sortByDescending(projection$$1, xs$$96, comparer$$7) {
  let xs$$98;
  const xs$$97 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$96, Array);
  xs$$97.sort(function comparer$$8(x$$52, y$$20) {
    return comparer$$7.Compare(projection$$1(x$$52), projection$$1(y$$20)) * -1;
  });
  xs$$98 = xs$$97;
  return ofArray(xs$$98);
}
function sortWith(comparer$$9, xs$$99) {
  let xs$$101;
  const xs$$100 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$99, Array);
  xs$$100.sort(comparer$$9);
  xs$$101 = xs$$100;
  return ofArray(xs$$101);
}
function sum(xs$$102, adder) {
  return fold(function (acc$$21, x$$53) {
    return adder.Add(acc$$21, x$$53);
  }, adder.GetZero(), xs$$102);
}
function sumBy(f$$53, xs$$103, adder$$1) {
  return fold(function (acc$$22, x$$54) {
    return adder$$1.Add(acc$$22, f$$53(x$$54));
  }, adder$$1.GetZero(), xs$$103);
}
function maxBy(projection$$2, xs$$104, comparer$$11) {
  return reduce(function (x$$55, y$$21) {
    return comparer$$11.Compare(projection$$2(y$$21), projection$$2(x$$55)) > 0 ? y$$21 : x$$55;
  }, xs$$104);
}
function max(li, comparer$$12) {
  return reduce(function (x$$56, y$$22) {
    return comparer$$12.Compare(y$$22, x$$56) > 0 ? y$$22 : x$$56;
  }, li);
}
function minBy(projection$$3, xs$$105, comparer$$13) {
  return reduce(function (x$$57, y$$23) {
    return comparer$$13.Compare(projection$$3(y$$23), projection$$3(x$$57)) > 0 ? x$$57 : y$$23;
  }, xs$$105);
}
function min(xs$$106, comparer$$14) {
  return reduce(function (x$$58, y$$24) {
    return comparer$$14.Compare(y$$24, x$$58) > 0 ? x$$58 : y$$24;
  }, xs$$106);
}
function average(xs$$107, averager) {
  const total = fold(function (acc$$23, x$$59) {
    return averager.Add(acc$$23, x$$59);
  }, averager.GetZero(), xs$$107);
  return averager.DivideByInt(total, length(xs$$107));
}
function averageBy(f$$54, xs$$108, averager$$1) {
  const total$$1 = fold(function (acc$$24, x$$60) {
    return averager$$1.Add(acc$$24, f$$54(x$$60));
  }, averager$$1.GetZero(), xs$$108);
  return averager$$1.DivideByInt(total$$1, length(xs$$108));
}
function permute(f$$55, xs$$109) {
  let xs$$110;
  let array$$3;
  array$$3 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$109, Array);
  xs$$110 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["permute"])(f$$55, array$$3);
  return ofArray(xs$$110);
}
function chunkBySize(chunkSize, xs$$111) {
  let xs$$114;
  let xs$$112;
  let array$$4;
  array$$4 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$111, Array);
  xs$$112 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["chunkBySize"])(chunkSize, array$$4);
  xs$$114 = ofArray(xs$$112);
  return map(function f$$56(xs$$113) {
    return ofArray(xs$$113);
  }, xs$$114);
}
function skip(i$$16, xs$$115) {
  const skipInner = function skipInner($i$$17$$240, $xs$$116$$241) {
    skipInner: while (true) {
      const i$$17 = $i$$17$$240,
            xs$$116 = $xs$$116$$241;

      if (i$$17 === 0) {
        return xs$$116;
      } else if (xs$$116.tail != null) {
        $i$$17$$240 = i$$17 - 1;
        $xs$$116$$241 = xs$$116.tail;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }

      break;
    }
  };

  if (i$$16 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$242, i$$20, xs$$119;

    if (i$$16 === 0) {
      $target$$242 = 0;
    } else if (i$$16 === 1) {
      if (xs$$115.tail != null) {
        $target$$242 = 1;
      } else {
        $target$$242 = 2;
        i$$20 = i$$16;
        xs$$119 = xs$$115;
      }
    } else {
      $target$$242 = 2;
      i$$20 = i$$16;
      xs$$119 = xs$$115;
    }

    switch ($target$$242) {
      case 0:
        {
          return xs$$115;
        }

      case 1:
        {
          return xs$$115.tail;
        }

      case 2:
        {
          return skipInner(i$$20, xs$$119);
        }
    }
  }
}
function skipWhile($predicate$$243, $xs$$120$$244) {
  skipWhile: while (true) {
    const predicate = $predicate$$243,
          xs$$120 = $xs$$120$$244;
    var $target$$245, h$$4, t$$4;

    if (xs$$120.tail != null) {
      if (predicate(xs$$120.head)) {
        $target$$245 = 0;
        h$$4 = xs$$120.head;
        t$$4 = xs$$120.tail;
      } else {
        $target$$245 = 1;
      }
    } else {
      $target$$245 = 1;
    }

    switch ($target$$245) {
      case 0:
        {
          $predicate$$243 = predicate;
          $xs$$120$$244 = t$$4;
          continue skipWhile;
        }

      case 1:
        {
          return xs$$120;
        }
    }

    break;
  }
}
function takeSplitAux($error$$246, $i$$21$$247, $acc$$25$$248, $xs$$121$$249) {
  takeSplitAux: while (true) {
    const error = $error$$246,
          i$$21 = $i$$21$$247,
          acc$$25 = $acc$$25$$248,
          xs$$121 = $xs$$121$$249;

    if (i$$21 === 0) {
      return [reverse(acc$$25), xs$$121];
    } else if (xs$$121.tail != null) {
      $error$$246 = error;
      $i$$21$$247 = i$$21 - 1;
      $acc$$25$$248 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$121.head, acc$$25);
      $xs$$121$$249 = xs$$121.tail;
      continue takeSplitAux;
    } else {
      if (error) {
        throw new Error("The input sequence has an insufficient number of elements.");
      } else {
        return [reverse(acc$$25), xs$$121];
      }
    }

    break;
  }
}
function take(i$$22, xs$$123) {
  if (i$$22 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$252, i$$25, xs$$124;

    if (i$$22 === 0) {
      $target$$252 = 0;
    } else if (i$$22 === 1) {
      if (xs$$123.tail != null) {
        $target$$252 = 1;
      } else {
        $target$$252 = 2;
        i$$25 = i$$22;
        xs$$124 = xs$$123;
      }
    } else {
      $target$$252 = 2;
      i$$25 = i$$22;
      xs$$124 = xs$$123;
    }

    switch ($target$$252) {
      case 0:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
        }

      case 1:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$123.head, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]());
        }

      case 2:
        {
          const tuple = takeSplitAux(true, i$$25, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$124);
          return tuple[0];
        }
    }
  }
}
function takeWhile(predicate$$1, xs$$125) {
  if (xs$$125.tail != null) {
    if (xs$$125.tail.tail == null) {
      if (predicate$$1(xs$$125.head)) {
        return xs$$125;
      } else {
        return xs$$125.tail;
      }
    } else {
      if (!predicate$$1(xs$$125.head)) {
        return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
      } else {
        return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$125.head, takeWhile(predicate$$1, xs$$125.tail));
      }
    }
  } else {
    return xs$$125;
  }
}
function truncate(i$$26, xs$$127) {
  if (i$$26 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$257, i$$29, xs$$128;

    if (i$$26 === 0) {
      $target$$257 = 0;
    } else if (i$$26 === 1) {
      if (xs$$127.tail != null) {
        $target$$257 = 1;
      } else {
        $target$$257 = 2;
        i$$29 = i$$26;
        xs$$128 = xs$$127;
      }
    } else {
      $target$$257 = 2;
      i$$29 = i$$26;
      xs$$128 = xs$$127;
    }

    switch ($target$$257) {
      case 0:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
        }

      case 1:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$127.head, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]());
        }

      case 2:
        {
          const tuple$$1 = takeSplitAux(false, i$$29, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$128);
          return tuple$$1[0];
        }
    }
  }
}
function splitAt(i$$30, xs$$129) {
  if (i$$30 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$260, i$$33, xs$$131;

    if (i$$30 === 0) {
      $target$$260 = 0;
    } else if (i$$30 === 1) {
      if (xs$$129.tail != null) {
        $target$$260 = 1;
      } else {
        $target$$260 = 2;
        i$$33 = i$$30;
        xs$$131 = xs$$129;
      }
    } else {
      $target$$260 = 2;
      i$$33 = i$$30;
      xs$$131 = xs$$129;
    }

    switch ($target$$260) {
      case 0:
        {
          return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$129];
        }

      case 1:
        {
          return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$129.head, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()), xs$$129.tail];
        }

      case 2:
        {
          return takeSplitAux(true, i$$33, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$131);
        }
    }
  }
}
function outOfRange() {
  throw new Error("Index out of range");
}
function slice(lower, upper, xs$$132) {
  const lower$$1 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["defaultArg"])(lower, 0) | 0;
  const hasUpper = upper != null;

  if (lower$$1 < 0) {
    return outOfRange();
  } else if (hasUpper ? upper < lower$$1 : false) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  } else {
    let lastIndex = -1 | 0;
    let res$$2;
    const state$$13 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
    res$$2 = foldIndexed(function f$$57(i$$34, acc$$26, x$$67) {
      lastIndex = i$$34;

      if (lower$$1 <= i$$34 ? !hasUpper ? true : i$$34 <= upper : false) {
        return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$67, acc$$26);
      } else {
        return acc$$26;
      }
    }, state$$13, xs$$132);

    if (lower$$1 > lastIndex + 1 ? true : hasUpper ? upper > lastIndex : false) {
      outOfRange();
    }

    return reverse(res$$2);
  }
}
function distinctBy(projection$$4, xs$$134, eq$$2) {
  const hashSet = Object(_Set_js__WEBPACK_IMPORTED_MODULE_5__["createMutable"])([], eq$$2);
  return filter(function f$$58($arg$$1) {
    const arg00$$1 = projection$$4($arg$$1);
    return Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["addToSet"])(arg00$$1, hashSet);
  }, xs$$134);
}
function distinct(xs$$136, eq$$3) {
  return distinctBy(function (x$$68) {
    return x$$68;
  }, xs$$136, eq$$3);
}
function exactlyOne(xs$$137) {
  if (xs$$137.tail != null) {
    if (xs$$137.tail.tail != null) {
      throw new Error("Input list too long\\nParameter name: list");
    } else {
      return xs$$137.head;
    }
  } else {
    throw new Error("The input sequence was empty\\nParameter name: list");
  }
}
function groupBy(projection$$5, xs$$139, eq$$4) {
  const dict = Object(_Map_js__WEBPACK_IMPORTED_MODULE_6__["createMutable"])([], eq$$4);
  let keys = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  iterate(function f$$59(v$$2) {
    const key = projection$$5(v$$2);
    const matchValue$$16 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["tryGetValue"])(dict, key, null);

    if (matchValue$$16[0]) {
      dict.set(key, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](v$$2, matchValue$$16[1]));
    } else {
      Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["addToDict"])(dict, key, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](v$$2, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()));
      keys = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](key, keys);
    }
  }, xs$$139);
  let result$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  const xs$$141 = keys;
  iterate(function f$$60(key$$1) {
    result$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]([key$$1, reverse(Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(dict, key$$1))], result$$1);
  }, xs$$141);
  return result$$1;
}
function countBy(projection$$6, xs$$142, eq$$5) {
  const dict$$1 = Object(_Map_js__WEBPACK_IMPORTED_MODULE_6__["createMutable"])([], eq$$5);
  let keys$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  iterate(function f$$61(v$$3) {
    const key$$2 = projection$$6(v$$3);
    const matchValue$$17 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["tryGetValue"])(dict$$1, key$$2, 0);

    if (matchValue$$17[0]) {
      dict$$1.set(key$$2, matchValue$$17[1] + 1);
    } else {
      dict$$1.set(key$$2, 1);
      keys$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](key$$2, keys$$1);
    }
  }, xs$$142);
  let result$$2 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  const xs$$144 = keys$$1;
  iterate(function f$$62(key$$3) {
    result$$2 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]([key$$3, Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(dict$$1, key$$3)], result$$2);
  }, xs$$144);
  return result$$2;
}
function where(predicate$$2, xs$$145) {
  return filter(predicate$$2, xs$$145);
}
function pairwise(xs$$146) {
  const inner = function inner($xs$$147$$287, $acc$$27$$288, $x1$$1$$289) {
    inner: while (true) {
      const xs$$147 = $xs$$147$$287,
            acc$$27 = $acc$$27$$288,
            x1$$1 = $x1$$1$$289;

      if (xs$$147.tail != null) {
        let copyOfStruct = acc$$27;
        copyOfStruct.push([x1$$1, xs$$147.head]);
        $xs$$147$$287 = xs$$147.tail;
        $acc$$27$$288 = acc$$27;
        $x1$$1$$289 = xs$$147.head;
        continue inner;
      } else {
        return ofArray(acc$$27);
      }

      break;
    }
  };

  var $target$$290, x1$$2, x2$$2, xs$$149;

  if (xs$$146.tail != null) {
    if (xs$$146.tail.tail != null) {
      $target$$290 = 1;
      x1$$2 = xs$$146.head;
      x2$$2 = xs$$146.tail.head;
      xs$$149 = xs$$146.tail.tail;
    } else {
      $target$$290 = 0;
    }
  } else {
    $target$$290 = 0;
  }

  switch ($target$$290) {
    case 0:
      {
        return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
      }

    case 1:
      {
        const acc$$28 = [];
        acc$$28.push([x1$$2, x2$$2]);
        const clo1 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["partialApply"])(2, inner, [xs$$149]);
        const clo2 = clo1(acc$$28);
        return clo2(x2$$2);
      }
  }
}
function windowed(windowSize, source) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  let res$$3 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();

  for (let i$$35 = length(source); i$$35 >= windowSize; i$$35--) {
    res$$3 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](slice(i$$35 - windowSize, i$$35 - 1, source), res$$3);
  }

  return res$$3;
}
function splitInto(chunks, source$$1) {
  let xs$$152;
  let xs$$150;
  let array$$5;
  array$$5 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(source$$1, Array);
  xs$$150 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["splitInto"])(chunks, array$$5);
  xs$$152 = ofArray(xs$$150);
  return map(function f$$63(xs$$151) {
    return ofArray(xs$$151);
  }, xs$$152);
}

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Long.js":
/*!*********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Long.js ***!
  \*********************************************/
/*! exports provided: default, get_Zero, get_One, op_Addition, op_Subtraction, op_Multiply, op_Division, op_Modulus, op_UnaryNegation, op_LeftShift, op_RightShift, op_RightShiftUnsigned, op_BitwiseAnd, op_BitwiseOr, op_ExclusiveOr, op_LogicalNot, op_LessThan, op_LessThanOrEqual, op_GreaterThan, op_GreaterThanOrEqual, op_Equality, op_Inequality, equals, compare, fromInt, fromBits, fromBytes, fromNumber, fromString, fromValue, toInt, toBytes, toNumber, toString, getLowBits, getHighBits, getLowBitsUnsigned, getHighBitsUnsigned, abs, fromInteger, parse, tryParse, unixEpochMillisecondsToTicks, ticksToUnixEpochMilliseconds, makeRangeStepFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_Zero", function() { return get_Zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_One", function() { return get_One; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Addition", function() { return op_Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Subtraction", function() { return op_Subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Multiply", function() { return op_Multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Division", function() { return op_Division; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Modulus", function() { return op_Modulus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation", function() { return op_UnaryNegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_LeftShift", function() { return op_LeftShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_RightShift", function() { return op_RightShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_RightShiftUnsigned", function() { return op_RightShiftUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_BitwiseAnd", function() { return op_BitwiseAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_BitwiseOr", function() { return op_BitwiseOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_ExclusiveOr", function() { return op_ExclusiveOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_LogicalNot", function() { return op_LogicalNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_LessThan", function() { return op_LessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_LessThanOrEqual", function() { return op_LessThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_GreaterThan", function() { return op_GreaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_GreaterThanOrEqual", function() { return op_GreaterThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Equality", function() { return op_Equality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Inequality", function() { return op_Inequality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInt", function() { return fromInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBits", function() { return fromBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBytes", function() { return fromBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNumber", function() { return fromNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValue", function() { return fromValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBytes", function() { return toBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowBits", function() { return getLowBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighBits", function() { return getHighBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowBitsUnsigned", function() { return getLowBitsUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighBitsUnsigned", function() { return getHighBitsUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInteger", function() { return fromInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParse", function() { return tryParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unixEpochMillisecondsToTicks", function() { return unixEpochMillisecondsToTicks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticksToUnixEpochMilliseconds", function() { return ticksToUnixEpochMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRangeStepFunction", function() { return makeRangeStepFunction; });
/* harmony import */ var _Int32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Int32 */ "./.fable/fable-library.2.4.11/Int32.js");
/* harmony import */ var _lib_long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/long */ "./.fable/fable-library.2.4.11/lib/long.js");


/* harmony default export */ __webpack_exports__["default"] = (_lib_long__WEBPACK_IMPORTED_MODULE_1__["Long"]);
const get_Zero = _lib_long__WEBPACK_IMPORTED_MODULE_1__["ZERO"];
const get_One = _lib_long__WEBPACK_IMPORTED_MODULE_1__["ONE"];
const op_Addition = _lib_long__WEBPACK_IMPORTED_MODULE_1__["add"];
const op_Subtraction = _lib_long__WEBPACK_IMPORTED_MODULE_1__["subtract"];
const op_Multiply = _lib_long__WEBPACK_IMPORTED_MODULE_1__["multiply"];
const op_Division = _lib_long__WEBPACK_IMPORTED_MODULE_1__["divide"];
const op_Modulus = _lib_long__WEBPACK_IMPORTED_MODULE_1__["modulo"];
const op_UnaryNegation = _lib_long__WEBPACK_IMPORTED_MODULE_1__["negate"];
const op_LeftShift = _lib_long__WEBPACK_IMPORTED_MODULE_1__["shiftLeft"];
const op_RightShift = _lib_long__WEBPACK_IMPORTED_MODULE_1__["shiftRight"];
const op_RightShiftUnsigned = _lib_long__WEBPACK_IMPORTED_MODULE_1__["shiftRightUnsigned"];
const op_BitwiseAnd = _lib_long__WEBPACK_IMPORTED_MODULE_1__["and"];
const op_BitwiseOr = _lib_long__WEBPACK_IMPORTED_MODULE_1__["or"];
const op_ExclusiveOr = _lib_long__WEBPACK_IMPORTED_MODULE_1__["xor"];
const op_LogicalNot = _lib_long__WEBPACK_IMPORTED_MODULE_1__["not"];
const op_LessThan = _lib_long__WEBPACK_IMPORTED_MODULE_1__["lessThan"];
const op_LessThanOrEqual = _lib_long__WEBPACK_IMPORTED_MODULE_1__["lessThanOrEqual"];
const op_GreaterThan = _lib_long__WEBPACK_IMPORTED_MODULE_1__["greaterThan"];
const op_GreaterThanOrEqual = _lib_long__WEBPACK_IMPORTED_MODULE_1__["greaterThanOrEqual"];
const op_Equality = _lib_long__WEBPACK_IMPORTED_MODULE_1__["equals"];
const op_Inequality = _lib_long__WEBPACK_IMPORTED_MODULE_1__["notEquals"];
const equals = _lib_long__WEBPACK_IMPORTED_MODULE_1__["equals"];
const compare = _lib_long__WEBPACK_IMPORTED_MODULE_1__["compare"];
const fromInt = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromInt"];
const fromBits = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromBits"];
const fromBytes = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromBytes"];
const fromNumber = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromNumber"];
const fromString = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromString"];
const fromValue = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromValue"];
const toInt = _lib_long__WEBPACK_IMPORTED_MODULE_1__["toInt"];
const toBytes = _lib_long__WEBPACK_IMPORTED_MODULE_1__["toBytes"];
const toNumber = _lib_long__WEBPACK_IMPORTED_MODULE_1__["toNumber"];
const toString = _lib_long__WEBPACK_IMPORTED_MODULE_1__["toString"];
const getLowBits = _lib_long__WEBPACK_IMPORTED_MODULE_1__["getLowBits"];
const getHighBits = _lib_long__WEBPACK_IMPORTED_MODULE_1__["getHighBits"];
const getLowBitsUnsigned = _lib_long__WEBPACK_IMPORTED_MODULE_1__["getLowBitsUnsigned"];
const getHighBitsUnsigned = _lib_long__WEBPACK_IMPORTED_MODULE_1__["getHighBitsUnsigned"];
function getMaxValue(unsigned, radix, isNegative) {
    switch (radix) {
        case 2: return unsigned ?
            "1111111111111111111111111111111111111111111111111111111111111111" :
            (isNegative ? "1000000000000000000000000000000000000000000000000000000000000000"
                : "111111111111111111111111111111111111111111111111111111111111111");
        case 8: return unsigned ?
            "1777777777777777777777" :
            (isNegative ? "1000000000000000000000" : "777777777777777777777");
        case 10: return unsigned ?
            "18446744073709551615" :
            (isNegative ? "9223372036854775808" : "9223372036854775807");
        case 16: return unsigned ?
            "FFFFFFFFFFFFFFFF" :
            (isNegative ? "8000000000000000" : "7FFFFFFFFFFFFFFF");
        default: throw new Error("Invalid radix.");
    }
}
function abs(x) {
    if (!x.unsigned && _lib_long__WEBPACK_IMPORTED_MODULE_1__["isNegative"](x)) {
        return op_UnaryNegation(x);
    }
    else {
        return x;
    }
}
function fromInteger(value, unsigned, kind) {
    let x = value;
    let xh = 0;
    switch (kind) {
        case 0:
            x = value << 24 >> 24;
            xh = x;
            break;
        case 4:
            x = value << 24 >>> 24;
            break;
        case 1:
            x = value << 16 >> 16;
            xh = x;
            break;
        case 5:
            x = value << 16 >>> 16;
            break;
        case 2:
            x = value >> 0;
            xh = x;
            break;
        case 6:
            x = value >>> 0;
            break;
    }
    return _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromBits"](x, xh >> 31, unsigned);
}
function parse(str, style, unsigned, bitsize, radix) {
    const res = Object(_Int32__WEBPACK_IMPORTED_MODULE_0__["isValid"])(str, style, radix);
    if (res != null) {
        const lessOrEqual = (x, y) => {
            const len = Math.max(x.length, y.length);
            return x.padStart(len, "0") <= y.padStart(len, "0");
        };
        const isNegative = res.sign === "-";
        const maxValue = getMaxValue(unsigned || res.radix !== 10, res.radix, isNegative);
        if (lessOrEqual(res.digits.toUpperCase(), maxValue)) {
            str = isNegative ? res.sign + res.digits : res.digits;
            return _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromString"](str, unsigned, res.radix);
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize) {
    try {
        const v = parse(str, style, unsigned, bitsize);
        return [true, v];
    }
    catch (_a) {
        // supress error
    }
    return [false, _lib_long__WEBPACK_IMPORTED_MODULE_1__["ZERO"]];
}
function unixEpochMillisecondsToTicks(ms, offset) {
    return op_Multiply(op_Addition(op_Addition(_lib_long__WEBPACK_IMPORTED_MODULE_1__["fromNumber"](ms), 62135596800000), offset), 10000);
}
function ticksToUnixEpochMilliseconds(ticks) {
    return _lib_long__WEBPACK_IMPORTED_MODULE_1__["toNumber"](op_Subtraction(op_Division(ticks, 10000), 62135596800000));
}
function makeRangeStepFunction(step, last, unsigned) {
    const stepComparedWithZero = _lib_long__WEBPACK_IMPORTED_MODULE_1__["compare"](step, unsigned ? _lib_long__WEBPACK_IMPORTED_MODULE_1__["UZERO"] : _lib_long__WEBPACK_IMPORTED_MODULE_1__["ZERO"]);
    if (stepComparedWithZero === 0) {
        throw new Error("The step of a range cannot be zero");
    }
    const stepGreaterThanZero = stepComparedWithZero > 0;
    return (x) => {
        const comparedWithLast = _lib_long__WEBPACK_IMPORTED_MODULE_1__["compare"](x, last);
        if ((stepGreaterThanZero && comparedWithLast <= 0)
            || (!stepGreaterThanZero && comparedWithLast >= 0)) {
            return [x, op_Addition(x, step)];
        }
        else {
            return null;
        }
    };
}
//# sourceMappingURL=Long.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Map.js":
/*!********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Map.js ***!
  \********************************************/
/*! exports provided: MapTree$00602, MapTree$00602$reflection, MapTreeModule$$$sizeAux, MapTreeModule$$$size, MapTreeModule$$$empty, MapTreeModule$$$height, MapTreeModule$$$isEmpty, MapTreeModule$$$mk, MapTreeModule$$$rebalance, MapTreeModule$$$add, MapTreeModule$$$find, MapTreeModule$$$tryFind, MapTreeModule$$$partition1, MapTreeModule$$$partitionAux, MapTreeModule$$$partition, MapTreeModule$$$filter1, MapTreeModule$$$filterAux, MapTreeModule$$$filter, MapTreeModule$$$spliceOutSuccessor, MapTreeModule$$$remove, MapTreeModule$$$mem, MapTreeModule$$$iter, MapTreeModule$$$tryPick, MapTreeModule$$$exists, MapTreeModule$$$forall, MapTreeModule$$$map, MapTreeModule$$$mapi, MapTreeModule$$$foldBack, MapTreeModule$$$fold, MapTreeModule$$$foldFromTo, MapTreeModule$$$foldSection, MapTreeModule$$$loop, MapTreeModule$$$toList, MapTreeModule$$$ofList, MapTreeModule$$$mkFromEnumerator, MapTreeModule$$$ofArray, MapTreeModule$$$ofSeq, MapTreeModule$$$copyToArray, MapTreeModule$002EMapIterator$00602, MapTreeModule$002EMapIterator$00602$reflection, MapTreeModule$$$collapseLHS, MapTreeModule$$$mkIterator, MapTreeModule$$$notStarted, MapTreeModule$$$alreadyFinished, MapTreeModule$$$current, MapTreeModule$$$moveNext, MapTreeModule$002EmkIEnumerator$0027$00602, MapTreeModule$002EmkIEnumerator$0027$00602$reflection, MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C, MapTreeModule$$$mkIEnumerator, MapTreeModule$$$toSeq, FSharpMap, FSharpMap$reflection, FSharpMap$$$$002Ector$$58ADD115, FSharpMap$$get_Comparer, FSharpMap$$get_Tree, FSharpMap$$Add$$5BDDA1, FSharpMap$$get_IsEmpty, FSharpMap$$get_Item$$2B595, FSharpMap$$TryGetValue$$5BDDA1, FSharpMap$$TryPick$$72321DD7, FSharpMap$$Exists$$Z395DDC35, FSharpMap$$Filter$$Z395DDC35, FSharpMap$$ForAll$$Z395DDC35, FSharpMap$$Fold, FSharpMap$$FoldSection, FSharpMap$$Iterate$$1DCFB91D, FSharpMap$$MapRange$$6DC7247, FSharpMap$$Map$$Z6F6B671C, FSharpMap$$Partition$$Z395DDC35, FSharpMap$$get_Count, FSharpMap$$ContainsKey$$2B595, FSharpMap$$Remove$$2B595, FSharpMap$$TryFind$$2B595, FSharpMap$$ToList, isEmpty, add, find, tryFind, remove, containsKey, iterate, tryPick, pick, exists, filter, partition, forAll, mapRange, map, fold, foldBack, toSeq, findKey, tryFindKey, ofList, ofSeq, ofArray, toList, toArray, empty, createMutable, groupBy, countBy, count */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTree$00602", function() { return MapTree$00602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTree$00602$reflection", function() { return MapTree$00602$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$sizeAux", function() { return MapTreeModule$$$sizeAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$size", function() { return MapTreeModule$$$size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$empty", function() { return MapTreeModule$$$empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$height", function() { return MapTreeModule$$$height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$isEmpty", function() { return MapTreeModule$$$isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mk", function() { return MapTreeModule$$$mk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$rebalance", function() { return MapTreeModule$$$rebalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$add", function() { return MapTreeModule$$$add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$find", function() { return MapTreeModule$$$find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$tryFind", function() { return MapTreeModule$$$tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$partition1", function() { return MapTreeModule$$$partition1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$partitionAux", function() { return MapTreeModule$$$partitionAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$partition", function() { return MapTreeModule$$$partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$filter1", function() { return MapTreeModule$$$filter1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$filterAux", function() { return MapTreeModule$$$filterAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$filter", function() { return MapTreeModule$$$filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$spliceOutSuccessor", function() { return MapTreeModule$$$spliceOutSuccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$remove", function() { return MapTreeModule$$$remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mem", function() { return MapTreeModule$$$mem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$iter", function() { return MapTreeModule$$$iter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$tryPick", function() { return MapTreeModule$$$tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$exists", function() { return MapTreeModule$$$exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$forall", function() { return MapTreeModule$$$forall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$map", function() { return MapTreeModule$$$map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mapi", function() { return MapTreeModule$$$mapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$foldBack", function() { return MapTreeModule$$$foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$fold", function() { return MapTreeModule$$$fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$foldFromTo", function() { return MapTreeModule$$$foldFromTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$foldSection", function() { return MapTreeModule$$$foldSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$loop", function() { return MapTreeModule$$$loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$toList", function() { return MapTreeModule$$$toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$ofList", function() { return MapTreeModule$$$ofList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mkFromEnumerator", function() { return MapTreeModule$$$mkFromEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$ofArray", function() { return MapTreeModule$$$ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$ofSeq", function() { return MapTreeModule$$$ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$copyToArray", function() { return MapTreeModule$$$copyToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EMapIterator$00602", function() { return MapTreeModule$002EMapIterator$00602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EMapIterator$00602$reflection", function() { return MapTreeModule$002EMapIterator$00602$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$collapseLHS", function() { return MapTreeModule$$$collapseLHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mkIterator", function() { return MapTreeModule$$$mkIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$notStarted", function() { return MapTreeModule$$$notStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$alreadyFinished", function() { return MapTreeModule$$$alreadyFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$current", function() { return MapTreeModule$$$current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$moveNext", function() { return MapTreeModule$$$moveNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EmkIEnumerator$0027$00602", function() { return MapTreeModule$002EmkIEnumerator$0027$00602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EmkIEnumerator$0027$00602$reflection", function() { return MapTreeModule$002EmkIEnumerator$0027$00602$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C", function() { return MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mkIEnumerator", function() { return MapTreeModule$$$mkIEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$toSeq", function() { return MapTreeModule$$$toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap", function() { return FSharpMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$reflection", function() { return FSharpMap$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$$$002Ector$$58ADD115", function() { return FSharpMap$$$$002Ector$$58ADD115; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_Comparer", function() { return FSharpMap$$get_Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_Tree", function() { return FSharpMap$$get_Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Add$$5BDDA1", function() { return FSharpMap$$Add$$5BDDA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_IsEmpty", function() { return FSharpMap$$get_IsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_Item$$2B595", function() { return FSharpMap$$get_Item$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$TryGetValue$$5BDDA1", function() { return FSharpMap$$TryGetValue$$5BDDA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$TryPick$$72321DD7", function() { return FSharpMap$$TryPick$$72321DD7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Exists$$Z395DDC35", function() { return FSharpMap$$Exists$$Z395DDC35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Filter$$Z395DDC35", function() { return FSharpMap$$Filter$$Z395DDC35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$ForAll$$Z395DDC35", function() { return FSharpMap$$ForAll$$Z395DDC35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Fold", function() { return FSharpMap$$Fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$FoldSection", function() { return FSharpMap$$FoldSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Iterate$$1DCFB91D", function() { return FSharpMap$$Iterate$$1DCFB91D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$MapRange$$6DC7247", function() { return FSharpMap$$MapRange$$6DC7247; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Map$$Z6F6B671C", function() { return FSharpMap$$Map$$Z6F6B671C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Partition$$Z395DDC35", function() { return FSharpMap$$Partition$$Z395DDC35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_Count", function() { return FSharpMap$$get_Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$ContainsKey$$2B595", function() { return FSharpMap$$ContainsKey$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Remove$$2B595", function() { return FSharpMap$$Remove$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$TryFind$$2B595", function() { return FSharpMap$$TryFind$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$ToList", function() { return FSharpMap$$ToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFind", function() { return tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsKey", function() { return containsKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPick", function() { return tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapRange", function() { return mapRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSeq", function() { return toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return findKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindKey", function() { return tryFindKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofList", function() { return ofList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofSeq", function() { return ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofArray", function() { return ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMutable", function() { return createMutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reflection.js */ "./.fable/fable-library.2.4.11/Reflection.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.4.11/Option.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.4.11/Seq.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.4.11/Util.js");
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./String.js */ "./.fable/fable-library.2.4.11/String.js");
/* harmony import */ var _MutableMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MutableMap */ "./.fable/fable-library.2.4.11/MutableMap.js");







const MapTree$00602 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Map_MapTree(tag, name, ...fields) {
  _Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"].call(this, tag, name, ...fields);
}, _Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function MapTree$00602$reflection($gen$$3, $gen$$4) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union"])("Map.MapTree`2", [$gen$$3, $gen$$4], MapTree$00602, () => ["MapEmpty", ["MapOne", [$gen$$3, $gen$$4]], ["MapNode", [$gen$$3, $gen$$4, MapTree$00602$reflection($gen$$3, $gen$$4), MapTree$00602$reflection($gen$$3, $gen$$4), _Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32"]]]]);
}
function MapTreeModule$$$sizeAux($acc$$5, $m$$6) {
  MapTreeModule$$$sizeAux: while (true) {
    const acc = $acc$$5,
          m = $m$$6;

    switch (m.tag) {
      case 1:
        {
          return acc + 1 | 0;
        }

      case 2:
        {
          $acc$$5 = MapTreeModule$$$sizeAux(acc + 1, m.fields[2]);
          $m$$6 = m.fields[3];
          continue MapTreeModule$$$sizeAux;
        }

      default:
        {
          return acc | 0;
        }
    }

    break;
  }
}
function MapTreeModule$$$size(x) {
  return MapTreeModule$$$sizeAux(0, x);
}
function MapTreeModule$$$empty() {
  return new MapTree$00602(0, "MapEmpty");
}
function MapTreeModule$$$height(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return 1;
      }

    case 2:
      {
        return _arg1.fields[4] | 0;
      }

    default:
      {
        return 0;
      }
  }
}
function MapTreeModule$$$isEmpty(m$$1) {
  if (m$$1.tag === 0) {
    return true;
  } else {
    return false;
  }
}
function MapTreeModule$$$mk(l$$1, k, v, r$$1) {
  var $target$$14;

  if (l$$1.tag === 0) {
    if (r$$1.tag === 0) {
      $target$$14 = 0;
    } else {
      $target$$14 = 1;
    }
  } else {
    $target$$14 = 1;
  }

  switch ($target$$14) {
    case 0:
      {
        return new MapTree$00602(1, "MapOne", k, v);
      }

    case 1:
      {
        const hl = MapTreeModule$$$height(l$$1) | 0;
        const hr = MapTreeModule$$$height(r$$1) | 0;
        const m$$2 = (hl < hr ? hr : hl) | 0;
        return new MapTree$00602(2, "MapNode", k, v, l$$1, r$$1, m$$2 + 1);
      }
  }
}
function MapTreeModule$$$rebalance(t1, k$$1, v$$1, t2) {
  const t1h = MapTreeModule$$$height(t1) | 0;
  const t2h = MapTreeModule$$$height(t2) | 0;

  if (t2h > t1h + 2) {
    if (t2.tag === 2) {
      if (MapTreeModule$$$height(t2.fields[2]) > t1h + 1) {
        if (t2.fields[2].tag === 2) {
          return MapTreeModule$$$mk(MapTreeModule$$$mk(t1, k$$1, v$$1, t2.fields[2].fields[2]), t2.fields[2].fields[0], t2.fields[2].fields[1], MapTreeModule$$$mk(t2.fields[2].fields[3], t2.fields[0], t2.fields[1], t2.fields[3]));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return MapTreeModule$$$mk(MapTreeModule$$$mk(t1, k$$1, v$$1, t2.fields[2]), t2.fields[0], t2.fields[1], t2.fields[3]);
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h > t2h + 2) {
    if (t1.tag === 2) {
      if (MapTreeModule$$$height(t1.fields[3]) > t2h + 1) {
        if (t1.fields[3].tag === 2) {
          return MapTreeModule$$$mk(MapTreeModule$$$mk(t1.fields[2], t1.fields[0], t1.fields[1], t1.fields[3].fields[2]), t1.fields[3].fields[0], t1.fields[3].fields[1], MapTreeModule$$$mk(t1.fields[3].fields[3], k$$1, v$$1, t2));
        } else {
          throw new Error("re  balance");
        }
      } else {
        return MapTreeModule$$$mk(t1.fields[2], t1.fields[0], t1.fields[1], MapTreeModule$$$mk(t1.fields[3], k$$1, v$$1, t2));
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    return MapTreeModule$$$mk(t1, k$$1, v$$1, t2);
  }
}
function MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3) {
  switch (m$$3.tag) {
    case 1:
      {
        const c = comparer.Compare(k$$2, m$$3.fields[0]) | 0;

        if (c < 0) {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, new MapTree$00602(0, "MapEmpty"), m$$3, 2);
        } else if (c === 0) {
          return new MapTree$00602(1, "MapOne", k$$2, v$$2);
        } else {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, m$$3, new MapTree$00602(0, "MapEmpty"), 2);
        }
      }

    case 2:
      {
        const c$$1 = comparer.Compare(k$$2, m$$3.fields[0]) | 0;

        if (c$$1 < 0) {
          return MapTreeModule$$$rebalance(MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3.fields[2]), m$$3.fields[0], m$$3.fields[1], m$$3.fields[3]);
        } else if (c$$1 === 0) {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, m$$3.fields[2], m$$3.fields[3], m$$3.fields[4]);
        } else {
          return MapTreeModule$$$rebalance(m$$3.fields[2], m$$3.fields[0], m$$3.fields[1], MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3.fields[3]));
        }
      }

    default:
      {
        return new MapTree$00602(1, "MapOne", k$$2, v$$2);
      }
  }
}
function MapTreeModule$$$find($comparer$$1$$23, $k$$3$$24, $m$$4$$25) {
  MapTreeModule$$$find: while (true) {
    const comparer$$1 = $comparer$$1$$23,
          k$$3 = $k$$3$$24,
          m$$4 = $m$$4$$25;

    switch (m$$4.tag) {
      case 1:
        {
          const c$$2 = comparer$$1.Compare(k$$3, m$$4.fields[0]) | 0;

          if (c$$2 === 0) {
            return m$$4.fields[1];
          } else {
            throw new Error("key not found");
          }
        }

      case 2:
        {
          const c$$3 = comparer$$1.Compare(k$$3, m$$4.fields[0]) | 0;

          if (c$$3 < 0) {
            $comparer$$1$$23 = comparer$$1;
            $k$$3$$24 = k$$3;
            $m$$4$$25 = m$$4.fields[2];
            continue MapTreeModule$$$find;
          } else if (c$$3 === 0) {
            return m$$4.fields[1];
          } else {
            $comparer$$1$$23 = comparer$$1;
            $k$$3$$24 = k$$3;
            $m$$4$$25 = m$$4.fields[3];
            continue MapTreeModule$$$find;
          }
        }

      default:
        {
          throw new Error("key not found");
        }
    }

    break;
  }
}
function MapTreeModule$$$tryFind($comparer$$2$$26, $k$$4$$27, $m$$5$$28) {
  MapTreeModule$$$tryFind: while (true) {
    const comparer$$2 = $comparer$$2$$26,
          k$$4 = $k$$4$$27,
          m$$5 = $m$$5$$28;

    switch (m$$5.tag) {
      case 1:
        {
          const c$$4 = comparer$$2.Compare(k$$4, m$$5.fields[0]) | 0;

          if (c$$4 === 0) {
            return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(m$$5.fields[1]);
          } else {
            return null;
          }
        }

      case 2:
        {
          const c$$5 = comparer$$2.Compare(k$$4, m$$5.fields[0]) | 0;

          if (c$$5 < 0) {
            $comparer$$2$$26 = comparer$$2;
            $k$$4$$27 = k$$4;
            $m$$5$$28 = m$$5.fields[2];
            continue MapTreeModule$$$tryFind;
          } else if (c$$5 === 0) {
            return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(m$$5.fields[1]);
          } else {
            $comparer$$2$$26 = comparer$$2;
            $k$$4$$27 = k$$4;
            $m$$5$$28 = m$$5.fields[3];
            continue MapTreeModule$$$tryFind;
          }
        }

      default:
        {
          return null;
        }
    }

    break;
  }
}
function MapTreeModule$$$partition1(comparer$$3, f, k$$5, v$$3, acc1, acc2) {
  if (f(k$$5, v$$3)) {
    return [MapTreeModule$$$add(comparer$$3, k$$5, v$$3, acc1), acc2];
  } else {
    return [acc1, MapTreeModule$$$add(comparer$$3, k$$5, v$$3, acc2)];
  }
}
function MapTreeModule$$$partitionAux($comparer$$4$$35, $f$$1$$36, $s$$37, $acc_0$$38, $acc_1$$39) {
  MapTreeModule$$$partitionAux: while (true) {
    const comparer$$4 = $comparer$$4$$35,
          f$$1 = $f$$1$$36,
          s = $s$$37,
          acc_0 = $acc_0$$38,
          acc_1 = $acc_1$$39;

    switch (s.tag) {
      case 1:
        {
          return MapTreeModule$$$partition1(comparer$$4, f$$1, s.fields[0], s.fields[1], acc_0, acc_1);
        }

      case 2:
        {
          const acc$$2 = MapTreeModule$$$partitionAux(comparer$$4, f$$1, s.fields[3], acc_0, acc_1);
          const acc$$3 = MapTreeModule$$$partition1(comparer$$4, f$$1, s.fields[0], s.fields[1], acc$$2[0], acc$$2[1]);
          $comparer$$4$$35 = comparer$$4;
          $f$$1$$36 = f$$1;
          $s$$37 = s.fields[2];
          $acc_0$$38 = acc$$3[0];
          $acc_1$$39 = acc$$3[1];
          continue MapTreeModule$$$partitionAux;
        }

      default:
        {
          return [acc_0, acc_1];
        }
    }

    break;
  }
}
function MapTreeModule$$$partition(comparer$$5, f$$2, s$$1) {
  return MapTreeModule$$$partitionAux(comparer$$5, f$$2, s$$1, MapTreeModule$$$empty(), MapTreeModule$$$empty());
}
function MapTreeModule$$$filter1(comparer$$6, f$$3, k$$8, v$$6, acc$$4) {
  if (f$$3(k$$8, v$$6)) {
    return MapTreeModule$$$add(comparer$$6, k$$8, v$$6, acc$$4);
  } else {
    return acc$$4;
  }
}
function MapTreeModule$$$filterAux($comparer$$7$$48, $f$$4$$49, $s$$2$$50, $acc$$5$$51) {
  MapTreeModule$$$filterAux: while (true) {
    const comparer$$7 = $comparer$$7$$48,
          f$$4 = $f$$4$$49,
          s$$2 = $s$$2$$50,
          acc$$5 = $acc$$5$$51;

    switch (s$$2.tag) {
      case 1:
        {
          return MapTreeModule$$$filter1(comparer$$7, f$$4, s$$2.fields[0], s$$2.fields[1], acc$$5);
        }

      case 2:
        {
          const acc$$6 = MapTreeModule$$$filterAux(comparer$$7, f$$4, s$$2.fields[2], acc$$5);
          const acc$$7 = MapTreeModule$$$filter1(comparer$$7, f$$4, s$$2.fields[0], s$$2.fields[1], acc$$6);
          $comparer$$7$$48 = comparer$$7;
          $f$$4$$49 = f$$4;
          $s$$2$$50 = s$$2.fields[3];
          $acc$$5$$51 = acc$$7;
          continue MapTreeModule$$$filterAux;
        }

      default:
        {
          return acc$$5;
        }
    }

    break;
  }
}
function MapTreeModule$$$filter(comparer$$8, f$$5, s$$3) {
  return MapTreeModule$$$filterAux(comparer$$8, f$$5, s$$3, MapTreeModule$$$empty());
}
function MapTreeModule$$$spliceOutSuccessor(m$$6) {
  switch (m$$6.tag) {
    case 1:
      {
        return [m$$6.fields[0], m$$6.fields[1], new MapTree$00602(0, "MapEmpty")];
      }

    case 2:
      {
        if (m$$6.fields[2].tag === 0) {
          return [m$$6.fields[0], m$$6.fields[1], m$$6.fields[3]];
        } else {
          const patternInput = MapTreeModule$$$spliceOutSuccessor(m$$6.fields[2]);
          return [patternInput[0], patternInput[1], MapTreeModule$$$mk(patternInput[2], m$$6.fields[0], m$$6.fields[1], m$$6.fields[3])];
        }
      }

    default:
      {
        throw new Error("internal error: Map.spliceOutSuccessor");
      }
  }
}
function MapTreeModule$$$remove(comparer$$9, k$$11, m$$7) {
  switch (m$$7.tag) {
    case 1:
      {
        const c$$6 = comparer$$9.Compare(k$$11, m$$7.fields[0]) | 0;

        if (c$$6 === 0) {
          return new MapTree$00602(0, "MapEmpty");
        } else {
          return m$$7;
        }
      }

    case 2:
      {
        const c$$7 = comparer$$9.Compare(k$$11, m$$7.fields[0]) | 0;

        if (c$$7 < 0) {
          return MapTreeModule$$$rebalance(MapTreeModule$$$remove(comparer$$9, k$$11, m$$7.fields[2]), m$$7.fields[0], m$$7.fields[1], m$$7.fields[3]);
        } else if (c$$7 === 0) {
          if (m$$7.fields[2].tag === 0) {
            return m$$7.fields[3];
          } else if (m$$7.fields[3].tag === 0) {
            return m$$7.fields[2];
          } else {
            const patternInput$$1 = MapTreeModule$$$spliceOutSuccessor(m$$7.fields[3]);
            return MapTreeModule$$$mk(m$$7.fields[2], patternInput$$1[0], patternInput$$1[1], patternInput$$1[2]);
          }
        } else {
          return MapTreeModule$$$rebalance(m$$7.fields[2], m$$7.fields[0], m$$7.fields[1], MapTreeModule$$$remove(comparer$$9, k$$11, m$$7.fields[3]));
        }
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$mem($comparer$$10$$59, $k$$12$$60, $m$$8$$61) {
  MapTreeModule$$$mem: while (true) {
    const comparer$$10 = $comparer$$10$$59,
          k$$12 = $k$$12$$60,
          m$$8 = $m$$8$$61;

    switch (m$$8.tag) {
      case 1:
        {
          return comparer$$10.Compare(k$$12, m$$8.fields[0]) === 0;
        }

      case 2:
        {
          const c$$8 = comparer$$10.Compare(k$$12, m$$8.fields[0]) | 0;

          if (c$$8 < 0) {
            $comparer$$10$$59 = comparer$$10;
            $k$$12$$60 = k$$12;
            $m$$8$$61 = m$$8.fields[2];
            continue MapTreeModule$$$mem;
          } else if (c$$8 === 0) {
            return true;
          } else {
            $comparer$$10$$59 = comparer$$10;
            $k$$12$$60 = k$$12;
            $m$$8$$61 = m$$8.fields[3];
            continue MapTreeModule$$$mem;
          }
        }

      default:
        {
          return false;
        }
    }

    break;
  }
}
function MapTreeModule$$$iter($f$$6$$62, $m$$9$$63) {
  MapTreeModule$$$iter: while (true) {
    const f$$6 = $f$$6$$62,
          m$$9 = $m$$9$$63;

    switch (m$$9.tag) {
      case 1:
        {
          f$$6(m$$9.fields[0], m$$9.fields[1]);
          break;
        }

      case 2:
        {
          MapTreeModule$$$iter(f$$6, m$$9.fields[2]);
          f$$6(m$$9.fields[0], m$$9.fields[1]);
          $f$$6$$62 = f$$6;
          $m$$9$$63 = m$$9.fields[3];
          continue MapTreeModule$$$iter;
          break;
        }

      default:
        {}
    }

    break;
  }
}
function MapTreeModule$$$tryPick($f$$7$$64, $m$$10$$65) {
  MapTreeModule$$$tryPick: while (true) {
    const f$$7 = $f$$7$$64,
          m$$10 = $m$$10$$65;

    switch (m$$10.tag) {
      case 1:
        {
          return f$$7(m$$10.fields[0], m$$10.fields[1]);
        }

      case 2:
        {
          const matchValue$$2 = MapTreeModule$$$tryPick(f$$7, m$$10.fields[2]);

          if (matchValue$$2 == null) {
            const matchValue$$3 = f$$7(m$$10.fields[0], m$$10.fields[1]);

            if (matchValue$$3 == null) {
              $f$$7$$64 = f$$7;
              $m$$10$$65 = m$$10.fields[3];
              continue MapTreeModule$$$tryPick;
            } else {
              return matchValue$$3;
            }
          } else {
            return matchValue$$2;
          }
        }

      default:
        {
          return null;
        }
    }

    break;
  }
}
function MapTreeModule$$$exists($f$$8$$66, $m$$11$$67) {
  MapTreeModule$$$exists: while (true) {
    const f$$8 = $f$$8$$66,
          m$$11 = $m$$11$$67;

    switch (m$$11.tag) {
      case 1:
        {
          return f$$8(m$$11.fields[0], m$$11.fields[1]);
        }

      case 2:
        {
          if (MapTreeModule$$$exists(f$$8, m$$11.fields[2]) ? true : f$$8(m$$11.fields[0], m$$11.fields[1])) {
            return true;
          } else {
            $f$$8$$66 = f$$8;
            $m$$11$$67 = m$$11.fields[3];
            continue MapTreeModule$$$exists;
          }
        }

      default:
        {
          return false;
        }
    }

    break;
  }
}
function MapTreeModule$$$forall($f$$9$$68, $m$$12$$69) {
  MapTreeModule$$$forall: while (true) {
    const f$$9 = $f$$9$$68,
          m$$12 = $m$$12$$69;

    switch (m$$12.tag) {
      case 1:
        {
          return f$$9(m$$12.fields[0], m$$12.fields[1]);
        }

      case 2:
        {
          if (MapTreeModule$$$forall(f$$9, m$$12.fields[2]) ? f$$9(m$$12.fields[0], m$$12.fields[1]) : false) {
            $f$$9$$68 = f$$9;
            $m$$12$$69 = m$$12.fields[3];
            continue MapTreeModule$$$forall;
          } else {
            return false;
          }
        }

      default:
        {
          return true;
        }
    }

    break;
  }
}
function MapTreeModule$$$map(f$$10, m$$13) {
  switch (m$$13.tag) {
    case 1:
      {
        return new MapTree$00602(1, "MapOne", m$$13.fields[0], f$$10(m$$13.fields[1]));
      }

    case 2:
      {
        const l2 = MapTreeModule$$$map(f$$10, m$$13.fields[2]);
        const v2$$16 = f$$10(m$$13.fields[1]);
        const r2 = MapTreeModule$$$map(f$$10, m$$13.fields[3]);
        return new MapTree$00602(2, "MapNode", m$$13.fields[0], v2$$16, l2, r2, m$$13.fields[4]);
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$mapi(f$$11, m$$14) {
  switch (m$$14.tag) {
    case 1:
      {
        return new MapTree$00602(1, "MapOne", m$$14.fields[0], f$$11(m$$14.fields[0], m$$14.fields[1]));
      }

    case 2:
      {
        const l2$$1 = MapTreeModule$$$mapi(f$$11, m$$14.fields[2]);
        const v2$$17 = f$$11(m$$14.fields[0], m$$14.fields[1]);
        const r2$$1 = MapTreeModule$$$mapi(f$$11, m$$14.fields[3]);
        return new MapTree$00602(2, "MapNode", m$$14.fields[0], v2$$17, l2$$1, r2$$1, m$$14.fields[4]);
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$foldBack($f$$12$$74, $m$$15$$75, $x$$1$$76) {
  MapTreeModule$$$foldBack: while (true) {
    const f$$12 = $f$$12$$74,
          m$$15 = $m$$15$$75,
          x$$1 = $x$$1$$76;

    switch (m$$15.tag) {
      case 1:
        {
          return f$$12(m$$15.fields[0], m$$15.fields[1], x$$1);
        }

      case 2:
        {
          const x$$2 = MapTreeModule$$$foldBack(f$$12, m$$15.fields[3], x$$1);
          const x$$3 = f$$12(m$$15.fields[0], m$$15.fields[1], x$$2);
          $f$$12$$74 = f$$12;
          $m$$15$$75 = m$$15.fields[2];
          $x$$1$$76 = x$$3;
          continue MapTreeModule$$$foldBack;
        }

      default:
        {
          return x$$1;
        }
    }

    break;
  }
}
function MapTreeModule$$$fold($f$$13$$77, $x$$4$$78, $m$$16$$79) {
  MapTreeModule$$$fold: while (true) {
    const f$$13 = $f$$13$$77,
          x$$4 = $x$$4$$78,
          m$$16 = $m$$16$$79;

    switch (m$$16.tag) {
      case 1:
        {
          return f$$13(x$$4, m$$16.fields[0], m$$16.fields[1]);
        }

      case 2:
        {
          const x$$5 = MapTreeModule$$$fold(f$$13, x$$4, m$$16.fields[2]);
          const x$$6 = f$$13(x$$5, m$$16.fields[0], m$$16.fields[1]);
          $f$$13$$77 = f$$13;
          $x$$4$$78 = x$$6;
          $m$$16$$79 = m$$16.fields[3];
          continue MapTreeModule$$$fold;
        }

      default:
        {
          return x$$4;
        }
    }

    break;
  }
}
function MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17, x$$7) {
  switch (m$$17.tag) {
    case 1:
      {
        const cLoKey = comparer$$11.Compare(lo, m$$17.fields[0]) | 0;
        const cKeyHi = comparer$$11.Compare(m$$17.fields[0], hi) | 0;
        const x$$8 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f$$14(m$$17.fields[0], m$$17.fields[1], x$$7) : x$$7;
        return x$$8;
      }

    case 2:
      {
        const cLoKey$$1 = comparer$$11.Compare(lo, m$$17.fields[0]) | 0;
        const cKeyHi$$1 = comparer$$11.Compare(m$$17.fields[0], hi) | 0;
        const x$$9 = cLoKey$$1 < 0 ? MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17.fields[2], x$$7) : x$$7;
        const x$$10 = (cLoKey$$1 <= 0 ? cKeyHi$$1 <= 0 : false) ? f$$14(m$$17.fields[0], m$$17.fields[1], x$$9) : x$$9;
        const x$$11 = cKeyHi$$1 < 0 ? MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17.fields[3], x$$10) : x$$10;
        return x$$11;
      }

    default:
      {
        return x$$7;
      }
  }
}
function MapTreeModule$$$foldSection(comparer$$12, lo$$1, hi$$1, f$$15, m$$18, x$$12) {
  if (comparer$$12.Compare(lo$$1, hi$$1) === 1) {
    return x$$12;
  } else {
    return MapTreeModule$$$foldFromTo(comparer$$12, lo$$1, hi$$1, f$$15, m$$18, x$$12);
  }
}
function MapTreeModule$$$loop($m$$19$$92, $acc$$8$$93) {
  MapTreeModule$$$loop: while (true) {
    const m$$19 = $m$$19$$92,
          acc$$8 = $acc$$8$$93;

    switch (m$$19.tag) {
      case 1:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]([m$$19.fields[0], m$$19.fields[1]], acc$$8);
        }

      case 2:
        {
          $m$$19$$92 = m$$19.fields[2];
          $acc$$8$$93 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]([m$$19.fields[0], m$$19.fields[1]], MapTreeModule$$$loop(m$$19.fields[3], acc$$8));
          continue MapTreeModule$$$loop;
        }

      default:
        {
          return acc$$8;
        }
    }

    break;
  }
}
function MapTreeModule$$$toList(m$$20) {
  return MapTreeModule$$$loop(m$$20, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]());
}
function MapTreeModule$$$ofList(comparer$$13, l$$20) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["fold"])(function (acc$$9, tupledArg) {
    return MapTreeModule$$$add(comparer$$13, tupledArg[0], tupledArg[1], acc$$9);
  }, MapTreeModule$$$empty(), l$$20);
}
function MapTreeModule$$$mkFromEnumerator($comparer$$14$$97, $acc$$10$$98, $e$$99) {
  MapTreeModule$$$mkFromEnumerator: while (true) {
    const comparer$$14 = $comparer$$14$$97,
          acc$$10 = $acc$$10$$98,
          e = $e$$99;

    if (e.MoveNext()) {
      const patternInput$$2 = e.Current;
      $comparer$$14$$97 = comparer$$14;
      $acc$$10$$98 = MapTreeModule$$$add(comparer$$14, patternInput$$2[0], patternInput$$2[1], acc$$10);
      $e$$99 = e;
      continue MapTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$10;
    }

    break;
  }
}
function MapTreeModule$$$ofArray(comparer$$15, arr) {
  let res$$2 = MapTreeModule$$$empty();

  for (let i = 0; i <= arr.length - 1; i++) {
    const patternInput$$3 = arr[i];
    res$$2 = MapTreeModule$$$add(comparer$$15, patternInput$$3[0], patternInput$$3[1], res$$2);
  }

  return res$$2;
}
function MapTreeModule$$$ofSeq(comparer$$16, c$$9) {
  const ie = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["getEnumerator"])(c$$9);

  try {
    return MapTreeModule$$$mkFromEnumerator(comparer$$16, MapTreeModule$$$empty(), ie);
  } finally {
    if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["isDisposable"])(ie)) {
      ie.Dispose();
    }
  }
}
function MapTreeModule$$$copyToArray(s$$4, arr$$1, i$$1) {
  let j = i$$1 | 0;
  MapTreeModule$$$iter(function f$$16(x$$15, y$$2) {
    arr$$1[j] = [x$$15, y$$2];
    j = j + 1;
  }, s$$4);
}
const MapTreeModule$002EMapIterator$00602 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Map_MapTreeModule_MapIterator(arg1, arg2) {
  this.stack = arg1;
  this.started = arg2;
}, _Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function MapTreeModule$002EMapIterator$00602$reflection($gen$$109, $gen$$110) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record"])("Map.MapTreeModule.MapIterator`2", [$gen$$109, $gen$$110], MapTreeModule$002EMapIterator$00602, () => [["stack", Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["list"])(MapTree$00602$reflection($gen$$109, $gen$$110))], ["started", _Reflection_js__WEBPACK_IMPORTED_MODULE_1__["bool"]]]);
}
function MapTreeModule$$$collapseLHS($stack$$111) {
  MapTreeModule$$$collapseLHS: while (true) {
    const stack = $stack$$111;

    if (stack.tail != null) {
      if (stack.head.tag === 1) {
        return stack;
      } else if (stack.head.tag === 2) {
        $stack$$111 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](stack.head.fields[2], new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](new MapTree$00602(1, "MapOne", stack.head.fields[0], stack.head.fields[1]), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](stack.head.fields[3], stack.tail)));
        continue MapTreeModule$$$collapseLHS;
      } else {
        $stack$$111 = stack.tail;
        continue MapTreeModule$$$collapseLHS;
      }
    } else {
      return new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]();
    }

    break;
  }
}
function MapTreeModule$$$mkIterator(s$$5) {
  return new MapTreeModule$002EMapIterator$00602(MapTreeModule$$$collapseLHS(new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](s$$5, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]())), false);
}
function MapTreeModule$$$notStarted() {
  throw new Error("enumeration not started");
}
function MapTreeModule$$$alreadyFinished() {
  throw new Error("enumeration already finished");
}
function MapTreeModule$$$current(i$$2) {
  if (i$$2.started) {
    const matchValue$$4 = i$$2.stack;

    if (matchValue$$4.tail == null) {
      return MapTreeModule$$$alreadyFinished();
    } else if (matchValue$$4.head.tag === 1) {
      return [matchValue$$4.head.fields[0], matchValue$$4.head.fields[1]];
    } else {
      throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
  } else {
    return MapTreeModule$$$notStarted();
  }
}
function MapTreeModule$$$moveNext(i$$3) {
  if (i$$3.started) {
    const matchValue$$5 = i$$3.stack;

    if (matchValue$$5.tail == null) {
      return false;
    } else if (matchValue$$5.head.tag === 1) {
      i$$3.stack = MapTreeModule$$$collapseLHS(matchValue$$5.tail);
      return !(i$$3.stack.tail == null);
    } else {
      throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
    }
  } else {
    i$$3.started = true;
    return !(i$$3.stack.tail == null);
  }
}
const MapTreeModule$002EmkIEnumerator$0027$00602 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Map_MapTreeModule_mkIEnumerator_(s$$6) {
  const $this$$1 = this;
  $this$$1.s = s$$6;
  $this$$1.i = MapTreeModule$$$mkIterator($this$$1.s);
});
function MapTreeModule$002EmkIEnumerator$0027$00602$reflection($gen$$115, $gen$$116) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["type"])("Map.MapTreeModule.mkIEnumerator'`2", [$gen$$115, $gen$$116]);
}
function MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C(s$$6) {
  return this instanceof MapTreeModule$002EmkIEnumerator$0027$00602 ? MapTreeModule$002EmkIEnumerator$0027$00602.call(this, s$$6) : new MapTreeModule$002EmkIEnumerator$0027$00602(s$$6);
}
Object.defineProperty(MapTreeModule$002EmkIEnumerator$0027$00602.prototype, "Current", {
  "get": function () {
    const __ = this;
    return MapTreeModule$$$current(__.i);
  }
});

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.MoveNext = function () {
  const __$$1 = this;
  return MapTreeModule$$$moveNext(__$$1.i);
};

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.Reset = function () {
  const __$$2 = this;
  __$$2.i = MapTreeModule$$$mkIterator(__$$2.s);
};

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.Dispose = function () {};

function MapTreeModule$$$mkIEnumerator(s$$7) {
  return MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C(s$$7);
}
function MapTreeModule$$$toSeq(s$$8) {
  const en = MapTreeModule$$$mkIEnumerator(s$$8);
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["unfold"])(function generator(en$$1) {
    if (en$$1.MoveNext()) {
      return [en$$1.Current, en$$1];
    } else {
      return null;
    }
  }, en);
}
const FSharpMap = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Map_Map(comparer$$17, tree) {
  const $this$$2 = this;
  $this$$2.comparer = comparer$$17;
  $this$$2.tree = tree;
});
function FSharpMap$reflection($gen$$120, $gen$$121) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["type"])("Map.FSharpMap", [$gen$$120, $gen$$121]);
}
function FSharpMap$$$$002Ector$$58ADD115(comparer$$17, tree) {
  return this instanceof FSharpMap ? FSharpMap.call(this, comparer$$17, tree) : new FSharpMap(comparer$$17, tree);
}
function FSharpMap$$get_Comparer(__$$4) {
  return __$$4.comparer;
}
function FSharpMap$$get_Tree(__$$5) {
  return __$$5.tree;
}
function FSharpMap$$Add$$5BDDA1(__$$6, k$$28, v$$24) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$6.comparer, MapTreeModule$$$add(__$$6.comparer, k$$28, v$$24, __$$6.tree));
}
function FSharpMap$$get_IsEmpty(__$$7) {
  return MapTreeModule$$$isEmpty(__$$7.tree);
}
function FSharpMap$$get_Item$$2B595(__$$8, k$$29) {
  return MapTreeModule$$$find(__$$8.comparer, k$$29, __$$8.tree);
}
function FSharpMap$$TryGetValue$$5BDDA1(__$$9, k$$30, defValue) {
  const matchValue$$6 = MapTreeModule$$$tryFind(__$$9.comparer, k$$30, __$$9.tree);

  if (matchValue$$6 == null) {
    return [false, defValue];
  } else {
    const v$$25 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(matchValue$$6);
    return [true, v$$25];
  }
}
function FSharpMap$$TryPick$$72321DD7(__$$10, f$$17) {
  return MapTreeModule$$$tryPick(f$$17, __$$10.tree);
}
function FSharpMap$$Exists$$Z395DDC35(__$$11, f$$18) {
  return MapTreeModule$$$exists(f$$18, __$$11.tree);
}
function FSharpMap$$Filter$$Z395DDC35(__$$12, f$$19) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$12.comparer, MapTreeModule$$$filter(__$$12.comparer, f$$19, __$$12.tree));
}
function FSharpMap$$ForAll$$Z395DDC35(__$$13, f$$20) {
  return MapTreeModule$$$forall(f$$20, __$$13.tree);
}
function FSharpMap$$Fold(__$$14, f$$21, acc$$11) {
  return MapTreeModule$$$foldBack(f$$21, __$$14.tree, acc$$11);
}
function FSharpMap$$FoldSection(__$$15, lo$$2, hi$$2, f$$22, acc$$12) {
  return MapTreeModule$$$foldSection(__$$15.comparer, lo$$2, hi$$2, f$$22, __$$15.tree, acc$$12);
}
function FSharpMap$$Iterate$$1DCFB91D(__$$16, f$$23) {
  MapTreeModule$$$iter(f$$23, __$$16.tree);
}
function FSharpMap$$MapRange$$6DC7247(__$$17, f$$24) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$17.comparer, MapTreeModule$$$map(f$$24, __$$17.tree));
}
function FSharpMap$$Map$$Z6F6B671C(__$$18, f$$25) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$18.comparer, MapTreeModule$$$mapi(f$$25, __$$18.tree));
}
function FSharpMap$$Partition$$Z395DDC35(__$$19, f$$26) {
  const patternInput$$4 = MapTreeModule$$$partition(__$$19.comparer, f$$26, __$$19.tree);
  return [FSharpMap$$$$002Ector$$58ADD115(__$$19.comparer, patternInput$$4[0]), FSharpMap$$$$002Ector$$58ADD115(__$$19.comparer, patternInput$$4[1])];
}
function FSharpMap$$get_Count(__$$20) {
  return MapTreeModule$$$size(__$$20.tree);
}
function FSharpMap$$ContainsKey$$2B595(__$$21, k$$31) {
  return MapTreeModule$$$mem(__$$21.comparer, k$$31, __$$21.tree);
}
function FSharpMap$$Remove$$2B595(__$$22, k$$32) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$22.comparer, MapTreeModule$$$remove(__$$22.comparer, k$$32, __$$22.tree));
}
function FSharpMap$$TryFind$$2B595(__$$23, k$$33) {
  return MapTreeModule$$$tryFind(__$$23.comparer, k$$33, __$$23.tree);
}
function FSharpMap$$ToList(__$$24) {
  return MapTreeModule$$$toList(__$$24.tree);
}

FSharpMap.prototype.toString = function () {
  var strings;
  const this$ = this;
  return "map [" + (strings = (Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping(kv) {
    const clo1 = Object(_String_js__WEBPACK_IMPORTED_MODULE_5__["toText"])(Object(_String_js__WEBPACK_IMPORTED_MODULE_5__["printf"])("(%A, %A)"));
    const clo2 = clo1(kv[0]);
    return clo2(kv[1]);
  }, this$)), (Object(_String_js__WEBPACK_IMPORTED_MODULE_5__["join"])("; ", strings))) + "]";
};

FSharpMap.prototype.GetHashCode = function () {
  const this$$$1 = this;

  const combineHash = function combineHash(x$$16, y$$3) {
    return (x$$16 << 1) + y$$3 + 631;
  };

  let res$$3 = 0;
  const e$$1 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(this$$$1));

  while (e$$1.MoveNext()) {
    const patternInput$$5 = e$$1.Current;
    const activePatternResult3692 = patternInput$$5;
    res$$3 = combineHash(res$$3, Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["structuralHash"])(activePatternResult3692[0]));
    res$$3 = combineHash(res$$3, Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["structuralHash"])(activePatternResult3692[1]));
  }

  return Math.abs(res$$3) | 0;
};

FSharpMap.prototype.Equals = function (that) {
  const this$$$2 = this;
  return this$$$2.CompareTo(that) === 0;
};

FSharpMap.prototype[Symbol.iterator] = function () {
  const __$$25 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["toIterator"])(MapTreeModule$$$mkIEnumerator(__$$25.tree));
};

FSharpMap.prototype.CompareTo = function (obj) {
  const m$$22 = this;
  let res$$4 = 0;
  let finished = false;
  const e1 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(m$$22));

  try {
    const e2 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(obj));

    try {
      while (!finished ? res$$4 === 0 : false) {
        const matchValue$$7 = [e1.MoveNext(), e2.MoveNext()];

        if (matchValue$$7[0]) {
          if (matchValue$$7[1]) {
            const kvp1 = e1.Current;
            const kvp2 = e2.Current;
            const c$$10 = m$$22.comparer.Compare(kvp1[0], kvp2[0]) | 0;
            res$$4 = c$$10 !== 0 ? c$$10 : Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["compare"])(kvp1[1], kvp2[1]);
          } else {
            res$$4 = 1;
          }
        } else if (matchValue$$7[1]) {
          res$$4 = -1;
        } else {
          finished = true;
        }
      }

      return res$$4 | 0;
    } finally {
      if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["isDisposable"])(e2)) {
        e2.Dispose();
      }
    }
  } finally {
    if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["isDisposable"])(e1)) {
      e1.Dispose();
    }
  }
};

Object.defineProperty(FSharpMap.prototype, "size", {
  "get": function () {
    const this$$$3 = this;
    return FSharpMap$$get_Count(this$$$3) | 0;
  }
});

FSharpMap.prototype.clear = function () {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype.delete = function (_arg1$$1) {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype.entries = function () {
  const this$$$4 = this;
  return MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$4));
};

FSharpMap.prototype.get = function (k$$34) {
  const this$$$5 = this;
  return FSharpMap$$get_Item$$2B595(this$$$5, k$$34);
};

FSharpMap.prototype.has = function (k$$35) {
  const this$$$6 = this;
  return FSharpMap$$ContainsKey$$2B595(this$$$6, k$$35);
};

FSharpMap.prototype.keys = function () {
  const this$$$7 = this;
  const source$$1 = MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$7));
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$1(kv$$1) {
    return kv$$1[0];
  }, source$$1);
};

FSharpMap.prototype.set = function (k$$36, v$$26) {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype.values = function () {
  const this$$$8 = this;
  const source$$2 = MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$8));
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$2(kv$$2) {
    return kv$$2[1];
  }, source$$2);
};

function isEmpty(m$$23) {
  return FSharpMap$$get_IsEmpty(m$$23);
}
function add(k$$37, v$$27, m$$24) {
  return FSharpMap$$Add$$5BDDA1(m$$24, k$$37, v$$27);
}
function find(k$$38, m$$25) {
  return FSharpMap$$get_Item$$2B595(m$$25, k$$38);
}
function tryFind(k$$39, m$$26) {
  return FSharpMap$$TryFind$$2B595(m$$26, k$$39);
}
function remove(k$$40, m$$27) {
  return FSharpMap$$Remove$$2B595(m$$27, k$$40);
}
function containsKey(k$$41, m$$28) {
  return FSharpMap$$ContainsKey$$2B595(m$$28, k$$41);
}
function iterate(f$$27, m$$29) {
  FSharpMap$$Iterate$$1DCFB91D(m$$29, f$$27);
}
function tryPick(f$$28, m$$30) {
  return FSharpMap$$TryPick$$72321DD7(m$$30, f$$28);
}
function pick(f$$29, m$$31) {
  const matchValue$$8 = tryPick(f$$29, m$$31);

  if (matchValue$$8 != null) {
    const res$$5 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(matchValue$$8);
    return res$$5;
  } else {
    throw new Error("key not found");
  }
}
function exists(f$$30, m$$32) {
  return FSharpMap$$Exists$$Z395DDC35(m$$32, f$$30);
}
function filter(f$$31, m$$33) {
  return FSharpMap$$Filter$$Z395DDC35(m$$33, f$$31);
}
function partition(f$$32, m$$34) {
  return FSharpMap$$Partition$$Z395DDC35(m$$34, f$$32);
}
function forAll(f$$33, m$$35) {
  return FSharpMap$$ForAll$$Z395DDC35(m$$35, f$$33);
}
function mapRange(f$$34, m$$36) {
  return FSharpMap$$MapRange$$6DC7247(m$$36, f$$34);
}
function map(f$$35, m$$37) {
  return FSharpMap$$Map$$Z6F6B671C(m$$37, f$$35);
}
function fold(f$$36, z, m$$38) {
  return MapTreeModule$$$fold(f$$36, z, FSharpMap$$get_Tree(m$$38));
}
function foldBack(f$$37, m$$39, z$$1) {
  return MapTreeModule$$$foldBack(f$$37, FSharpMap$$get_Tree(m$$39), z$$1);
}
function toSeq(m$$40) {
  return MapTreeModule$$$toSeq(FSharpMap$$get_Tree(m$$40));
}
function findKey(f$$38, m$$41) {
  let _arg1$$2;

  const m$$42 = FSharpMap$$get_Tree(m$$41);
  _arg1$$2 = MapTreeModule$$$tryPick(function f$$39(k$$42, v$$28) {
    if (f$$38(k$$42, v$$28)) {
      return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(k$$42);
    } else {
      return null;
    }
  }, m$$42);

  if (_arg1$$2 == null) {
    throw new Error("Key not found");
  } else {
    const k$$43 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(_arg1$$2);
    return k$$43;
  }
}
function tryFindKey(f$$40, m$$43) {
  const m$$44 = FSharpMap$$get_Tree(m$$43);
  return MapTreeModule$$$tryPick(function f$$41(k$$44, v$$29) {
    if (f$$40(k$$44, v$$29)) {
      return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(k$$44);
    } else {
      return null;
    }
  }, m$$44);
}
function ofList(l$$22, comparer$$18) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$18, MapTreeModule$$$ofList(comparer$$18, l$$22));
}
function ofSeq(l$$23, comparer$$19) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$19, MapTreeModule$$$ofSeq(comparer$$19, l$$23));
}
function ofArray(array, comparer$$20) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$20, MapTreeModule$$$ofArray(comparer$$20, array));
}
function toList(m$$45) {
  return FSharpMap$$ToList(m$$45);
}
function toArray(m$$46) {
  let res$$6;
  const len = FSharpMap$$get_Count(m$$46) | 0;
  res$$6 = new Array(len);
  MapTreeModule$$$copyToArray(FSharpMap$$get_Tree(m$$46), res$$6, 0);
  return res$$6;
}
function empty(comparer$$21) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$21, new MapTree$00602(0, "MapEmpty"));
}

function createMutablePrivate(comparer$$22, tree$0027) {
  let tree$$1 = tree$0027;
  return {
    get size() {
      return MapTreeModule$$$size(tree$$1);
    },

    clear() {
      tree$$1 = new MapTree$00602(0, "MapEmpty");
    },

    delete(x$$18) {
      if (MapTreeModule$$$mem(comparer$$22, x$$18, tree$$1)) {
        tree$$1 = MapTreeModule$$$remove(comparer$$22, x$$18, tree$$1);
        return true;
      } else {
        return false;
      }
    },

    entries() {
      return MapTreeModule$$$toSeq(tree$$1);
    },

    get(k$$45) {
      return MapTreeModule$$$find(comparer$$22, k$$45, tree$$1);
    },

    has(x$$19) {
      return MapTreeModule$$$mem(comparer$$22, x$$19, tree$$1);
    },

    keys() {
      const source$$3 = MapTreeModule$$$toSeq(tree$$1);
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$3(kv$$3) {
        return kv$$3[0];
      }, source$$3);
    },

    set(k$$46, v$$30) {
      const this$$$9 = this;
      tree$$1 = MapTreeModule$$$add(comparer$$22, k$$46, v$$30, tree$$1);
      return this$$$9;
    },

    values() {
      const source$$4 = MapTreeModule$$$toSeq(tree$$1);
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$4(kv$$4) {
        return kv$$4[1];
      }, source$$4);
    },

    [Symbol.iterator]() {
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["toIterator"])(MapTreeModule$$$mkIEnumerator(tree$$1));
    },

    GetEnumerator() {
      return MapTreeModule$$$mkIEnumerator(tree$$1);
    }

  };
}

function createMutable(source$$5, comparer$$23) {
  const map$$1 = Object(_MutableMap__WEBPACK_IMPORTED_MODULE_6__["MutableMap$00602$$$$002Ector$$6623D9B3"])(source$$5, comparer$$23);
  return map$$1;
}
function groupBy(projection, xs, comparer$$24) {
  const dict = createMutable(Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])(), comparer$$24);
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["iterate"])(function (v$$31) {
    const key = projection(v$$31);

    if (dict.has(key)) {
      dict.get(key).push(v$$31);
    } else {
      const value = dict.set(key, [v$$31]);
      value, null;
    }
  }, xs);
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$5(kv$$5) {
    return [kv$$5[0], kv$$5[1]];
  }, dict);
}
function countBy(projection$$1, xs$$1, comparer$$25) {
  const dict$$1 = createMutable(Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])(), comparer$$25);
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["iterate"])(function (value$$1) {
    const key$$1 = projection$$1(value$$1);
    const value$$2 = dict$$1.has(key$$1) ? dict$$1.set(key$$1, dict$$1.get(key$$1) + 1) : dict$$1.set(key$$1, 1);
    value$$2, null;
  }, xs$$1);
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$6(kv$$6) {
    return [kv$$6[0], kv$$6[1]];
  }, dict$$1);
}
function count(m$$47) {
  return FSharpMap$$get_Count(m$$47);
}

/***/ }),

/***/ "./.fable/fable-library.2.4.11/MutableMap.js":
/*!***************************************************!*\
  !*** ./.fable/fable-library.2.4.11/MutableMap.js ***!
  \***************************************************/
/*! exports provided: MutableMap$00602, MutableMap$00602$reflection, MutableMap$00602$$$$002Ector$$6623D9B3, MutableMap$00602$$TryFind$$2B595, MutableMap$00602$$get_Comparer, MutableMap$00602$$Clear, MutableMap$00602$$get_Count, MutableMap$00602$$get_Item$$2B595, MutableMap$00602$$set_Item$$5BDDA1, MutableMap$00602$$Add$$5BDDA1, MutableMap$00602$$ContainsKey$$2B595, MutableMap$00602$$Remove$$2B595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602", function() { return MutableMap$00602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$reflection", function() { return MutableMap$00602$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$$$002Ector$$6623D9B3", function() { return MutableMap$00602$$$$002Ector$$6623D9B3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$TryFind$$2B595", function() { return MutableMap$00602$$TryFind$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$get_Comparer", function() { return MutableMap$00602$$get_Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$Clear", function() { return MutableMap$00602$$Clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$get_Count", function() { return MutableMap$00602$$get_Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$get_Item$$2B595", function() { return MutableMap$00602$$get_Item$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$set_Item$$5BDDA1", function() { return MutableMap$00602$$set_Item$$5BDDA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$Add$$5BDDA1", function() { return MutableMap$00602$$Add$$5BDDA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$ContainsKey$$2B595", function() { return MutableMap$00602$$ContainsKey$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$Remove$$2B595", function() { return MutableMap$00602$$Remove$$2B595; });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.4.11/Seq.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reflection.js */ "./.fable/fable-library.2.4.11/Reflection.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.4.11/Util.js");
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./String.js */ "./.fable/fable-library.2.4.11/String.js");





const MutableMap$00602 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Fable_Collections_MutableMap(pairs, comparer) {
  const $this$$1 = this;
  const this$ = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["FSharpRef"](null);
  $this$$1.comparer = comparer;
  this$.contents = $this$$1;
  $this$$1["entries@23"] = new Map([]);
  $this$$1["init@20-1"] = 1;
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["iterate"])(function (pair) {
    MutableMap$00602$$Add$$5BDDA1(this$.contents, pair[0], pair[1]);
  }, pairs);
});
function MutableMap$00602$reflection($gen$$4, $gen$$5) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_2__["type"])("Fable.Collections.MutableMap`2", [$gen$$4, $gen$$5]);
}
function MutableMap$00602$$$$002Ector$$6623D9B3(pairs, comparer) {
  return this instanceof MutableMap$00602 ? MutableMap$00602.call(this, pairs, comparer) : new MutableMap$00602(pairs, comparer);
}

function MutableMap$00602$$TryFindIndex$$2B595(this$$$1, k) {
  const h = this$$$1.comparer.GetHashCode(k) | 0;
  const matchValue = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["tryGetValue"])(this$$$1["entries@23"], h, null);

  if (matchValue[0]) {
    return [true, h, matchValue[1].findIndex(function (pair$$1) {
      return this$$$1.comparer.Equals(k, pair$$1[0]);
    })];
  } else {
    return [false, h, -1];
  }
}

function MutableMap$00602$$TryFind$$2B595(this$$$2, k$$1) {
  const matchValue$$1 = MutableMap$00602$$TryFindIndex$$2B595(this$$$2, k$$1);
  var $target$$10;

  if (matchValue$$1[0]) {
    if (matchValue$$1[2] > -1) {
      $target$$10 = 0;
    } else {
      $target$$10 = 1;
    }
  } else {
    $target$$10 = 1;
  }

  switch ($target$$10) {
    case 0:
      {
        return Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$2["entries@23"], matchValue$$1[1])[matchValue$$1[2]];
      }

    case 1:
      {
        return null;
      }
  }
}
function MutableMap$00602$$get_Comparer(this$$$3) {
  return this$$$3.comparer;
}
function MutableMap$00602$$Clear(this$$$4) {
  this$$$4["entries@23"].clear();
}
function MutableMap$00602$$get_Count(this$$$5) {
  const source = this$$$5["entries@23"].values();
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["sumBy"])(function projection(pairs$$2) {
    return pairs$$2.length;
  }, source, {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  }) | 0;
}
function MutableMap$00602$$get_Item$$2B595(this$$$6, k$$2) {
  const matchValue$$2 = MutableMap$00602$$TryFind$$2B595(this$$$6, k$$2);

  if (matchValue$$2 != null) {
    const pair$$2 = matchValue$$2;
    return pair$$2[1];
  } else {
    throw new Error("The item was not found in collection");
  }
}
function MutableMap$00602$$set_Item$$5BDDA1(this$$$7, k$$3, v) {
  const matchValue$$3 = MutableMap$00602$$TryFindIndex$$2B595(this$$$7, k$$3);
  var $target$$20;

  if (matchValue$$3[0]) {
    if (matchValue$$3[2] > -1) {
      $target$$20 = 0;
    } else {
      $target$$20 = 1;
    }
  } else {
    $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$7["entries@23"], matchValue$$3[1])[matchValue$$3[2]] = [k$$3, v];
        break;
      }

    case 1:
      {
        if (matchValue$$3[0]) {
          const value = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$7["entries@23"], matchValue$$3[1]).push([k$$3, v]);
          null, null;
        } else {
          this$$$7["entries@23"].set(matchValue$$3[1], [[k$$3, v]]);
        }

        break;
      }
  }
}
function MutableMap$00602$$Add$$5BDDA1(this$$$8, k$$4, v$$1) {
  const matchValue$$4 = MutableMap$00602$$TryFindIndex$$2B595(this$$$8, k$$4);
  var $target$$24;

  if (matchValue$$4[0]) {
    if (matchValue$$4[2] > -1) {
      $target$$24 = 0;
    } else {
      $target$$24 = 1;
    }
  } else {
    $target$$24 = 1;
  }

  switch ($target$$24) {
    case 0:
      {
        let msg;
        const clo1 = Object(_String_js__WEBPACK_IMPORTED_MODULE_4__["toText"])(Object(_String_js__WEBPACK_IMPORTED_MODULE_4__["printf"])("An item with the same key has already been added. Key: %A"));
        msg = clo1(k$$4);
        throw new Error(msg);
        break;
      }

    case 1:
      {
        if (matchValue$$4[0]) {
          const value$$1 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$8["entries@23"], matchValue$$4[1]).push([k$$4, v$$1]);
          null, null;
        } else {
          this$$$8["entries@23"].set(matchValue$$4[1], [[k$$4, v$$1]]);
        }

        break;
      }
  }
}
function MutableMap$00602$$ContainsKey$$2B595(this$$$9, k$$5) {
  const matchValue$$5 = MutableMap$00602$$TryFindIndex$$2B595(this$$$9, k$$5);
  var $target$$27;

  if (matchValue$$5[0]) {
    if (matchValue$$5[2] > -1) {
      $target$$27 = 0;
    } else {
      $target$$27 = 1;
    }
  } else {
    $target$$27 = 1;
  }

  switch ($target$$27) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
function MutableMap$00602$$Remove$$2B595(this$$$10, k$$6) {
  const matchValue$$6 = MutableMap$00602$$TryFindIndex$$2B595(this$$$10, k$$6);
  var $target$$30;

  if (matchValue$$6[0]) {
    if (matchValue$$6[2] > -1) {
      $target$$30 = 0;
    } else {
      $target$$30 = 1;
    }
  } else {
    $target$$30 = 1;
  }

  switch ($target$$30) {
    case 0:
      {
        Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$10["entries@23"], matchValue$$6[1]).splice(matchValue$$6[2], 1);
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

MutableMap$00602.prototype[Symbol.iterator] = function () {
  var elems;
  const this$$$11 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["toIterator"])((elems = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
    return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["collect"])(function (pairs$$3) {
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function (pair$$3) {
        return pair$$3;
      }, pairs$$3);
    }, this$$$11["entries@23"].values());
  }), Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["getEnumerator"])(elems)));
};

MutableMap$00602.prototype.Add = function (item) {
  const this$$$12 = this;
  MutableMap$00602$$Add$$5BDDA1(this$$$12, item[0], item[1]);
};

MutableMap$00602.prototype.Clear = function () {
  const this$$$13 = this;
  MutableMap$00602$$Clear(this$$$13);
};

MutableMap$00602.prototype.Contains = function (item$$1) {
  var p;
  const this$$$14 = this;
  const matchValue$$7 = MutableMap$00602$$TryFind$$2B595(this$$$14, item$$1[0]);
  var $target$$31;

  if (matchValue$$7 != null) {
    if (p = matchValue$$7, Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["equals"])(p[1], item$$1[1])) {
      $target$$31 = 0;
    } else {
      $target$$31 = 1;
    }
  } else {
    $target$$31 = 1;
  }

  switch ($target$$31) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
};

MutableMap$00602.prototype.CopyTo = function (array, arrayIndex) {
  const this$$$15 = this;
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["iterateIndexed"])(function action(i$$10, e) {
    array[arrayIndex + i$$10] = e;
  }, this$$$15);
};

Object.defineProperty(MutableMap$00602.prototype, "Count", {
  "get": function () {
    const this$$$16 = this;
    return MutableMap$00602$$get_Count(this$$$16) | 0;
  }
});
Object.defineProperty(MutableMap$00602.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});

MutableMap$00602.prototype.Remove = function (item$$2) {
  const this$$$18 = this;
  const matchValue$$8 = MutableMap$00602$$TryFind$$2B595(this$$$18, item$$2[0]);

  if (matchValue$$8 != null) {
    const pair$$4 = matchValue$$8;

    if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["equals"])(pair$$4[1], item$$2[1])) {
      const value$$2 = MutableMap$00602$$Remove$$2B595(this$$$18, item$$2[0]);
      value$$2, null;
    }

    return true;
  } else {
    return false;
  }
};

Object.defineProperty(MutableMap$00602.prototype, "size", {
  "get": function () {
    const this$$$19 = this;
    return MutableMap$00602$$get_Count(this$$$19) | 0;
  }
});

MutableMap$00602.prototype.clear = function () {
  const this$$$20 = this;
  MutableMap$00602$$Clear(this$$$20);
};

MutableMap$00602.prototype.delete = function (k$$7) {
  const this$$$21 = this;
  return MutableMap$00602$$Remove$$2B595(this$$$21, k$$7);
};

MutableMap$00602.prototype.entries = function () {
  const this$$$22 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping(x) {
    return x;
  }, this$$$22);
};

MutableMap$00602.prototype.get = function (k$$8) {
  const this$$$23 = this;
  return MutableMap$00602$$get_Item$$2B595(this$$$23, k$$8);
};

MutableMap$00602.prototype.has = function (k$$9) {
  const this$$$24 = this;
  return MutableMap$00602$$ContainsKey$$2B595(this$$$24, k$$9);
};

MutableMap$00602.prototype.keys = function () {
  const this$$$25 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping$$1(pair$$5) {
    return pair$$5[0];
  }, this$$$25);
};

MutableMap$00602.prototype.set = function (k$$10, v$$2) {
  const this$$$26 = this;
  MutableMap$00602$$set_Item$$5BDDA1(this$$$26, k$$10, v$$2);
  return this$$$26;
};

MutableMap$00602.prototype.values = function () {
  const this$$$27 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping$$2(pair$$6) {
    return pair$$6[1];
  }, this$$$27);
};

/***/ }),

/***/ "./.fable/fable-library.2.4.11/MutableSet.js":
/*!***************************************************!*\
  !*** ./.fable/fable-library.2.4.11/MutableSet.js ***!
  \***************************************************/
/*! exports provided: MutableSet$00601, MutableSet$00601$reflection, MutableSet$00601$$$$002Ector$$Z6150332D, MutableSet$00601$$get_Comparer, MutableSet$00601$$Clear, MutableSet$00601$$get_Count, MutableSet$00601$$Add$$2B595, MutableSet$00601$$Contains$$2B595, MutableSet$00601$$Remove$$2B595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601", function() { return MutableSet$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$reflection", function() { return MutableSet$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$$$002Ector$$Z6150332D", function() { return MutableSet$00601$$$$002Ector$$Z6150332D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$get_Comparer", function() { return MutableSet$00601$$get_Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$Clear", function() { return MutableSet$00601$$Clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$get_Count", function() { return MutableSet$00601$$get_Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$Add$$2B595", function() { return MutableSet$00601$$Add$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$Contains$$2B595", function() { return MutableSet$00601$$Contains$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$Remove$$2B595", function() { return MutableSet$00601$$Remove$$2B595; });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.4.11/Seq.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reflection.js */ "./.fable/fable-library.2.4.11/Reflection.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.4.11/Util.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.4.11/Option.js");





const MutableSet$00601 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Fable_Collections_MutableSet(items, comparer) {
  const $this$$1 = this;
  const this$ = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["FSharpRef"](null);
  $this$$1.comparer = comparer;
  this$.contents = $this$$1;
  $this$$1["entries@24"] = new Map([]);
  $this$$1["init@21-2"] = 1;
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["iterate"])(function (item) {
    const value = MutableSet$00601$$Add$$2B595(this$.contents, item);
    value, null;
  }, items);
});
function MutableSet$00601$reflection($gen$$4) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_2__["type"])("Fable.Collections.MutableSet`1", [$gen$$4]);
}
function MutableSet$00601$$$$002Ector$$Z6150332D(items, comparer) {
  return this instanceof MutableSet$00601 ? MutableSet$00601.call(this, items, comparer) : new MutableSet$00601(items, comparer);
}

function MutableSet$00601$$TryFindIndex$$2B595(this$$$1, k) {
  const h = this$$$1.comparer.GetHashCode(k) | 0;
  const matchValue = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["tryGetValue"])(this$$$1["entries@24"], h, null);

  if (matchValue[0]) {
    return [true, h, matchValue[1].findIndex(function (v) {
      return this$$$1.comparer.Equals(k, v);
    })];
  } else {
    return [false, h, -1];
  }
}

function MutableSet$00601$$TryFind$$2B595(this$$$2, k$$1) {
  const matchValue$$1 = MutableSet$00601$$TryFindIndex$$2B595(this$$$2, k$$1);
  var $target$$9;

  if (matchValue$$1[0]) {
    if (matchValue$$1[2] > -1) {
      $target$$9 = 0;
    } else {
      $target$$9 = 1;
    }
  } else {
    $target$$9 = 1;
  }

  switch ($target$$9) {
    case 0:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_4__["some"])(Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$2["entries@24"], matchValue$$1[1])[matchValue$$1[2]]);
      }

    case 1:
      {
        return null;
      }
  }
}

function MutableSet$00601$$get_Comparer(this$$$3) {
  return this$$$3.comparer;
}
function MutableSet$00601$$Clear(this$$$4) {
  this$$$4["entries@24"].clear();
}
function MutableSet$00601$$get_Count(this$$$5) {
  const source = this$$$5["entries@24"].values();
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["sumBy"])(function projection(pairs) {
    return pairs.length;
  }, source, {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  }) | 0;
}
function MutableSet$00601$$Add$$2B595(this$$$6, k$$2) {
  const matchValue$$2 = MutableSet$00601$$TryFindIndex$$2B595(this$$$6, k$$2);
  var $target$$16;

  if (matchValue$$2[0]) {
    if (matchValue$$2[2] > -1) {
      $target$$16 = 0;
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        if (matchValue$$2[0]) {
          const value$$1 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$6["entries@24"], matchValue$$2[1]).push(k$$2);
          null, null;
          return true;
        } else {
          this$$$6["entries@24"].set(matchValue$$2[1], [k$$2]);
          return true;
        }
      }
  }
}
function MutableSet$00601$$Contains$$2B595(this$$$7, k$$3) {
  const matchValue$$3 = MutableSet$00601$$TryFindIndex$$2B595(this$$$7, k$$3);
  var $target$$19;

  if (matchValue$$3[0]) {
    if (matchValue$$3[2] > -1) {
      $target$$19 = 0;
    } else {
      $target$$19 = 1;
    }
  } else {
    $target$$19 = 1;
  }

  switch ($target$$19) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
function MutableSet$00601$$Remove$$2B595(this$$$8, k$$4) {
  const matchValue$$4 = MutableSet$00601$$TryFindIndex$$2B595(this$$$8, k$$4);
  var $target$$22;

  if (matchValue$$4[0]) {
    if (matchValue$$4[2] > -1) {
      $target$$22 = 0;
    } else {
      $target$$22 = 1;
    }
  } else {
    $target$$22 = 1;
  }

  switch ($target$$22) {
    case 0:
      {
        Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$8["entries@24"], matchValue$$4[1]).splice(matchValue$$4[2], 1);
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

MutableSet$00601.prototype[Symbol.iterator] = function () {
  var elems;
  const this$$$9 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["toIterator"])((elems = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
    return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["collect"])(function (values$$1) {
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value$$2) {
        return value$$2;
      }, values$$1);
    }, this$$$9["entries@24"].values());
  }), Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["getEnumerator"])(elems)));
};

MutableSet$00601.prototype.Add = function (item$$1) {
  const this$$$10 = this;
  const value$$3 = MutableSet$00601$$Add$$2B595(this$$$10, item$$1);
  value$$3, null;
};

MutableSet$00601.prototype.Clear = function () {
  const this$$$11 = this;
  MutableSet$00601$$Clear(this$$$11);
};

MutableSet$00601.prototype.Contains = function (item$$2) {
  const this$$$12 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$12, item$$2);
};

MutableSet$00601.prototype.CopyTo = function (array, arrayIndex) {
  const this$$$13 = this;
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["iterateIndexed"])(function action(i$$8, e) {
    array[arrayIndex + i$$8] = e;
  }, this$$$13);
};

Object.defineProperty(MutableSet$00601.prototype, "Count", {
  "get": function () {
    const this$$$14 = this;
    return MutableSet$00601$$get_Count(this$$$14) | 0;
  }
});
Object.defineProperty(MutableSet$00601.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});

MutableSet$00601.prototype.Remove = function (item$$3) {
  const this$$$16 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$16, item$$3);
};

Object.defineProperty(MutableSet$00601.prototype, "size", {
  "get": function () {
    const this$$$17 = this;
    return MutableSet$00601$$get_Count(this$$$17) | 0;
  }
});

MutableSet$00601.prototype.add = function (k$$5) {
  const this$$$18 = this;
  const value$$4 = MutableSet$00601$$Add$$2B595(this$$$18, k$$5);
  value$$4, null;
  return this$$$18;
};

MutableSet$00601.prototype.add_ = function (k$$6) {
  const this$$$19 = this;
  return MutableSet$00601$$Add$$2B595(this$$$19, k$$6);
};

MutableSet$00601.prototype.clear = function () {
  const this$$$20 = this;
  MutableSet$00601$$Clear(this$$$20);
};

MutableSet$00601.prototype.delete = function (k$$7) {
  const this$$$21 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$21, k$$7);
};

MutableSet$00601.prototype.has = function (k$$8) {
  const this$$$22 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$22, k$$8);
};

MutableSet$00601.prototype.keys = function () {
  const this$$$23 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping(x) {
    return x;
  }, this$$$23);
};

MutableSet$00601.prototype.values = function () {
  const this$$$24 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping$$1(x$$1) {
    return x$$1;
  }, this$$$24);
};

MutableSet$00601.prototype.entries = function () {
  const this$$$25 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping$$2(v$$1) {
    return [v$$1, v$$1];
  }, this$$$25);
};

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Option.js":
/*!***********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Option.js ***!
  \***********************************************/
/*! exports provided: Some, some, value, defaultArg, defaultArgWith, filter, map, mapMultiple, bind, tryOp, Choice, choice1, choice2, tryValueIfChoice1, tryValueIfChoice2, Result, ok, error, mapOk, mapError, bindOk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Some", function() { return Some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultArg", function() { return defaultArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultArgWith", function() { return defaultArgWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMultiple", function() { return mapMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryOp", function() { return tryOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice1", function() { return choice1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice2", function() { return choice2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryValueIfChoice1", function() { return tryValueIfChoice1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryValueIfChoice2", function() { return tryValueIfChoice2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return ok; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOk", function() { return mapOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapError", function() { return mapError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindOk", function() { return bindOk; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.4.11/Util.js");


// Using a class here for better compatibility with TS files importing Some
class Some {
    constructor(value) {
        this.value = value;
    }
    // Don't add "Some" for consistency with erased options
    toString() {
        return String(this.value);
    }
    toJSON() {
        return this.value;
    }
    GetHashCode() {
        return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["structuralHash"])(this.value);
    }
    Equals(other) {
        if (other == null) {
            return false;
        }
        else {
            return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["equals"])(this.value, other instanceof Some ? other.value : other);
        }
    }
    CompareTo(other) {
        if (other == null) {
            return 1;
        }
        else {
            return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["compare"])(this.value, other instanceof Some ? other.value : other);
        }
    }
}
function some(x) {
    x = (x === undefined) ? null : x;
    return x == null || x instanceof Some ? new Some(x) : x;
}
function value(x, acceptNull) {
    if (x == null) {
        if (!acceptNull) {
            throw new Error("Option has no value");
        }
        return null;
    }
    else {
        return x instanceof Some ? x.value : x;
    }
}
function defaultArg(arg, defaultValue, f) {
    return arg == null ? defaultValue : (f != null ? f(value(arg)) : value(arg));
}
function defaultArgWith(arg, defThunk) {
    return arg == null ? defThunk() : value(arg);
}
function filter(predicate, arg) {
    return arg != null ? (!predicate(value(arg)) ? null : arg) : arg;
}
function map(f, arg) {
    return arg == null ? arg : some(f(value(arg)));
}
function mapMultiple(predicate, ...args) {
    return args.every((x) => x != null) ? predicate.apply(null, args) : null;
}
function bind(f, arg) {
    return arg == null ? arg : f(value(arg));
}
function tryOp(op, arg) {
    try {
        return some(op(arg));
    }
    catch (_a) {
        return null;
    }
}
// CHOICE
const Choice = Object(_Types__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Choice(tag, name, field) {
    _Types__WEBPACK_IMPORTED_MODULE_0__["Union"].call(this, tag, name, field);
}, _Types__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function choice1(x) {
    return new Choice(0, "Choice1Of2", x);
}
function choice2(x) {
    return new Choice(1, "Choice2Of2", x);
}
function tryValueIfChoice1(x) {
    return x.tag === 0 ? some(x.fields[0]) : null;
}
function tryValueIfChoice2(x) {
    return x.tag === 1 ? some(x.fields[0]) : null;
}
// RESULT
const Result = Object(_Types__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Result(tag, name, field) {
    _Types__WEBPACK_IMPORTED_MODULE_0__["Union"].call(this, tag, name, field);
}, _Types__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function ok(x) {
    return new Result(0, "Ok", x);
}
function error(x) {
    return new Result(1, "Error", x);
}
function mapOk(f, result) {
    return result.tag === 0 ? ok(f(result.fields[0])) : result;
}
function mapError(f, result) {
    return result.tag === 1 ? error(f(result.fields[0])) : result;
}
function bindOk(f, result) {
    return result.tag === 0 ? f(result.fields[0]) : result;
}
//# sourceMappingURL=Option.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Reflection.js":
/*!***************************************************!*\
  !*** ./.fable/fable-library.2.4.11/Reflection.js ***!
  \***************************************************/
/*! exports provided: CaseInfo, TypeInfo, getGenerics, equals, compare, type, record, anonRecord, union, tuple, delegate, lambda, option, list, array, enumType, obj, unit, char, string, bool, int8, uint8, int16, uint16, int32, uint32, float32, float64, decimal, name, fullName, namespace, isArray, getElementType, isGenericType, isEnum, getGenericTypeDefinition, getEnumUnderlyingType, getEnumValues, getEnumNames, parseEnum, tryParseEnum, getEnumName, isEnumDefined, getUnionCases, getRecordElements, getTupleElements, getFunctionElements, isUnion, isRecord, isTuple, isFunction, getUnionFields, getUnionCaseFields, getRecordFields, getRecordField, getTupleFields, getTupleField, makeUnion, makeRecord, makeTuple, getCaseTag, getCaseName, getCaseFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseInfo", function() { return CaseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return TypeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenerics", function() { return getGenerics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "record", function() { return record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anonRecord", function() { return anonRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lambda", function() { return lambda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option", function() { return option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumType", function() { return enumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj", function() { return obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bool", function() { return bool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int8", function() { return int8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint8", function() { return uint8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int16", function() { return int16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint16", function() { return uint16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int32", function() { return int32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint32", function() { return uint32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float32", function() { return float32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float64", function() { return float64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decimal", function() { return decimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullName", function() { return fullName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementType", function() { return getElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGenericType", function() { return isGenericType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnum", function() { return isEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenericTypeDefinition", function() { return getGenericTypeDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumUnderlyingType", function() { return getEnumUnderlyingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumValues", function() { return getEnumValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumNames", function() { return getEnumNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEnum", function() { return parseEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParseEnum", function() { return tryParseEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumName", function() { return getEnumName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnumDefined", function() { return isEnumDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnionCases", function() { return getUnionCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordElements", function() { return getRecordElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTupleElements", function() { return getTupleElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionElements", function() { return getFunctionElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnion", function() { return isUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRecord", function() { return isRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTuple", function() { return isTuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnionFields", function() { return getUnionFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnionCaseFields", function() { return getUnionCaseFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordFields", function() { return getRecordFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordField", function() { return getRecordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTupleFields", function() { return getTupleFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTupleField", function() { return getTupleField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUnion", function() { return makeUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRecord", function() { return makeRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTuple", function() { return makeTuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaseTag", function() { return getCaseTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaseName", function() { return getCaseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaseFields", function() { return getCaseFields; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.4.11/Util.js");


class CaseInfo {
    constructor(declaringType, tag, name, fields) {
        this.declaringType = declaringType;
        this.tag = tag;
        this.name = name;
        this.fields = fields;
    }
}
class TypeInfo {
    constructor(fullname, generics, constructor, fields, cases, enumCases) {
        this.fullname = fullname;
        this.generics = generics;
        this.constructor = constructor;
        this.fields = fields;
        this.cases = cases;
        this.enumCases = enumCases;
    }
    toString() {
        return fullName(this);
    }
    Equals(other) {
        return equals(this, other);
    }
    CompareTo(other) {
        return compare(this, other);
    }
}
function getGenerics(t) {
    return t.generics != null ? t.generics : [];
}
function equals(t1, t2) {
    if (t1.fullname === "") { // Anonymous records
        return t2.fullname === ""
            && Object(_Util__WEBPACK_IMPORTED_MODULE_1__["equalArraysWith"])(getRecordElements(t1), getRecordElements(t2), ([k1, v1], [k2, v2]) => k1 === k2 && equals(v1, v2));
    }
    else {
        return t1.fullname === t2.fullname
            && Object(_Util__WEBPACK_IMPORTED_MODULE_1__["equalArraysWith"])(getGenerics(t1), getGenerics(t2), equals);
    }
}
// System.Type is not comparable in .NET, but let's implement this
// in case users want to create a dictionary with types as keys
function compare(t1, t2) {
    if (t1.fullname !== t2.fullname) {
        return t1.fullname < t2.fullname ? -1 : 1;
    }
    else {
        return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["compareArraysWith"])(getGenerics(t1), getGenerics(t2), compare);
    }
}
function type(fullname, generics) {
    return new TypeInfo(fullname, generics);
}
function record(fullname, generics, constructor, fields) {
    return new TypeInfo(fullname, generics, constructor, fields);
}
function anonRecord(...fields) {
    return new TypeInfo("", null, null, () => fields);
}
function union(fullname, generics, constructor, cases) {
    const t = new TypeInfo(fullname, generics, constructor, null, () => cases().map((x, i) => typeof x === "string" ? new CaseInfo(t, i, x) : new CaseInfo(t, i, x[0], x[1])));
    return t;
}
function tuple(...generics) {
    return new TypeInfo("System.Tuple`" + generics.length, generics);
}
function delegate(...generics) {
    return new TypeInfo("System.Func`" + generics.length, generics);
}
function lambda(argType, returnType) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpFunc`2", [argType, returnType]);
}
function option(generic) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpOption`1", [generic]);
}
function list(generic) {
    return new TypeInfo("Microsoft.FSharp.Collections.FSharpList`1", [generic]);
}
function array(generic) {
    return new TypeInfo(generic.fullname + "[]", [generic]);
}
function enumType(fullname, underlyingType, enumCases) {
    return new TypeInfo(fullname, [underlyingType], null, null, null, enumCases);
}
const obj = new TypeInfo("System.Object");
const unit = new TypeInfo("Microsoft.FSharp.Core.Unit");
const char = new TypeInfo("System.Char");
const string = new TypeInfo("System.String");
const bool = new TypeInfo("System.Boolean");
const int8 = new TypeInfo("System.SByte");
const uint8 = new TypeInfo("System.Byte");
const int16 = new TypeInfo("System.Int16");
const uint16 = new TypeInfo("System.UInt16");
const int32 = new TypeInfo("System.Int32");
const uint32 = new TypeInfo("System.UInt32");
const float32 = new TypeInfo("System.Single");
const float64 = new TypeInfo("System.Double");
const decimal = new TypeInfo("System.Decimal");
function name(info) {
    if (Array.isArray(info)) {
        return info[0];
    }
    else if (info instanceof CaseInfo) {
        return info.name;
    }
    else {
        const i = info.fullname.lastIndexOf(".");
        return i === -1 ? info.fullname : info.fullname.substr(i + 1);
    }
}
function fullName(t) {
    const gen = t.generics != null && !isArray(t) ? t.generics : [];
    if (gen.length > 0) {
        return t.fullname + "[" + gen.map((x) => fullName(x)).join(",") + "]";
    }
    else {
        return t.fullname;
    }
}
function namespace(t) {
    const i = t.fullname.lastIndexOf(".");
    return i === -1 ? "" : t.fullname.substr(0, i);
}
function isArray(t) {
    return t.fullname.endsWith("[]");
}
function getElementType(t) {
    return isArray(t) ? t.generics[0] : null;
}
function isGenericType(t) {
    return t.generics != null && t.generics.length > 0;
}
function isEnum(t) {
    return t.enumCases != null && t.enumCases.length > 0;
}
/**
 * This doesn't replace types for fields (records) or cases (unions)
 * but it should be enough for type comparison purposes
 */
function getGenericTypeDefinition(t) {
    return t.generics == null ? t : new TypeInfo(t.fullname, t.generics.map(() => obj));
}
function getEnumUnderlyingType(t) {
    return t.generics[0];
}
function getEnumValues(t) {
    if (isEnum(t)) {
        return t.enumCases.map((kv) => kv[1]);
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function getEnumNames(t) {
    if (isEnum(t)) {
        return t.enumCases.map((kv) => kv[0]);
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function getEnumCase(t, v) {
    if (t.enumCases != null) {
        if (typeof v === "string") {
            for (const kv of t.enumCases) {
                if (kv[0] === v) {
                    return kv;
                }
            }
            throw new Error(`'${v}' was not found in ${t.fullname}`);
        }
        else {
            for (const kv of t.enumCases) {
                if (kv[1] === v) {
                    return kv;
                }
            }
            // .NET returns the number even if it doesn't match any of the cases
            return [null, v];
        }
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function parseEnum(t, str) {
    // TODO: better int parsing here, parseInt ceils floats: "4.8" -> 4
    const value = parseInt(str, 10);
    return getEnumCase(t, isNaN(value) ? str : value)[1];
}
function tryParseEnum(t, str) {
    try {
        const v = parseEnum(t, str);
        return [true, v];
    }
    catch (_a) {
        // supress error
    }
    return [false, null];
}
function getEnumName(t, v) {
    return getEnumCase(t, v)[0];
}
function isEnumDefined(t, v) {
    try {
        const kv = getEnumCase(t, v);
        return kv[0] != null;
    }
    catch (_a) {
        // supress error
    }
    return false;
}
// FSharpType
function getUnionCases(t) {
    if (t.cases != null) {
        return t.cases();
    }
    else {
        throw new Error(`${t.fullname} is not an F# union type`);
    }
}
function getRecordElements(t) {
    if (t.fields != null) {
        return t.fields();
    }
    else {
        throw new Error(`${t.fullname} is not an F# record type`);
    }
}
function getTupleElements(t) {
    if (isTuple(t)) {
        return t.generics;
    }
    else {
        throw new Error(`${t.fullname} is not a tuple type`);
    }
}
function getFunctionElements(t) {
    if (isFunction(t)) {
        const gen = t.generics;
        return [gen[0], gen[1]];
    }
    else {
        throw new Error(`${t.fullname} is not an F# function type`);
    }
}
function isUnion(t) {
    return t instanceof TypeInfo ? t.cases != null : t instanceof _Types__WEBPACK_IMPORTED_MODULE_0__["Union"];
}
function isRecord(t) {
    return t instanceof TypeInfo ? t.fields != null : t instanceof _Types__WEBPACK_IMPORTED_MODULE_0__["Record"];
}
function isTuple(t) {
    return t.fullname.startsWith("System.Tuple");
}
// In .NET this is false for delegates
function isFunction(t) {
    return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
}
// FSharpValue
function getUnionFields(v, t) {
    const cases = getUnionCases(t);
    const case_ = cases[v.tag];
    if (case_ == null) {
        throw new Error(`Cannot find case ${v.name} in union type`);
    }
    return [case_, v.fields];
}
function getUnionCaseFields(uci) {
    return uci.fields == null ? [] : uci.fields.map((t, i) => ["Data" + i, t]);
}
function getRecordFields(v) {
    return Object.keys(v).map((k) => v[k]);
}
function getRecordField(v, field) {
    return v[field[0]];
}
function getTupleFields(v) {
    return v;
}
function getTupleField(v, i) {
    return v[i];
}
function makeUnion(uci, values) {
    const expectedLength = (uci.fields || []).length;
    if (values.length !== expectedLength) {
        throw new Error(`Expected an array of length ${expectedLength} but got ${values.length}`);
    }
    return new uci.declaringType.constructor(uci.tag, uci.name, ...values);
}
function makeRecord(t, values) {
    const fields = getRecordElements(t);
    if (fields.length !== values.length) {
        throw new Error(`Expected an array of length ${fields.length} but got ${values.length}`);
    }
    return t.constructor != null
        ? new t.constructor(...values)
        : Object(_Types__WEBPACK_IMPORTED_MODULE_0__["anonRecord"])(fields.reduce((obj, [key, _t], i) => {
            obj[key] = values[i];
            return obj;
        }, {}));
}
function makeTuple(values, t) {
    return values;
}
// Fable.Core.Reflection
function assertUnion(x) {
    if (!(x instanceof _Types__WEBPACK_IMPORTED_MODULE_0__["Union"])) {
        throw new Error(`Value is not an F# union type`);
    }
}
function getCaseTag(x) {
    assertUnion(x);
    return x.tag;
}
function getCaseName(x) {
    assertUnion(x);
    return x.name;
}
function getCaseFields(x) {
    assertUnion(x);
    return x.fields;
}
//# sourceMappingURL=Reflection.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/RegExp.js":
/*!***********************************************!*\
  !*** ./.fable/fable-library.2.4.11/RegExp.js ***!
  \***********************************************/
/*! exports provided: create, escape, unescape, isMatch, match, matches, options, replace, split */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return unescape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return isMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
function create(pattern, options) {
    // Supported RegexOptions
    // * IgnoreCase:  0x0001
    // * Multiline:   0x0002
    // * Singleline:  0x0010
    // * ECMAScript:  0x0100 (ignored)
    if ((options & ~(1 ^ 2 ^ 16 ^ 256)) !== 0) {
        throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");
    }
    let flags = "g";
    flags += options & 1 ? "i" : ""; // 0x0001 RegexOptions.IgnoreCase
    flags += options & 2 ? "m" : "";
    flags += options & 16 ? "s" : "";
    return new RegExp(pattern, flags);
}
// From http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escape(str) {
    return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    if (!reg.global) {
        throw new Error("Non-global RegExp"); // Prevent infinite loop
    }
    let m = reg.exec(str);
    const matches = [];
    while (m !== null) {
        matches.push(m);
        m = reg.exec(str);
    }
    return matches;
}
function options(reg) {
    let options = 256; // ECMAScript
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit, offset = 0) {
    function replacer() {
        let res = arguments[0];
        if (limit !== 0) {
            limit--;
            const match = [];
            const len = arguments.length;
            for (let i = 0; i < len - 2; i++) {
                match.push(arguments[i]);
            }
            match.index = arguments[len - 2];
            match.input = arguments[len - 1];
            res = replacement(match);
        }
        return res;
    }
    if (typeof reg === "string") {
        const tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement === "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    }
    else {
        // $0 doesn't work with JS regex, see #1155
        replacement = replacement.replace(/\$0/g, (s) => "$&");
        if (limit != null) {
            let m;
            const sub1 = input.substring(offset);
            const _matches = matches(reg, sub1);
            const sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement)
                + input.substring(offset + sub2.length);
        }
        else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit, offset = 0) {
    if (typeof reg === "string") {
        const tmp = reg;
        reg = create(input, limit);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}
//# sourceMappingURL=RegExp.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Seq.js":
/*!********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Seq.js ***!
  \********************************************/
/*! exports provided: Enumerator, getEnumerator, toIterator, ofArray, allPairs, append, average, averageBy, concat, collect, choose, compareWith, delay, empty, enumerateFromFunctions, enumerateWhile, enumerateThenFinally, enumerateUsing, exactlyOne, except, exists, exists2, forAll, forAll2, contains, filter, where, fold, foldBack, fold2, foldBack2, tryHead, head, initialize, initializeInfinite, tryItem, item, iterate, iterate2, iterateIndexed, iterateIndexed2, isEmpty, tryLast, last, length, map, mapIndexed, indexed, map2, mapIndexed2, map3, mapFold, mapFoldBack, max, maxBy, min, minBy, pairwise, rangeChar, rangeLong, rangeDecimal, rangeNumber, readOnly, reduce, reduceBack, replicate, reverse, scan, scanBack, singleton, skip, skipWhile, sortWith, sum, sumBy, tail, take, truncate, takeWhile, tryFind, find, tryFindBack, findBack, tryFindIndex, findIndex, tryFindIndexBack, findIndexBack, tryPick, pick, unfold, zip, zip3, windowed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enumerator", function() { return Enumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumerator", function() { return getEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIterator", function() { return toIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofArray", function() { return ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPairs", function() { return allPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return average; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageBy", function() { return averageBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareWith", function() { return compareWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateFromFunctions", function() { return enumerateFromFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateWhile", function() { return enumerateWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateThenFinally", function() { return enumerateThenFinally; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateUsing", function() { return enumerateUsing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactlyOne", function() { return exactlyOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "except", function() { return except; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists2", function() { return exists2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll2", function() { return forAll2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold2", function() { return fold2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack2", function() { return foldBack2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryHead", function() { return tryHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeInfinite", function() { return initializeInfinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryItem", function() { return tryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "item", function() { return item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate2", function() { return iterate2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed", function() { return iterateIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed2", function() { return iterateIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryLast", function() { return tryLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed", function() { return mapIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexed", function() { return indexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map2", function() { return map2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed2", function() { return mapIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map3", function() { return map3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFold", function() { return mapFold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFoldBack", function() { return mapFoldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return maxBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return minBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeChar", function() { return rangeChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeLong", function() { return rangeLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDecimal", function() { return rangeDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeNumber", function() { return rangeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readOnly", function() { return readOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBack", function() { return reduceBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicate", function() { return replicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanBack", function() { return scanBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return sortWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumBy", function() { return sumBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFind", function() { return tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindBack", function() { return tryFindBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBack", function() { return findBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndex", function() { return tryFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndexBack", function() { return tryFindIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexBack", function() { return findIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPick", function() { return tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return unfold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip3", function() { return zip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowed", function() { return windowed; });
/* harmony import */ var _Decimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decimal */ "./.fable/fable-library.2.4.11/Decimal.js");
/* harmony import */ var _Long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Long */ "./.fable/fable-library.2.4.11/Long.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "./.fable/fable-library.2.4.11/Option.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.4.11/Util.js");




class Enumerator {
    constructor(iter) {
        this.iter = iter;
    }
    MoveNext() {
        const cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    }
    get Current() {
        return this.current;
    }
    Reset() {
        throw new Error("JS iterators cannot be reset");
    }
    Dispose() {
        return;
    }
}
function getEnumerator(o) {
    return new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
    return {
        next() {
            return en.MoveNext()
                ? { done: false, value: en.Current }
                : { done: true, value: null };
        },
    };
}
// export function toIterable<T>(en: IEnumerable<T>): Iterable<T> {
//   return {
//     [Symbol.iterator]() {
//       return toIterator(en.GetEnumerator());
//     },
//   };
// }
function __failIfNone(res) {
    if (res == null) {
        throw new Error("Seq did not contain any matching element");
    }
    return Object(_Option__WEBPACK_IMPORTED_MODULE_2__["value"])(res);
}
function ofArray(xs) {
    return delay(() => unfold((i) => i < xs.length ? [xs[i], i + 1] : null, 0));
}
function allPairs(xs, ys) {
    let firstEl = true;
    const ysCache = [];
    return collect((x) => {
        if (firstEl) {
            firstEl = false;
            return map((y) => {
                ysCache.push(y);
                return [x, y];
            }, ys);
        }
        else {
            return ysCache.map((y) => [x, y]);
            // return map(function (i) {
            //     return [x, ysCache[i]];
            // }, rangeNumber(0, 1, ysCache.length - 1));
        }
    }, xs);
}
function append(xs, ys) {
    return delay(() => {
        let firstDone = false;
        const i = xs[Symbol.iterator]();
        let iters = [i, null];
        return unfold(() => {
            let cur;
            if (!firstDone) {
                cur = iters[0].next();
                if (!cur.done) {
                    return [cur.value, iters];
                }
                else {
                    firstDone = true;
                    iters = [null, ys[Symbol.iterator]()];
                }
            }
            cur = iters[1].next();
            return !cur.done ? [cur.value, iters] : null;
        }, iters);
    });
}
function average(xs, averager) {
    let count = 0;
    const total = fold((acc, x) => {
        count++;
        return averager.Add(acc, x);
    }, averager.GetZero(), xs);
    return averager.DivideByInt(total, count);
}
function averageBy(f, xs, averager) {
    let count = 0;
    const total = fold((acc, x) => {
        count++;
        return averager.Add(acc, f(x));
    }, averager.GetZero(), xs);
    return averager.DivideByInt(total, count);
}
function concat(xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        let output = { value: null };
        return unfold((innerIter) => {
            let hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    const cur = iter.next();
                    if (!cur.done) {
                        innerIter = cur.value[Symbol.iterator]();
                    }
                    else {
                        hasFinished = true;
                    }
                }
                else {
                    const cur = innerIter.next();
                    if (!cur.done) {
                        output = { value: cur.value };
                        hasFinished = true;
                    }
                    else {
                        innerIter = null;
                    }
                }
            }
            return innerIter != null && output != null ? [output.value, innerIter] : null;
        }, null);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    return delay(() => unfold((iter) => {
        let cur = iter.next();
        while (!cur.done) {
            const y = f(cur.value);
            if (y != null) {
                return [Object(_Option__WEBPACK_IMPORTED_MODULE_2__["value"])(y), iter];
            }
            cur = iter.next();
        }
        return null;
    }, xs[Symbol.iterator]()));
}
function compareWith(f, xs, ys) {
    const nonZero = tryFind((i) => i !== 0, map2((x, y) => f(x, y), xs, ys));
    return nonZero != null ? Object(_Option__WEBPACK_IMPORTED_MODULE_2__["value"])(nonZero) : length(xs) - length(ys);
}
function delay(f) {
    return {
        [Symbol.iterator]: () => f()[Symbol.iterator](),
    };
}
function empty() {
    return unfold(() => void 0);
}
function enumerateFromFunctions(factory, moveNext, current) {
    return delay(() => unfold((e) => moveNext(e) ? [current(e), e] : null, factory()));
}
function enumerateWhile(cond, xs) {
    return concat(unfold(() => cond() ? [xs, true] : null));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(() => {
        let iter;
        try {
            iter = xs[Symbol.iterator]();
        }
        catch (err) {
            return void 0;
        }
        finally {
            finalFn();
        }
        return unfold((it) => {
            try {
                const cur = it.next();
                return !cur.done ? [cur.value, it] : null;
            }
            catch (err) {
                return void 0;
            }
            finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    let isDisposed = false;
    const disposeOnce = () => {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    }
    catch (err) {
        return void 0;
    }
    finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    const iter = xs[Symbol.iterator]();
    const fst = iter.next();
    if (fst.done) {
        throw new Error("Seq was empty");
    }
    const snd = iter.next();
    if (!snd.done) {
        throw new Error("Seq had multiple items");
    }
    return fst.value;
}
function except(itemsToExclude, source) {
    const exclusionItems = Array.from(itemsToExclude);
    const testIsNotInExclusionItems = (element) => !exclusionItems.some((excludedItem) => Object(_Util__WEBPACK_IMPORTED_MODULE_3__["equals"])(excludedItem, element));
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    let cur;
    for (const iter = xs[Symbol.iterator]();;) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value)) {
            return true;
        }
    }
    return false;
}
function exists2(f, xs, ys) {
    let cur1;
    let cur2;
    for (const iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();;) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        if (f(cur1.value, cur2.value)) {
            return true;
        }
    }
    return false;
}
function forAll(f, xs) {
    return !exists((x) => !f(x), xs);
}
function forAll2(f, xs, ys) {
    return !exists2((x, y) => !f(x, y), xs, ys);
}
function contains(i, xs) {
    return exists((x) => Object(_Util__WEBPACK_IMPORTED_MODULE_3__["equals"])(x, i), xs);
}
function filter(f, xs) {
    return delay(() => unfold((iter) => {
        let cur = iter.next();
        while (!cur.done) {
            if (f(cur.value)) {
                return [cur.value, iter];
            }
            cur = iter.next();
        }
        return null;
    }, xs[Symbol.iterator]()));
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    }
    else {
        let cur;
        for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done) {
                break;
            }
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    const arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    const iter1 = xs[Symbol.iterator]();
    const iter2 = ys[Symbol.iterator]();
    let cur1;
    let cur2;
    for (let i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    const ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    const ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
    for (let i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function tryHead(xs) {
    const iter = xs[Symbol.iterator]();
    const cur = iter.next();
    return cur.done ? null : Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(cur.value);
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(() => unfold((i) => i < n ? [f(i), i + 1] : null, 0));
}
function initializeInfinite(f) {
    return delay(() => unfold((i) => [f(i), i + 1], 0));
}
function tryItem(i, xs) {
    if (i < 0) {
        return null;
    }
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return i < xs.length ? Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(xs[i]) : null;
    }
    for (let j = 0, iter = xs[Symbol.iterator]();; j++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (j === i) {
            return Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(cur.value);
        }
    }
    return null;
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold((_, x) => f(x), null, xs);
}
function iterate2(f, xs, ys) {
    fold2((_, x, y) => f(x, y), null, xs, ys);
}
function iterateIndexed(f, xs) {
    fold((_, x, i) => f(i, x), null, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2((_, x, y, i) => f(i, x, y), null, xs, ys);
}
function isEmpty(xs) {
    const i = xs[Symbol.iterator]();
    return i.next().done;
}
function tryLast(xs) {
    return isEmpty(xs) ? null : Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(reduce((_, x) => x, xs));
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
function length(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs)
        ? xs.length
        : fold((acc, x) => acc + 1, 0, xs);
}
function map(f, xs) {
    return delay(() => unfold((iter) => {
        const cur = iter.next();
        return !cur.done ? [f(cur.value), iter] : null;
    }, xs[Symbol.iterator]()));
}
function mapIndexed(f, xs) {
    return delay(() => {
        let i = 0;
        return unfold((iter) => {
            const cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function indexed(xs) {
    return mapIndexed((i, x) => [i, x], xs);
}
function map2(f, xs, ys) {
    return delay(() => {
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
        });
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(() => {
        let i = 0;
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
        });
    });
}
function map3(f, xs, ys, zs) {
    return delay(() => {
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        const iter3 = zs[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            const cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
        });
    });
}
function mapFold(f, acc, xs, transform) {
    const result = [];
    let r;
    let cur;
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        [r, acc] = f(acc, cur.value);
        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function mapFoldBack(f, xs, acc, transform) {
    const arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    const result = [];
    let r;
    for (let i = arr.length - 1; i >= 0; i--) {
        [r, acc] = f(arr[i], acc);
        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function max(xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util__WEBPACK_IMPORTED_MODULE_3__["compare"];
    return reduce((acc, x) => compareFn(acc, x) === 1 ? acc : x, xs);
}
function maxBy(f, xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util__WEBPACK_IMPORTED_MODULE_3__["compare"];
    return reduce((acc, x) => compareFn(f(acc), f(x)) === 1 ? acc : x, xs);
}
function min(xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util__WEBPACK_IMPORTED_MODULE_3__["compare"];
    return reduce((acc, x) => compareFn(acc, x) === -1 ? acc : x, xs);
}
function minBy(f, xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util__WEBPACK_IMPORTED_MODULE_3__["compare"];
    return reduce((acc, x) => compareFn(f(acc), f(x)) === -1 ? acc : x, xs);
}
function pairwise(xs) {
    return skip(2, scan((last, next) => [last[1], next], [0, 0], xs));
}
function rangeChar(first, last) {
    return delay(() => unfold((x) => x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null, first));
}
function rangeLong(first, step, last, unsigned) {
    const stepFn = Object(_Long__WEBPACK_IMPORTED_MODULE_1__["makeRangeStepFunction"])(step, last, unsigned);
    return delay(() => unfold(stepFn, first));
}
function rangeDecimal(first, step, last) {
    const stepFn = Object(_Decimal__WEBPACK_IMPORTED_MODULE_0__["makeRangeStepFunction"])(step, last);
    return delay(() => unfold(stepFn, first));
}
function rangeNumber(first, step, last) {
    if (step === 0) {
        throw new Error("Step cannot be 0");
    }
    return delay(() => unfold((x) => step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null, first));
}
function readOnly(xs) {
    return map((x) => x, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f);
    }
    const iter = xs[Symbol.iterator]();
    let cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    let acc = cur.value;
    while (true) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    const ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    if (ar.length === 0) {
        throw new Error("Seq was empty");
    }
    let acc = ar[ar.length - 1];
    for (let i = ar.length - 2; i >= 0; i--) {
        acc = f(ar[i], acc, i);
    }
    return acc;
}
function replicate(n, x) {
    return initialize(n, () => x);
}
function reverse(xs) {
    const ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold((acc) => {
            if (acc == null) {
                return [seed, seed];
            }
            const cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return void 0;
        }, null);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan((acc, x) => f(x, acc), seed, reverse(xs)));
}
function singleton(y) {
    return [y];
}
function skip(n, xs) {
    return {
        [Symbol.iterator]: () => {
            const iter = xs[Symbol.iterator]();
            for (let i = 1; i <= n; i++) {
                if (iter.next().done) {
                    throw new Error("Seq has not enough elements");
                }
            }
            return iter;
        },
    };
}
function skipWhile(f, xs) {
    return delay(() => {
        let hasPassed = false;
        return filter((x) => hasPassed || (hasPassed = !f(x)), xs);
    });
}
function sortWith(f, xs) {
    const ys = Array.from(xs);
    return ofArray(ys.sort(f));
}
function sum(xs, adder) {
    return fold((acc, x) => adder.Add(acc, x), adder.GetZero(), xs);
}
function sumBy(f, xs, adder) {
    return fold((acc, x) => adder.Add(acc, f(x)), adder.GetZero(), xs);
}
function tail(xs) {
    const iter = xs[Symbol.iterator]();
    const cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    return {
        [Symbol.iterator]: () => iter,
    };
}
function take(n, xs, truncate = false) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold((i) => {
            if (i < n) {
                const cur = iter.next();
                if (!cur.done) {
                    return [cur.value, i + 1];
                }
                if (!truncate) {
                    throw new Error("Seq has not enough elements");
                }
            }
            return void 0;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold((i) => {
            const cur = iter.next();
            if (!cur.done && f(cur.value)) {
                return [cur.value, null];
            }
            return void 0;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(cur.value);
        }
    }
    return defaultValue === void 0 ? null : Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(defaultValue);
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    const arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return tryFind(f, arr.reverse(), defaultValue);
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return i;
        }
    }
    return null;
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    const arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    for (let i = arr.length - 1; i >= 0; i--) {
        if (f(arr[i], i)) {
            return i;
        }
    }
    return null;
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        const y = f(cur.value, i);
        if (y != null) {
            return y;
        }
    }
    return null;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, fst) {
    return {
        [Symbol.iterator]: () => {
            // Capture a copy of the first value in the closure
            // so the sequence is restarted every time, see #1230
            let acc = fst;
            return {
                next: () => {
                    const res = f(acc);
                    if (res != null) {
                        acc = res[1];
                        return { done: false, value: res[0] };
                    }
                    return { done: true };
                },
            };
        },
    };
}
function zip(xs, ys) {
    return map2((x, y) => [x, y], xs, ys);
}
function zip3(xs, ys, zs) {
    return map3((x, y, z) => [x, y, z], xs, ys, zs);
}
function windowed(windowSize, source) {
    if (windowSize <= 0) {
        throw new Error("windowSize must be positive");
    }
    return {
        [Symbol.iterator]: () => {
            let window = [];
            const iter = source[Symbol.iterator]();
            return {
                next: () => {
                    let cur;
                    while (window.length < windowSize) {
                        if ((cur = iter.next()).done) {
                            return { done: true };
                        }
                        window.push(cur.value);
                    }
                    const value = window;
                    window = window.slice(1);
                    return { done: false, value };
                },
            };
        },
    };
}
//# sourceMappingURL=Seq.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Set.js":
/*!********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Set.js ***!
  \********************************************/
/*! exports provided: SetTree$00601, SetTree$00601$reflection, SetTreeModule$$$countAux, SetTreeModule$$$count, SetTreeModule$$$SetOne, SetTreeModule$$$SetNode, SetTreeModule$$$height, SetTreeModule$$$tolerance, SetTreeModule$$$mk, SetTreeModule$$$rebalance, SetTreeModule$$$add, SetTreeModule$$$balance, SetTreeModule$$$split, SetTreeModule$$$spliceOutSuccessor, SetTreeModule$$$remove, SetTreeModule$$$mem, SetTreeModule$$$iter, SetTreeModule$$$foldBack, SetTreeModule$$$fold, SetTreeModule$$$forall, SetTreeModule$$$exists, SetTreeModule$$$isEmpty, SetTreeModule$$$subset, SetTreeModule$$$psubset, SetTreeModule$$$filterAux, SetTreeModule$$$filter, SetTreeModule$$$diffAux, SetTreeModule$$$diff, SetTreeModule$$$union, SetTreeModule$$$intersectionAux, SetTreeModule$$$intersection, SetTreeModule$$$partition1, SetTreeModule$$$partitionAux, SetTreeModule$$$partition, SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C, SetTreeModule$$$minimumElementAux, SetTreeModule$$$minimumElementOpt, SetTreeModule$$$maximumElementAux, SetTreeModule$$$maximumElementOpt, SetTreeModule$$$minimumElement, SetTreeModule$$$maximumElement, SetTreeModule$002ESetIterator$00601, SetTreeModule$002ESetIterator$00601$reflection, SetTreeModule$$$collapseLHS, SetTreeModule$$$mkIterator, SetTreeModule$$$notStarted, SetTreeModule$$$alreadyFinished, SetTreeModule$$$current, SetTreeModule$$$moveNext, SetTreeModule$002EmkIEnumerator$00601, SetTreeModule$002EmkIEnumerator$00601$reflection, SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56, SetTreeModule$$$mkIEnumerator, SetTreeModule$$$toSeq, SetTreeModule$$$compareStacks, SetTreeModule$$$compare, SetTreeModule$$$choose, SetTreeModule$$$loop, SetTreeModule$$$toList, SetTreeModule$$$copyToArray, SetTreeModule$$$mkFromEnumerator, SetTreeModule$$$ofSeq, SetTreeModule$$$ofArray, FSharpSet, FSharpSet$reflection, FSharpSet$$$$002Ector$$2528C5CB, FSharpSet$$get_Comparer, FSharpSet$$get_Tree, FSharpSet$$Add$$2B595, FSharpSet$$Remove$$2B595, FSharpSet$$get_Count, FSharpSet$$Contains$$2B595, FSharpSet$$Iterate$$5028453F, FSharpSet$$Fold, FSharpSet$$get_IsEmpty, FSharpSet$$Partition$$Z1D55A0D7, FSharpSet$$Filter$$Z1D55A0D7, FSharpSet$$Map$$7597B8F7, FSharpSet$$Exists$$Z1D55A0D7, FSharpSet$$ForAll$$Z1D55A0D7, FSharpSet$$$op_Subtraction, FSharpSet$$$op_Addition, FSharpSet$$$Intersection$$Z3BE9BFE0, FSharpSet$$$IntersectionMany$$Z15B59630, FSharpSet$$$Equality$$Z3BE9BFE0, FSharpSet$$$Compare$$Z3BE9BFE0, FSharpSet$$get_Choose, FSharpSet$$get_MinimumElement, FSharpSet$$get_MaximumElement, FSharpSet$$IsSubsetOf$$6A20B1FF, FSharpSet$$IsSupersetOf$$6A20B1FF, FSharpSet$$IsProperSubsetOf$$6A20B1FF, FSharpSet$$IsProperSupersetOf$$6A20B1FF, isEmpty, contains, add, singleton, remove, union, unionMany, intersect, intersectMany, iterate, empty, forAll, exists, filter, partition, fold, foldBack, map, count, minimumElement, maximumElement, ofList, ofArray, toList, toArray, toSeq, ofSeq, difference, isSubset, isSuperset, isProperSubset, isProperSuperset, minElement, maxElement, createMutable, distinct, distinctBy, unionWith, intersectWith, exceptWith, isSubsetOf, isSupersetOf, isProperSubsetOf, isProperSupersetOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTree$00601", function() { return SetTree$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTree$00601$reflection", function() { return SetTree$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$countAux", function() { return SetTreeModule$$$countAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$count", function() { return SetTreeModule$$$count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$SetOne", function() { return SetTreeModule$$$SetOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$SetNode", function() { return SetTreeModule$$$SetNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$height", function() { return SetTreeModule$$$height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$tolerance", function() { return SetTreeModule$$$tolerance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mk", function() { return SetTreeModule$$$mk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$rebalance", function() { return SetTreeModule$$$rebalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$add", function() { return SetTreeModule$$$add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$balance", function() { return SetTreeModule$$$balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$split", function() { return SetTreeModule$$$split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$spliceOutSuccessor", function() { return SetTreeModule$$$spliceOutSuccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$remove", function() { return SetTreeModule$$$remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mem", function() { return SetTreeModule$$$mem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$iter", function() { return SetTreeModule$$$iter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$foldBack", function() { return SetTreeModule$$$foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$fold", function() { return SetTreeModule$$$fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$forall", function() { return SetTreeModule$$$forall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$exists", function() { return SetTreeModule$$$exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$isEmpty", function() { return SetTreeModule$$$isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$subset", function() { return SetTreeModule$$$subset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$psubset", function() { return SetTreeModule$$$psubset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$filterAux", function() { return SetTreeModule$$$filterAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$filter", function() { return SetTreeModule$$$filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$diffAux", function() { return SetTreeModule$$$diffAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$diff", function() { return SetTreeModule$$$diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$union", function() { return SetTreeModule$$$union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$intersectionAux", function() { return SetTreeModule$$$intersectionAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$intersection", function() { return SetTreeModule$$$intersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$partition1", function() { return SetTreeModule$$$partition1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$partitionAux", function() { return SetTreeModule$$$partitionAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$partition", function() { return SetTreeModule$$$partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C", function() { return SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$minimumElementAux", function() { return SetTreeModule$$$minimumElementAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$minimumElementOpt", function() { return SetTreeModule$$$minimumElementOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$maximumElementAux", function() { return SetTreeModule$$$maximumElementAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$maximumElementOpt", function() { return SetTreeModule$$$maximumElementOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$minimumElement", function() { return SetTreeModule$$$minimumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$maximumElement", function() { return SetTreeModule$$$maximumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002ESetIterator$00601", function() { return SetTreeModule$002ESetIterator$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002ESetIterator$00601$reflection", function() { return SetTreeModule$002ESetIterator$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$collapseLHS", function() { return SetTreeModule$$$collapseLHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mkIterator", function() { return SetTreeModule$$$mkIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$notStarted", function() { return SetTreeModule$$$notStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$alreadyFinished", function() { return SetTreeModule$$$alreadyFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$current", function() { return SetTreeModule$$$current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$moveNext", function() { return SetTreeModule$$$moveNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002EmkIEnumerator$00601", function() { return SetTreeModule$002EmkIEnumerator$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002EmkIEnumerator$00601$reflection", function() { return SetTreeModule$002EmkIEnumerator$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56", function() { return SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mkIEnumerator", function() { return SetTreeModule$$$mkIEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$toSeq", function() { return SetTreeModule$$$toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$compareStacks", function() { return SetTreeModule$$$compareStacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$compare", function() { return SetTreeModule$$$compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$choose", function() { return SetTreeModule$$$choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$loop", function() { return SetTreeModule$$$loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$toList", function() { return SetTreeModule$$$toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$copyToArray", function() { return SetTreeModule$$$copyToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mkFromEnumerator", function() { return SetTreeModule$$$mkFromEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$ofSeq", function() { return SetTreeModule$$$ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$ofArray", function() { return SetTreeModule$$$ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet", function() { return FSharpSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$reflection", function() { return FSharpSet$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$$002Ector$$2528C5CB", function() { return FSharpSet$$$$002Ector$$2528C5CB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_Comparer", function() { return FSharpSet$$get_Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_Tree", function() { return FSharpSet$$get_Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Add$$2B595", function() { return FSharpSet$$Add$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Remove$$2B595", function() { return FSharpSet$$Remove$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_Count", function() { return FSharpSet$$get_Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Contains$$2B595", function() { return FSharpSet$$Contains$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Iterate$$5028453F", function() { return FSharpSet$$Iterate$$5028453F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Fold", function() { return FSharpSet$$Fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_IsEmpty", function() { return FSharpSet$$get_IsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Partition$$Z1D55A0D7", function() { return FSharpSet$$Partition$$Z1D55A0D7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Filter$$Z1D55A0D7", function() { return FSharpSet$$Filter$$Z1D55A0D7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Map$$7597B8F7", function() { return FSharpSet$$Map$$7597B8F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Exists$$Z1D55A0D7", function() { return FSharpSet$$Exists$$Z1D55A0D7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$ForAll$$Z1D55A0D7", function() { return FSharpSet$$ForAll$$Z1D55A0D7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$op_Subtraction", function() { return FSharpSet$$$op_Subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$op_Addition", function() { return FSharpSet$$$op_Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$Intersection$$Z3BE9BFE0", function() { return FSharpSet$$$Intersection$$Z3BE9BFE0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$IntersectionMany$$Z15B59630", function() { return FSharpSet$$$IntersectionMany$$Z15B59630; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$Equality$$Z3BE9BFE0", function() { return FSharpSet$$$Equality$$Z3BE9BFE0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$Compare$$Z3BE9BFE0", function() { return FSharpSet$$$Compare$$Z3BE9BFE0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_Choose", function() { return FSharpSet$$get_Choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_MinimumElement", function() { return FSharpSet$$get_MinimumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_MaximumElement", function() { return FSharpSet$$get_MaximumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$IsSubsetOf$$6A20B1FF", function() { return FSharpSet$$IsSubsetOf$$6A20B1FF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$IsSupersetOf$$6A20B1FF", function() { return FSharpSet$$IsSupersetOf$$6A20B1FF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$IsProperSubsetOf$$6A20B1FF", function() { return FSharpSet$$IsProperSubsetOf$$6A20B1FF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$IsProperSupersetOf$$6A20B1FF", function() { return FSharpSet$$IsProperSupersetOf$$6A20B1FF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionMany", function() { return unionMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectMany", function() { return intersectMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimumElement", function() { return minimumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumElement", function() { return maximumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofList", function() { return ofList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofArray", function() { return ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSeq", function() { return toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofSeq", function() { return ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubset", function() { return isSubset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSuperset", function() { return isSuperset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProperSubset", function() { return isProperSubset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProperSuperset", function() { return isProperSuperset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minElement", function() { return minElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxElement", function() { return maxElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMutable", function() { return createMutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctBy", function() { return distinctBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionWith", function() { return unionWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectWith", function() { return intersectWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exceptWith", function() { return exceptWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubsetOf", function() { return isSubsetOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupersetOf", function() { return isSupersetOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProperSubsetOf", function() { return isProperSubsetOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProperSupersetOf", function() { return isProperSupersetOf; });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reflection.js */ "./.fable/fable-library.2.4.11/Reflection.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.4.11/Option.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.4.11/Seq.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.4.11/Util.js");
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./String.js */ "./.fable/fable-library.2.4.11/String.js");
/* harmony import */ var _MutableSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MutableSet */ "./.fable/fable-library.2.4.11/MutableSet.js");







const SetTree$00601 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Set_SetTree(tag, name, ...fields) {
  _Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"].call(this, tag, name, ...fields);
}, _Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function SetTree$00601$reflection($gen$$3) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union"])("Set.SetTree`1", [$gen$$3], SetTree$00601, () => ["SetEmpty", ["SetNode", [$gen$$3, SetTree$00601$reflection($gen$$3), SetTree$00601$reflection($gen$$3), _Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32"]]], ["SetOne", [$gen$$3]]]);
}
function SetTreeModule$$$countAux($s$$4, $acc$$5) {
  SetTreeModule$$$countAux: while (true) {
    const s = $s$$4,
          acc = $acc$$5;

    switch (s.tag) {
      case 2:
        {
          return acc + 1 | 0;
        }

      case 0:
        {
          return acc | 0;
        }

      default:
        {
          $s$$4 = s.fields[1];
          $acc$$5 = SetTreeModule$$$countAux(s.fields[2], acc + 1);
          continue SetTreeModule$$$countAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$count(s$$1) {
  return SetTreeModule$$$countAux(s$$1, 0);
}
function SetTreeModule$$$SetOne(n) {
  return new SetTree$00601(2, "SetOne", n);
}
function SetTreeModule$$$SetNode(x, l$$1, r$$1, h) {
  return new SetTree$00601(1, "SetNode", x, l$$1, r$$1, h);
}
function SetTreeModule$$$height(t) {
  switch (t.tag) {
    case 2:
      {
        return 1;
      }

    case 1:
      {
        return t.fields[3] | 0;
      }

    default:
      {
        return 0;
      }
  }
}
const SetTreeModule$$$tolerance = 2;
function SetTreeModule$$$mk(l$$2, k, r$$2) {
  var $target$$16;

  if (l$$2.tag === 0) {
    if (r$$2.tag === 0) {
      $target$$16 = 0;
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        return SetTreeModule$$$SetOne(k);
      }

    case 1:
      {
        const hl = SetTreeModule$$$height(l$$2) | 0;
        const hr = SetTreeModule$$$height(r$$2) | 0;
        const m = (hl < hr ? hr : hl) | 0;
        return SetTreeModule$$$SetNode(k, l$$2, r$$2, m + 1);
      }
  }
}
function SetTreeModule$$$rebalance(t1, k$$1, t2) {
  const t1h = SetTreeModule$$$height(t1) | 0;
  const t2h = SetTreeModule$$$height(t2) | 0;

  if (t2h > t1h + SetTreeModule$$$tolerance) {
    if (t2.tag === 1) {
      if (SetTreeModule$$$height(t2.fields[1]) > t1h + 1) {
        if (t2.fields[1].tag === 1) {
          return SetTreeModule$$$mk(SetTreeModule$$$mk(t1, k$$1, t2.fields[1].fields[1]), t2.fields[1].fields[0], SetTreeModule$$$mk(t2.fields[1].fields[2], t2.fields[0], t2.fields[2]));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return SetTreeModule$$$mk(SetTreeModule$$$mk(t1, k$$1, t2.fields[1]), t2.fields[0], t2.fields[2]);
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h > t2h + SetTreeModule$$$tolerance) {
    if (t1.tag === 1) {
      if (SetTreeModule$$$height(t1.fields[2]) > t2h + 1) {
        if (t1.fields[2].tag === 1) {
          return SetTreeModule$$$mk(SetTreeModule$$$mk(t1.fields[1], t1.fields[0], t1.fields[2].fields[1]), t1.fields[2].fields[0], SetTreeModule$$$mk(t1.fields[2].fields[2], k$$1, t2));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return SetTreeModule$$$mk(t1.fields[1], t1.fields[0], SetTreeModule$$$mk(t1.fields[2], k$$1, t2));
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    return SetTreeModule$$$mk(t1, k$$1, t2);
  }
}
function SetTreeModule$$$add(comparer, k$$2, t$$1) {
  switch (t$$1.tag) {
    case 2:
      {
        const c$$1 = comparer.Compare(k$$2, t$$1.fields[0]) | 0;

        if (c$$1 < 0) {
          return SetTreeModule$$$SetNode(k$$2, new SetTree$00601(0, "SetEmpty"), t$$1, 2);
        } else if (c$$1 === 0) {
          return t$$1;
        } else {
          return SetTreeModule$$$SetNode(k$$2, t$$1, new SetTree$00601(0, "SetEmpty"), 2);
        }
      }

    case 0:
      {
        return SetTreeModule$$$SetOne(k$$2);
      }

    default:
      {
        const c = comparer.Compare(k$$2, t$$1.fields[0]) | 0;

        if (c < 0) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$add(comparer, k$$2, t$$1.fields[1]), t$$1.fields[0], t$$1.fields[2]);
        } else if (c === 0) {
          return t$$1;
        } else {
          return SetTreeModule$$$rebalance(t$$1.fields[1], t$$1.fields[0], SetTreeModule$$$add(comparer, k$$2, t$$1.fields[2]));
        }
      }
  }
}
function SetTreeModule$$$balance(comparer$$1, t1$$1, k$$3, t2$$1) {
  var $target$$27, t2$$2, t1$$2, k1, t2$$3, k2$$2, t1$$3, h1, h2, k1$$1, k2$$3, t11, t12, t21, t22;

  if (t1$$1.tag === 2) {
    if (t2$$1.tag === 0) {
      $target$$27 = 1;
      t1$$2 = t1$$1;
    } else if (t2$$1.tag === 2) {
      $target$$27 = 2;
      k1 = t1$$1.fields[0];
      t2$$3 = t2$$1;
    } else {
      $target$$27 = 2;
      k1 = t1$$1.fields[0];
      t2$$3 = t2$$1;
    }
  } else if (t1$$1.tag === 1) {
    if (t2$$1.tag === 2) {
      $target$$27 = 3;
      k2$$2 = t2$$1.fields[0];
      t1$$3 = t1$$1;
    } else if (t2$$1.tag === 1) {
      $target$$27 = 4;
      h1 = t1$$1.fields[3];
      h2 = t2$$1.fields[3];
      k1$$1 = t1$$1.fields[0];
      k2$$3 = t2$$1.fields[0];
      t11 = t1$$1.fields[1];
      t12 = t1$$1.fields[2];
      t21 = t2$$1.fields[1];
      t22 = t2$$1.fields[2];
    } else {
      $target$$27 = 1;
      t1$$2 = t1$$1;
    }
  } else {
    $target$$27 = 0;
    t2$$2 = t2$$1;
  }

  switch ($target$$27) {
    case 0:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, t2$$2);
      }

    case 1:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, t1$$2);
      }

    case 2:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, SetTreeModule$$$add(comparer$$1, k1, t2$$3));
      }

    case 3:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, SetTreeModule$$$add(comparer$$1, k2$$2, t1$$3));
      }

    case 4:
      {
        if (h1 + SetTreeModule$$$tolerance < h2) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$balance(comparer$$1, t1$$1, k$$3, t21), k2$$3, t22);
        } else if (h2 + SetTreeModule$$$tolerance < h1) {
          return SetTreeModule$$$rebalance(t11, k1$$1, SetTreeModule$$$balance(comparer$$1, t12, k$$3, t2$$1));
        } else {
          return SetTreeModule$$$mk(t1$$1, k$$3, t2$$1);
        }
      }
  }
}
function SetTreeModule$$$split(comparer$$2, pivot, t$$2) {
  switch (t$$2.tag) {
    case 2:
      {
        const c$$3 = comparer$$2.Compare(t$$2.fields[0], pivot) | 0;

        if (c$$3 < 0) {
          return [t$$2, false, new SetTree$00601(0, "SetEmpty")];
        } else if (c$$3 === 0) {
          return [new SetTree$00601(0, "SetEmpty"), true, new SetTree$00601(0, "SetEmpty")];
        } else {
          return [new SetTree$00601(0, "SetEmpty"), false, t$$2];
        }
      }

    case 0:
      {
        return [new SetTree$00601(0, "SetEmpty"), false, new SetTree$00601(0, "SetEmpty")];
      }

    default:
      {
        const c$$2 = comparer$$2.Compare(pivot, t$$2.fields[0]) | 0;

        if (c$$2 < 0) {
          const patternInput = SetTreeModule$$$split(comparer$$2, pivot, t$$2.fields[1]);
          return [patternInput[0], patternInput[1], SetTreeModule$$$balance(comparer$$2, patternInput[2], t$$2.fields[0], t$$2.fields[2])];
        } else if (c$$2 === 0) {
          return [t$$2.fields[1], true, t$$2.fields[2]];
        } else {
          const patternInput$$1 = SetTreeModule$$$split(comparer$$2, pivot, t$$2.fields[2]);
          return [SetTreeModule$$$balance(comparer$$2, t$$2.fields[1], t$$2.fields[0], patternInput$$1[0]), patternInput$$1[1], patternInput$$1[2]];
        }
      }
  }
}
function SetTreeModule$$$spliceOutSuccessor(t$$3) {
  switch (t$$3.tag) {
    case 2:
      {
        return [t$$3.fields[0], new SetTree$00601(0, "SetEmpty")];
      }

    case 1:
      {
        if (t$$3.fields[1].tag === 0) {
          return [t$$3.fields[0], t$$3.fields[2]];
        } else {
          const patternInput$$2 = SetTreeModule$$$spliceOutSuccessor(t$$3.fields[1]);
          return [patternInput$$2[0], SetTreeModule$$$mk(patternInput$$2[1], t$$3.fields[0], t$$3.fields[2])];
        }
      }

    default:
      {
        throw new Error("internal error: Set.spliceOutSuccessor");
      }
  }
}
function SetTreeModule$$$remove(comparer$$3, k$$4, t$$4) {
  switch (t$$4.tag) {
    case 2:
      {
        const c$$4 = comparer$$3.Compare(k$$4, t$$4.fields[0]) | 0;

        if (c$$4 === 0) {
          return new SetTree$00601(0, "SetEmpty");
        } else {
          return t$$4;
        }
      }

    case 1:
      {
        const c$$5 = comparer$$3.Compare(k$$4, t$$4.fields[0]) | 0;

        if (c$$5 < 0) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$remove(comparer$$3, k$$4, t$$4.fields[1]), t$$4.fields[0], t$$4.fields[2]);
        } else if (c$$5 === 0) {
          if (t$$4.fields[1].tag === 0) {
            return t$$4.fields[2];
          } else if (t$$4.fields[2].tag === 0) {
            return t$$4.fields[1];
          } else {
            const patternInput$$3 = SetTreeModule$$$spliceOutSuccessor(t$$4.fields[2]);
            return SetTreeModule$$$mk(t$$4.fields[1], patternInput$$3[0], patternInput$$3[1]);
          }
        } else {
          return SetTreeModule$$$rebalance(t$$4.fields[1], t$$4.fields[0], SetTreeModule$$$remove(comparer$$3, k$$4, t$$4.fields[2]));
        }
      }

    default:
      {
        return t$$4;
      }
  }
}
function SetTreeModule$$$mem($comparer$$4$$35, $k$$5$$36, $t$$5$$37) {
  SetTreeModule$$$mem: while (true) {
    const comparer$$4 = $comparer$$4$$35,
          k$$5 = $k$$5$$36,
          t$$5 = $t$$5$$37;

    switch (t$$5.tag) {
      case 2:
        {
          return comparer$$4.Compare(k$$5, t$$5.fields[0]) === 0;
        }

      case 0:
        {
          return false;
        }

      default:
        {
          const c$$6 = comparer$$4.Compare(k$$5, t$$5.fields[0]) | 0;

          if (c$$6 < 0) {
            $comparer$$4$$35 = comparer$$4;
            $k$$5$$36 = k$$5;
            $t$$5$$37 = t$$5.fields[1];
            continue SetTreeModule$$$mem;
          } else if (c$$6 === 0) {
            return true;
          } else {
            $comparer$$4$$35 = comparer$$4;
            $k$$5$$36 = k$$5;
            $t$$5$$37 = t$$5.fields[2];
            continue SetTreeModule$$$mem;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$iter($f$$38, $t$$6$$39) {
  SetTreeModule$$$iter: while (true) {
    const f = $f$$38,
          t$$6 = $t$$6$$39;

    switch (t$$6.tag) {
      case 2:
        {
          f(t$$6.fields[0]);
          break;
        }

      case 0:
        {
          break;
        }

      default:
        {
          SetTreeModule$$$iter(f, t$$6.fields[1]);
          f(t$$6.fields[0]);
          $f$$38 = f;
          $t$$6$$39 = t$$6.fields[2];
          continue SetTreeModule$$$iter;
        }
    }

    break;
  }
}
function SetTreeModule$$$foldBack($f$$1$$40, $m$$1$$41, $x$$1$$42) {
  SetTreeModule$$$foldBack: while (true) {
    const f$$1 = $f$$1$$40,
          m$$1 = $m$$1$$41,
          x$$1 = $x$$1$$42;

    switch (m$$1.tag) {
      case 2:
        {
          return f$$1(m$$1.fields[0], x$$1);
        }

      case 0:
        {
          return x$$1;
        }

      default:
        {
          $f$$1$$40 = f$$1;
          $m$$1$$41 = m$$1.fields[1];
          $x$$1$$42 = f$$1(m$$1.fields[0], SetTreeModule$$$foldBack(f$$1, m$$1.fields[2], x$$1));
          continue SetTreeModule$$$foldBack;
        }
    }

    break;
  }
}
function SetTreeModule$$$fold($f$$2$$43, $x$$2$$44, $m$$2$$45) {
  SetTreeModule$$$fold: while (true) {
    const f$$2 = $f$$2$$43,
          x$$2 = $x$$2$$44,
          m$$2 = $m$$2$$45;

    switch (m$$2.tag) {
      case 2:
        {
          return f$$2(x$$2, m$$2.fields[0]);
        }

      case 0:
        {
          return x$$2;
        }

      default:
        {
          const x$$3 = SetTreeModule$$$fold(f$$2, x$$2, m$$2.fields[1]);
          const x$$4 = f$$2(x$$3, m$$2.fields[0]);
          $f$$2$$43 = f$$2;
          $x$$2$$44 = x$$4;
          $m$$2$$45 = m$$2.fields[2];
          continue SetTreeModule$$$fold;
        }
    }

    break;
  }
}
function SetTreeModule$$$forall($f$$3$$46, $m$$3$$47) {
  SetTreeModule$$$forall: while (true) {
    const f$$3 = $f$$3$$46,
          m$$3 = $m$$3$$47;

    switch (m$$3.tag) {
      case 2:
        {
          return f$$3(m$$3.fields[0]);
        }

      case 0:
        {
          return true;
        }

      default:
        {
          if (f$$3(m$$3.fields[0]) ? SetTreeModule$$$forall(f$$3, m$$3.fields[1]) : false) {
            $f$$3$$46 = f$$3;
            $m$$3$$47 = m$$3.fields[2];
            continue SetTreeModule$$$forall;
          } else {
            return false;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$exists($f$$4$$48, $m$$4$$49) {
  SetTreeModule$$$exists: while (true) {
    const f$$4 = $f$$4$$48,
          m$$4 = $m$$4$$49;

    switch (m$$4.tag) {
      case 2:
        {
          return f$$4(m$$4.fields[0]);
        }

      case 0:
        {
          return false;
        }

      default:
        {
          if (f$$4(m$$4.fields[0]) ? true : SetTreeModule$$$exists(f$$4, m$$4.fields[1])) {
            return true;
          } else {
            $f$$4$$48 = f$$4;
            $m$$4$$49 = m$$4.fields[2];
            continue SetTreeModule$$$exists;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$isEmpty(m$$5) {
  if (m$$5.tag === 0) {
    return true;
  } else {
    return false;
  }
}
function SetTreeModule$$$subset(comparer$$5, a, b) {
  return SetTreeModule$$$forall(function (x$$5) {
    return SetTreeModule$$$mem(comparer$$5, x$$5, b);
  }, a);
}
function SetTreeModule$$$psubset(comparer$$6, a$$1, b$$1) {
  if (SetTreeModule$$$forall(function (x$$6) {
    return SetTreeModule$$$mem(comparer$$6, x$$6, b$$1);
  }, a$$1)) {
    return SetTreeModule$$$exists(function (x$$7) {
      return !SetTreeModule$$$mem(comparer$$6, x$$7, a$$1);
    }, b$$1);
  } else {
    return false;
  }
}
function SetTreeModule$$$filterAux($comparer$$7$$57, $f$$5$$58, $s$$2$$59, $acc$$1$$60) {
  SetTreeModule$$$filterAux: while (true) {
    const comparer$$7 = $comparer$$7$$57,
          f$$5 = $f$$5$$58,
          s$$2 = $s$$2$$59,
          acc$$1 = $acc$$1$$60;

    switch (s$$2.tag) {
      case 2:
        {
          if (f$$5(s$$2.fields[0])) {
            return SetTreeModule$$$add(comparer$$7, s$$2.fields[0], acc$$1);
          } else {
            return acc$$1;
          }
        }

      case 0:
        {
          return acc$$1;
        }

      default:
        {
          const acc$$2 = f$$5(s$$2.fields[0]) ? SetTreeModule$$$add(comparer$$7, s$$2.fields[0], acc$$1) : acc$$1;
          $comparer$$7$$57 = comparer$$7;
          $f$$5$$58 = f$$5;
          $s$$2$$59 = s$$2.fields[1];
          $acc$$1$$60 = SetTreeModule$$$filterAux(comparer$$7, f$$5, s$$2.fields[2], acc$$2);
          continue SetTreeModule$$$filterAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$filter(comparer$$8, f$$6, s$$3) {
  return SetTreeModule$$$filterAux(comparer$$8, f$$6, s$$3, new SetTree$00601(0, "SetEmpty"));
}
function SetTreeModule$$$diffAux($comparer$$9$$64, $m$$6$$65, $acc$$3$$66) {
  SetTreeModule$$$diffAux: while (true) {
    const comparer$$9 = $comparer$$9$$64,
          m$$6 = $m$$6$$65,
          acc$$3 = $acc$$3$$66;

    switch (m$$6.tag) {
      case 2:
        {
          return SetTreeModule$$$remove(comparer$$9, m$$6.fields[0], acc$$3);
        }

      case 0:
        {
          return acc$$3;
        }

      default:
        {
          $comparer$$9$$64 = comparer$$9;
          $m$$6$$65 = m$$6.fields[1];
          $acc$$3$$66 = SetTreeModule$$$diffAux(comparer$$9, m$$6.fields[2], SetTreeModule$$$remove(comparer$$9, m$$6.fields[0], acc$$3));
          continue SetTreeModule$$$diffAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$diff(comparer$$10, a$$2, b$$2) {
  return SetTreeModule$$$diffAux(comparer$$10, b$$2, a$$2);
}
function SetTreeModule$$$union(comparer$$11, t1$$4, t2$$4) {
  var $target$$73, h1$$1, h2$$1, k1$$4, k2$$16, t11$$2, t12$$2, t21$$1, t22$$1, t$$7, t$$8, k1$$5, t2$$5, k2$$17, t1$$5;

  if (t1$$4.tag === 0) {
    $target$$73 = 1;
    t$$7 = t2$$4;
  } else if (t1$$4.tag === 2) {
    if (t2$$4.tag === 0) {
      $target$$73 = 2;
      t$$8 = t1$$4;
    } else if (t2$$4.tag === 2) {
      $target$$73 = 3;
      k1$$5 = t1$$4.fields[0];
      t2$$5 = t2$$4;
    } else {
      $target$$73 = 3;
      k1$$5 = t1$$4.fields[0];
      t2$$5 = t2$$4;
    }
  } else if (t2$$4.tag === 0) {
    $target$$73 = 2;
    t$$8 = t1$$4;
  } else if (t2$$4.tag === 2) {
    $target$$73 = 4;
    k2$$17 = t2$$4.fields[0];
    t1$$5 = t1$$4;
  } else {
    $target$$73 = 0;
    h1$$1 = t1$$4.fields[3];
    h2$$1 = t2$$4.fields[3];
    k1$$4 = t1$$4.fields[0];
    k2$$16 = t2$$4.fields[0];
    t11$$2 = t1$$4.fields[1];
    t12$$2 = t1$$4.fields[2];
    t21$$1 = t2$$4.fields[1];
    t22$$1 = t2$$4.fields[2];
  }

  switch ($target$$73) {
    case 0:
      {
        if (h1$$1 > h2$$1) {
          const patternInput$$4 = SetTreeModule$$$split(comparer$$11, k1$$4, t2$$4);
          return SetTreeModule$$$balance(comparer$$11, SetTreeModule$$$union(comparer$$11, t11$$2, patternInput$$4[0]), k1$$4, SetTreeModule$$$union(comparer$$11, t12$$2, patternInput$$4[2]));
        } else {
          const patternInput$$5 = SetTreeModule$$$split(comparer$$11, k2$$16, t1$$4);
          return SetTreeModule$$$balance(comparer$$11, SetTreeModule$$$union(comparer$$11, t21$$1, patternInput$$5[0]), k2$$16, SetTreeModule$$$union(comparer$$11, t22$$1, patternInput$$5[2]));
        }
      }

    case 1:
      {
        return t$$7;
      }

    case 2:
      {
        return t$$8;
      }

    case 3:
      {
        return SetTreeModule$$$add(comparer$$11, k1$$5, t2$$5);
      }

    case 4:
      {
        return SetTreeModule$$$add(comparer$$11, k2$$17, t1$$5);
      }
  }
}
function SetTreeModule$$$intersectionAux($comparer$$12$$74, $b$$3$$75, $m$$7$$76, $acc$$4$$77) {
  SetTreeModule$$$intersectionAux: while (true) {
    const comparer$$12 = $comparer$$12$$74,
          b$$3 = $b$$3$$75,
          m$$7 = $m$$7$$76,
          acc$$4 = $acc$$4$$77;

    switch (m$$7.tag) {
      case 2:
        {
          if (SetTreeModule$$$mem(comparer$$12, m$$7.fields[0], b$$3)) {
            return SetTreeModule$$$add(comparer$$12, m$$7.fields[0], acc$$4);
          } else {
            return acc$$4;
          }
        }

      case 0:
        {
          return acc$$4;
        }

      default:
        {
          const acc$$5 = SetTreeModule$$$intersectionAux(comparer$$12, b$$3, m$$7.fields[2], acc$$4);
          const acc$$6 = SetTreeModule$$$mem(comparer$$12, m$$7.fields[0], b$$3) ? SetTreeModule$$$add(comparer$$12, m$$7.fields[0], acc$$5) : acc$$5;
          $comparer$$12$$74 = comparer$$12;
          $b$$3$$75 = b$$3;
          $m$$7$$76 = m$$7.fields[1];
          $acc$$4$$77 = acc$$6;
          continue SetTreeModule$$$intersectionAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$intersection(comparer$$13, a$$3, b$$4) {
  return SetTreeModule$$$intersectionAux(comparer$$13, b$$4, a$$3, new SetTree$00601(0, "SetEmpty"));
}
function SetTreeModule$$$partition1(comparer$$14, f$$7, k$$16, acc1, acc2) {
  if (f$$7(k$$16)) {
    return [SetTreeModule$$$add(comparer$$14, k$$16, acc1), acc2];
  } else {
    return [acc1, SetTreeModule$$$add(comparer$$14, k$$16, acc2)];
  }
}
function SetTreeModule$$$partitionAux($comparer$$15$$86, $f$$8$$87, $s$$4$$88, $acc_0$$89, $acc_1$$90) {
  SetTreeModule$$$partitionAux: while (true) {
    const comparer$$15 = $comparer$$15$$86,
          f$$8 = $f$$8$$87,
          s$$4 = $s$$4$$88,
          acc_0 = $acc_0$$89,
          acc_1 = $acc_1$$90;

    switch (s$$4.tag) {
      case 2:
        {
          return SetTreeModule$$$partition1(comparer$$15, f$$8, s$$4.fields[0], acc_0, acc_1);
        }

      case 0:
        {
          return [acc_0, acc_1];
        }

      default:
        {
          const acc$$8 = SetTreeModule$$$partitionAux(comparer$$15, f$$8, s$$4.fields[2], acc_0, acc_1);
          const acc$$9 = SetTreeModule$$$partition1(comparer$$15, f$$8, s$$4.fields[0], acc$$8[0], acc$$8[1]);
          $comparer$$15$$86 = comparer$$15;
          $f$$8$$87 = f$$8;
          $s$$4$$88 = s$$4.fields[1];
          $acc_0$$89 = acc$$9[0];
          $acc_1$$90 = acc$$9[1];
          continue SetTreeModule$$$partitionAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$partition(comparer$$16, f$$9, s$$5) {
  const seed = [new SetTree$00601(0, "SetEmpty"), new SetTree$00601(0, "SetEmpty")];
  return SetTreeModule$$$partitionAux(comparer$$16, f$$9, s$$5, seed[0], seed[1]);
}
function SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C(s$$6) {
  switch (s$$6.tag) {
    case 2:
      {
        return new _Option_js__WEBPACK_IMPORTED_MODULE_2__["Choice"](0, "Choice1Of2", [s$$6.fields[0], new SetTree$00601(0, "SetEmpty"), new SetTree$00601(0, "SetEmpty")]);
      }

    case 0:
      {
        return new _Option_js__WEBPACK_IMPORTED_MODULE_2__["Choice"](1, "Choice2Of2", null);
      }

    default:
      {
        return new _Option_js__WEBPACK_IMPORTED_MODULE_2__["Choice"](0, "Choice1Of2", [s$$6.fields[0], s$$6.fields[1], s$$6.fields[2]]);
      }
  }
}
function SetTreeModule$$$minimumElementAux($s$$7$$95, $n$$1$$96) {
  SetTreeModule$$$minimumElementAux: while (true) {
    const s$$7 = $s$$7$$95,
          n$$1 = $n$$1$$96;

    switch (s$$7.tag) {
      case 2:
        {
          return s$$7.fields[0];
        }

      case 0:
        {
          return n$$1;
        }

      default:
        {
          $s$$7$$95 = s$$7.fields[1];
          $n$$1$$96 = s$$7.fields[0];
          continue SetTreeModule$$$minimumElementAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$minimumElementOpt(s$$8) {
  switch (s$$8.tag) {
    case 2:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(s$$8.fields[0]);
      }

    case 0:
      {
        return null;
      }

    default:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(SetTreeModule$$$minimumElementAux(s$$8.fields[1], s$$8.fields[0]));
      }
  }
}
function SetTreeModule$$$maximumElementAux($s$$9$$98, $n$$2$$99) {
  SetTreeModule$$$maximumElementAux: while (true) {
    const s$$9 = $s$$9$$98,
          n$$2 = $n$$2$$99;

    switch (s$$9.tag) {
      case 2:
        {
          return s$$9.fields[0];
        }

      case 0:
        {
          return n$$2;
        }

      default:
        {
          $s$$9$$98 = s$$9.fields[2];
          $n$$2$$99 = s$$9.fields[0];
          continue SetTreeModule$$$maximumElementAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$maximumElementOpt(s$$10) {
  switch (s$$10.tag) {
    case 2:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(s$$10.fields[0]);
      }

    case 0:
      {
        return null;
      }

    default:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(SetTreeModule$$$maximumElementAux(s$$10.fields[2], s$$10.fields[0]));
      }
  }
}
function SetTreeModule$$$minimumElement(s$$11) {
  const matchValue$$4 = SetTreeModule$$$minimumElementOpt(s$$11);

  if (matchValue$$4 == null) {
    throw new Error("Set contains no elements");
  } else {
    const k$$27 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(matchValue$$4);
    return k$$27;
  }
}
function SetTreeModule$$$maximumElement(s$$12) {
  const matchValue$$5 = SetTreeModule$$$maximumElementOpt(s$$12);

  if (matchValue$$5 == null) {
    throw new Error("Set contains no elements");
  } else {
    const k$$28 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(matchValue$$5);
    return k$$28;
  }
}
const SetTreeModule$002ESetIterator$00601 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Set_SetTreeModule_SetIterator(arg1, arg2) {
  this.stack = arg1;
  this.started = arg2;
}, _Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function SetTreeModule$002ESetIterator$00601$reflection($gen$$103) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record"])("Set.SetTreeModule.SetIterator`1", [$gen$$103], SetTreeModule$002ESetIterator$00601, () => [["stack", Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["list"])(SetTree$00601$reflection($gen$$103))], ["started", _Reflection_js__WEBPACK_IMPORTED_MODULE_1__["bool"]]]);
}
function SetTreeModule$$$collapseLHS($stack$$104) {
  SetTreeModule$$$collapseLHS: while (true) {
    const stack = $stack$$104;

    if (stack.tail != null) {
      if (stack.head.tag === 2) {
        return stack;
      } else if (stack.head.tag === 1) {
        $stack$$104 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](stack.head.fields[1], new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetOne(stack.head.fields[0]), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](stack.head.fields[2], stack.tail)));
        continue SetTreeModule$$$collapseLHS;
      } else {
        $stack$$104 = stack.tail;
        continue SetTreeModule$$$collapseLHS;
      }
    } else {
      return new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]();
    }

    break;
  }
}
function SetTreeModule$$$mkIterator(s$$13) {
  return new SetTreeModule$002ESetIterator$00601(SetTreeModule$$$collapseLHS(new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](s$$13, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]())), false);
}
function SetTreeModule$$$notStarted() {
  throw new Error("Enumeration not started");
}
function SetTreeModule$$$alreadyFinished() {
  throw new Error("Enumeration already started");
}
function SetTreeModule$$$current(i) {
  if (i.started) {
    const matchValue$$6 = i.stack;

    if (matchValue$$6.tail == null) {
      return SetTreeModule$$$alreadyFinished();
    } else if (matchValue$$6.head.tag === 2) {
      return matchValue$$6.head.fields[0];
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
  } else {
    return SetTreeModule$$$notStarted();
  }
}
function SetTreeModule$$$moveNext(i$$1) {
  if (i$$1.started) {
    const matchValue$$7 = i$$1.stack;

    if (matchValue$$7.tail == null) {
      return false;
    } else if (matchValue$$7.head.tag === 2) {
      i$$1.stack = SetTreeModule$$$collapseLHS(matchValue$$7.tail);
      return !(i$$1.stack.tail == null);
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
    }
  } else {
    i$$1.started = true;
    return !(i$$1.stack.tail == null);
  }
}
const SetTreeModule$002EmkIEnumerator$00601 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Set_SetTreeModule_mkIEnumerator(s$$14) {
  const $this$$1 = this;
  $this$$1.s = s$$14;
  $this$$1.i = SetTreeModule$$$mkIterator($this$$1.s);
});
function SetTreeModule$002EmkIEnumerator$00601$reflection($gen$$108) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["type"])("Set.SetTreeModule.mkIEnumerator`1", [$gen$$108]);
}
function SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56(s$$14) {
  return this instanceof SetTreeModule$002EmkIEnumerator$00601 ? SetTreeModule$002EmkIEnumerator$00601.call(this, s$$14) : new SetTreeModule$002EmkIEnumerator$00601(s$$14);
}
Object.defineProperty(SetTreeModule$002EmkIEnumerator$00601.prototype, "Current", {
  "get": function () {
    const __ = this;
    return SetTreeModule$$$current(__.i);
  }
});

SetTreeModule$002EmkIEnumerator$00601.prototype.MoveNext = function () {
  const __$$1 = this;
  return SetTreeModule$$$moveNext(__$$1.i);
};

SetTreeModule$002EmkIEnumerator$00601.prototype.Reset = function () {
  const __$$2 = this;
  __$$2.i = SetTreeModule$$$mkIterator(__$$2.s);
};

SetTreeModule$002EmkIEnumerator$00601.prototype.Dispose = function () {};

function SetTreeModule$$$mkIEnumerator(s$$15) {
  return SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56(s$$15);
}
function SetTreeModule$$$toSeq(s$$16) {
  const en = SetTreeModule$$$mkIEnumerator(s$$16);
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["unfold"])(function generator(en$$1) {
    if (en$$1.MoveNext()) {
      return [en$$1.Current, en$$1];
    } else {
      return null;
    }
  }, en);
}
function SetTreeModule$$$compareStacks($comparer$$17$$112, $l1$$113, $l2$$114) {
  SetTreeModule$$$compareStacks: while (true) {
    const comparer$$17 = $comparer$$17$$112,
          l1 = $l1$$113,
          l2 = $l2$$114;
    var $target$$115, t1$$6, t2$$6, n1k, n2k, t1$$7, t2$$7, n1k$$1, n2k$$1, n2r, t1$$8, t2$$8, emp, n1k$$2, n1r, n2k$$2, t1$$9, t2$$9, n1k$$3, n1r$$1, n2k$$3, n2r$$1, t1$$10, t2$$10, n1k$$4, t1$$11, n1k$$5, n1l, n1r$$2, t1$$12, n2k$$4, t2$$11, n2k$$5, n2l, n2r$$2, t2$$12;

    if (l1.tail != null) {
      if (l2.tail != null) {
        if (l2.head.tag === 2) {
          if (l1.head.tag === 2) {
            $target$$115 = 4;
            n1k = l1.head.fields[0];
            n2k = l2.head.fields[0];
            t1$$7 = l1.tail;
            t2$$7 = l2.tail;
          } else if (l1.head.tag === 1) {
            if (l1.head.fields[1].tag === 0) {
              $target$$115 = 6;
              emp = l1.head.fields[1];
              n1k$$2 = l1.head.fields[0];
              n1r = l1.head.fields[2];
              n2k$$2 = l2.head.fields[0];
              t1$$9 = l1.tail;
              t2$$9 = l2.tail;
            } else {
              $target$$115 = 9;
              n1k$$5 = l1.head.fields[0];
              n1l = l1.head.fields[1];
              n1r$$2 = l1.head.fields[2];
              t1$$12 = l1.tail;
            }
          } else {
            $target$$115 = 10;
            n2k$$4 = l2.head.fields[0];
            t2$$11 = l2.tail;
          }
        } else if (l2.head.tag === 1) {
          if (l2.head.fields[1].tag === 0) {
            if (l1.head.tag === 2) {
              $target$$115 = 5;
              n1k$$1 = l1.head.fields[0];
              n2k$$1 = l2.head.fields[0];
              n2r = l2.head.fields[2];
              t1$$8 = l1.tail;
              t2$$8 = l2.tail;
            } else if (l1.head.tag === 1) {
              if (l1.head.fields[1].tag === 0) {
                $target$$115 = 7;
                n1k$$3 = l1.head.fields[0];
                n1r$$1 = l1.head.fields[2];
                n2k$$3 = l2.head.fields[0];
                n2r$$1 = l2.head.fields[2];
                t1$$10 = l1.tail;
                t2$$10 = l2.tail;
              } else {
                $target$$115 = 9;
                n1k$$5 = l1.head.fields[0];
                n1l = l1.head.fields[1];
                n1r$$2 = l1.head.fields[2];
                t1$$12 = l1.tail;
              }
            } else {
              $target$$115 = 11;
              n2k$$5 = l2.head.fields[0];
              n2l = l2.head.fields[1];
              n2r$$2 = l2.head.fields[2];
              t2$$12 = l2.tail;
            }
          } else if (l1.head.tag === 2) {
            $target$$115 = 8;
            n1k$$4 = l1.head.fields[0];
            t1$$11 = l1.tail;
          } else if (l1.head.tag === 1) {
            $target$$115 = 9;
            n1k$$5 = l1.head.fields[0];
            n1l = l1.head.fields[1];
            n1r$$2 = l1.head.fields[2];
            t1$$12 = l1.tail;
          } else {
            $target$$115 = 11;
            n2k$$5 = l2.head.fields[0];
            n2l = l2.head.fields[1];
            n2r$$2 = l2.head.fields[2];
            t2$$12 = l2.tail;
          }
        } else if (l1.head.tag === 2) {
          $target$$115 = 8;
          n1k$$4 = l1.head.fields[0];
          t1$$11 = l1.tail;
        } else if (l1.head.tag === 1) {
          $target$$115 = 9;
          n1k$$5 = l1.head.fields[0];
          n1l = l1.head.fields[1];
          n1r$$2 = l1.head.fields[2];
          t1$$12 = l1.tail;
        } else {
          $target$$115 = 3;
          t1$$6 = l1.tail;
          t2$$6 = l2.tail;
        }
      } else {
        $target$$115 = 2;
      }
    } else if (l2.tail != null) {
      $target$$115 = 1;
    } else {
      $target$$115 = 0;
    }

    switch ($target$$115) {
      case 0:
        {
          return 0;
        }

      case 1:
        {
          return -1 | 0;
        }

      case 2:
        {
          return 1;
        }

      case 3:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = t1$$6;
          $l2$$114 = t2$$6;
          continue SetTreeModule$$$compareStacks;
        }

      case 4:
        {
          const c$$7 = comparer$$17.Compare(n1k, n2k) | 0;

          if (c$$7 !== 0) {
            return c$$7 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = t1$$7;
            $l2$$114 = t2$$7;
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 5:
        {
          const c$$8 = comparer$$17.Compare(n1k$$1, n2k$$1) | 0;

          if (c$$8 !== 0) {
            return c$$8 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](new SetTree$00601(0, "SetEmpty"), t1$$8);
            $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n2r, t2$$8);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 6:
        {
          const c$$9 = comparer$$17.Compare(n1k$$2, n2k$$2) | 0;

          if (c$$9 !== 0) {
            return c$$9 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n1r, t1$$9);
            $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](emp, t2$$9);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 7:
        {
          const c$$10 = comparer$$17.Compare(n1k$$3, n2k$$3) | 0;

          if (c$$10 !== 0) {
            return c$$10 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n1r$$1, t1$$10);
            $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n2r$$1, t2$$10);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 8:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](new SetTree$00601(0, "SetEmpty"), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetOne(n1k$$4), t1$$11));
          $l2$$114 = l2;
          continue SetTreeModule$$$compareStacks;
        }

      case 9:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n1l, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetNode(n1k$$5, new SetTree$00601(0, "SetEmpty"), n1r$$2, 0), t1$$12));
          $l2$$114 = l2;
          continue SetTreeModule$$$compareStacks;
        }

      case 10:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = l1;
          $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](new SetTree$00601(0, "SetEmpty"), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetOne(n2k$$4), t2$$11));
          continue SetTreeModule$$$compareStacks;
        }

      case 11:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = l1;
          $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n2l, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetNode(n2k$$5, new SetTree$00601(0, "SetEmpty"), n2r$$2, 0), t2$$12));
          continue SetTreeModule$$$compareStacks;
        }
    }

    break;
  }
}
function SetTreeModule$$$compare(comparer$$18, s1, s2) {
  if (s1.tag === 0) {
    if (s2.tag === 0) {
      return 0;
    } else {
      return -1 | 0;
    }
  } else if (s2.tag === 0) {
    return 1;
  } else {
    return SetTreeModule$$$compareStacks(comparer$$18, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](s1, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]()), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](s2, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]())) | 0;
  }
}
function SetTreeModule$$$choose(s$$17) {
  return SetTreeModule$$$minimumElement(s$$17);
}
function SetTreeModule$$$loop($m$$8$$120, $acc$$10$$121) {
  SetTreeModule$$$loop: while (true) {
    const m$$8 = $m$$8$$120,
          acc$$10 = $acc$$10$$121;

    switch (m$$8.tag) {
      case 2:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](m$$8.fields[0], acc$$10);
        }

      case 0:
        {
          return acc$$10;
        }

      default:
        {
          $m$$8$$120 = m$$8.fields[1];
          $acc$$10$$121 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](m$$8.fields[0], SetTreeModule$$$loop(m$$8.fields[2], acc$$10));
          continue SetTreeModule$$$loop;
        }
    }

    break;
  }
}
function SetTreeModule$$$toList(s$$18) {
  return SetTreeModule$$$loop(s$$18, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]());
}
function SetTreeModule$$$copyToArray(s$$19, arr, i$$2) {
  let j = i$$2 | 0;
  SetTreeModule$$$iter(function (x$$8) {
    arr[j] = x$$8;
    j = j + 1;
  }, s$$19);
}
function SetTreeModule$$$mkFromEnumerator($comparer$$19$$126, $acc$$11$$127, $e$$128) {
  SetTreeModule$$$mkFromEnumerator: while (true) {
    const comparer$$19 = $comparer$$19$$126,
          acc$$11 = $acc$$11$$127,
          e = $e$$128;

    if (e.MoveNext()) {
      $comparer$$19$$126 = comparer$$19;
      $acc$$11$$127 = SetTreeModule$$$add(comparer$$19, e.Current, acc$$11);
      $e$$128 = e;
      continue SetTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$11;
    }

    break;
  }
}
function SetTreeModule$$$ofSeq(comparer$$20, c$$11) {
  const ie = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["getEnumerator"])(c$$11);

  try {
    return SetTreeModule$$$mkFromEnumerator(comparer$$20, new SetTree$00601(0, "SetEmpty"), ie);
  } finally {
    if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["isDisposable"])(ie)) {
      ie.Dispose();
    }
  }
}
function SetTreeModule$$$ofArray(comparer$$21, arr$$1) {
  let acc$$12 = new SetTree$00601(0, "SetEmpty");

  for (let i$$3 = 0; i$$3 <= arr$$1.length - 1; i$$3++) {
    acc$$12 = SetTreeModule$$$add(comparer$$21, arr$$1[i$$3], acc$$12);
  }

  return acc$$12;
}
const FSharpSet = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Set_Set(comparer$$22, tree) {
  const $this$$2 = this;
  $this$$2.comparer = comparer$$22;
  $this$$2.tree = tree;
});
function FSharpSet$reflection($gen$$133) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["type"])("Set.FSharpSet", [$gen$$133]);
}
function FSharpSet$$$$002Ector$$2528C5CB(comparer$$22, tree) {
  return this instanceof FSharpSet ? FSharpSet.call(this, comparer$$22, tree) : new FSharpSet(comparer$$22, tree);
}
function FSharpSet$$get_Comparer(__$$4) {
  return __$$4.comparer;
}
function FSharpSet$$get_Tree(__$$5) {
  return __$$5.tree;
}
function FSharpSet$$Add$$2B595(s$$20, x$$9) {
  return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$20), SetTreeModule$$$add(FSharpSet$$get_Comparer(s$$20), x$$9, FSharpSet$$get_Tree(s$$20)));
}
function FSharpSet$$Remove$$2B595(s$$21, x$$10) {
  return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$21), SetTreeModule$$$remove(FSharpSet$$get_Comparer(s$$21), x$$10, FSharpSet$$get_Tree(s$$21)));
}
function FSharpSet$$get_Count(s$$22) {
  return SetTreeModule$$$count(FSharpSet$$get_Tree(s$$22));
}
function FSharpSet$$Contains$$2B595(s$$23, x$$11) {
  return SetTreeModule$$$mem(FSharpSet$$get_Comparer(s$$23), x$$11, FSharpSet$$get_Tree(s$$23));
}
function FSharpSet$$Iterate$$5028453F(s$$24, x$$12) {
  SetTreeModule$$$iter(x$$12, FSharpSet$$get_Tree(s$$24));
}
function FSharpSet$$Fold(s$$25, f$$10, z) {
  return SetTreeModule$$$fold(function (x$$13, z$$1) {
    return f$$10(z$$1, x$$13);
  }, z, FSharpSet$$get_Tree(s$$25));
}
function FSharpSet$$get_IsEmpty(s$$26) {
  return SetTreeModule$$$isEmpty(FSharpSet$$get_Tree(s$$26));
}
function FSharpSet$$Partition$$Z1D55A0D7(s$$27, f$$11) {
  const matchValue$$10 = FSharpSet$$get_Tree(s$$27);

  if (matchValue$$10.tag === 0) {
    return [s$$27, s$$27];
  } else {
    const patternInput$$6 = SetTreeModule$$$partition(FSharpSet$$get_Comparer(s$$27), f$$11, FSharpSet$$get_Tree(s$$27));
    return [FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$27), patternInput$$6[0]), FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$27), patternInput$$6[1])];
  }
}
function FSharpSet$$Filter$$Z1D55A0D7(s$$28, f$$12) {
  const matchValue$$11 = FSharpSet$$get_Tree(s$$28);

  if (matchValue$$11.tag === 0) {
    return s$$28;
  } else {
    return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$28), SetTreeModule$$$filter(FSharpSet$$get_Comparer(s$$28), f$$12, FSharpSet$$get_Tree(s$$28)));
  }
}
function FSharpSet$$Map$$7597B8F7(s$$29, f$$13, comparer$$23) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$23, SetTreeModule$$$fold(function (acc$$13, k$$33) {
    return SetTreeModule$$$add(comparer$$23, f$$13(k$$33), acc$$13);
  }, new SetTree$00601(0, "SetEmpty"), FSharpSet$$get_Tree(s$$29)));
}
function FSharpSet$$Exists$$Z1D55A0D7(s$$30, f$$14) {
  return SetTreeModule$$$exists(f$$14, FSharpSet$$get_Tree(s$$30));
}
function FSharpSet$$ForAll$$Z1D55A0D7(s$$31, f$$15) {
  return SetTreeModule$$$forall(f$$15, FSharpSet$$get_Tree(s$$31));
}
function FSharpSet$$$op_Subtraction(a$$4, b$$5) {
  const matchValue$$12 = FSharpSet$$get_Tree(a$$4);

  if (matchValue$$12.tag === 0) {
    return a$$4;
  } else {
    const matchValue$$13 = FSharpSet$$get_Tree(b$$5);

    if (matchValue$$13.tag === 0) {
      return a$$4;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$4), SetTreeModule$$$diff(FSharpSet$$get_Comparer(a$$4), FSharpSet$$get_Tree(a$$4), FSharpSet$$get_Tree(b$$5)));
    }
  }
}
function FSharpSet$$$op_Addition(a$$5, b$$6) {
  const matchValue$$14 = FSharpSet$$get_Tree(b$$6);

  if (matchValue$$14.tag === 0) {
    return a$$5;
  } else {
    const matchValue$$15 = FSharpSet$$get_Tree(a$$5);

    if (matchValue$$15.tag === 0) {
      return b$$6;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$5), SetTreeModule$$$union(FSharpSet$$get_Comparer(a$$5), FSharpSet$$get_Tree(a$$5), FSharpSet$$get_Tree(b$$6)));
    }
  }
}
function FSharpSet$$$Intersection$$Z3BE9BFE0(a$$6, b$$7) {
  const matchValue$$16 = FSharpSet$$get_Tree(b$$7);

  if (matchValue$$16.tag === 0) {
    return b$$7;
  } else {
    const matchValue$$17 = FSharpSet$$get_Tree(a$$6);

    if (matchValue$$17.tag === 0) {
      return a$$6;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$6), SetTreeModule$$$intersection(FSharpSet$$get_Comparer(a$$6), FSharpSet$$get_Tree(a$$6), FSharpSet$$get_Tree(b$$7)));
    }
  }
}
function FSharpSet$$$IntersectionMany$$Z15B59630(sets) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["reduce"])(FSharpSet$$$Intersection$$Z3BE9BFE0, sets);
}
function FSharpSet$$$Equality$$Z3BE9BFE0(a$$7, b$$8) {
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(a$$7), FSharpSet$$get_Tree(a$$7), FSharpSet$$get_Tree(b$$8)) === 0;
}
function FSharpSet$$$Compare$$Z3BE9BFE0(a$$8, b$$9) {
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(a$$8), FSharpSet$$get_Tree(a$$8), FSharpSet$$get_Tree(b$$9));
}
function FSharpSet$$get_Choose(x$$14) {
  return SetTreeModule$$$choose(FSharpSet$$get_Tree(x$$14));
}
function FSharpSet$$get_MinimumElement(x$$15) {
  return SetTreeModule$$$minimumElement(FSharpSet$$get_Tree(x$$15));
}
function FSharpSet$$get_MaximumElement(x$$16) {
  return SetTreeModule$$$maximumElement(FSharpSet$$get_Tree(x$$16));
}
function FSharpSet$$IsSubsetOf$$6A20B1FF(x$$17, y) {
  return SetTreeModule$$$subset(FSharpSet$$get_Comparer(x$$17), FSharpSet$$get_Tree(x$$17), FSharpSet$$get_Tree(y));
}
function FSharpSet$$IsSupersetOf$$6A20B1FF(x$$18, y$$1) {
  return SetTreeModule$$$subset(FSharpSet$$get_Comparer(x$$18), FSharpSet$$get_Tree(y$$1), FSharpSet$$get_Tree(x$$18));
}
function FSharpSet$$IsProperSubsetOf$$6A20B1FF(x$$19, y$$2) {
  return SetTreeModule$$$psubset(FSharpSet$$get_Comparer(x$$19), FSharpSet$$get_Tree(x$$19), FSharpSet$$get_Tree(y$$2));
}
function FSharpSet$$IsProperSupersetOf$$6A20B1FF(x$$20, y$$3) {
  return SetTreeModule$$$psubset(FSharpSet$$get_Comparer(x$$20), FSharpSet$$get_Tree(y$$3), FSharpSet$$get_Tree(x$$20));
}

FSharpSet.prototype.toString = function () {
  var strings;
  const this$ = this;
  return "set [" + (strings = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x$$21) {
    let copyOfStruct = x$$21;
    return String(copyOfStruct);
  }, this$), (Object(_String_js__WEBPACK_IMPORTED_MODULE_5__["join"])("; ", strings))) + "]";
};

FSharpSet.prototype.GetHashCode = function () {
  const this$$$1 = this;
  let res = 0;
  const e$$1 = SetTreeModule$$$mkIEnumerator(FSharpSet$$get_Tree(this$$$1));

  while (e$$1.MoveNext()) {
    const x$$22 = res | 0;
    const y$$4 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["structuralHash"])(e$$1.Current) | 0;
    res = (x$$22 << 1) + y$$4 + 631;
  }

  return Math.abs(res) | 0;
};

FSharpSet.prototype.Equals = function (that) {
  const this$$$2 = this;
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(this$$$2), FSharpSet$$get_Tree(this$$$2), FSharpSet$$get_Tree(that)) === 0;
};

FSharpSet.prototype.CompareTo = function (that$$1) {
  const this$$$3 = this;
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(this$$$3), FSharpSet$$get_Tree(this$$$3), FSharpSet$$get_Tree(that$$1)) | 0;
};

FSharpSet.prototype[Symbol.iterator] = function () {
  const s$$32 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["toIterator"])(SetTreeModule$$$mkIEnumerator(FSharpSet$$get_Tree(s$$32)));
};

function isEmpty(s$$33) {
  return FSharpSet$$get_IsEmpty(s$$33);
}
function contains(x$$23, s$$34) {
  return FSharpSet$$Contains$$2B595(s$$34, x$$23);
}
function add(x$$24, s$$35) {
  return FSharpSet$$Add$$2B595(s$$35, x$$24);
}
function singleton(x$$25, comparer$$24) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$24, new SetTree$00601(2, "SetOne", x$$25));
}
function remove(x$$26, s$$36) {
  return FSharpSet$$Remove$$2B595(s$$36, x$$26);
}
function union(s1$$2, s2$$2) {
  return FSharpSet$$$op_Addition(s1$$2, s2$$2);
}
function unionMany(sets$$1, comparer$$25) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["fold"])(FSharpSet$$$op_Addition, FSharpSet$$$$002Ector$$2528C5CB(comparer$$25, new SetTree$00601(0, "SetEmpty")), sets$$1);
}
function intersect(s1$$3, s2$$3) {
  return FSharpSet$$$Intersection$$Z3BE9BFE0(s1$$3, s2$$3);
}
function intersectMany(sets$$2) {
  return FSharpSet$$$IntersectionMany$$Z15B59630(sets$$2);
}
function iterate(f$$16, s$$37) {
  FSharpSet$$Iterate$$5028453F(s$$37, f$$16);
}
function empty(comparer$$26) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$26, new SetTree$00601(0, "SetEmpty"));
}
function forAll(f$$17, s$$38) {
  return FSharpSet$$ForAll$$Z1D55A0D7(s$$38, f$$17);
}
function exists(f$$18, s$$39) {
  return FSharpSet$$Exists$$Z1D55A0D7(s$$39, f$$18);
}
function filter(f$$19, s$$40) {
  return FSharpSet$$Filter$$Z1D55A0D7(s$$40, f$$19);
}
function partition(f$$20, s$$41) {
  return FSharpSet$$Partition$$Z1D55A0D7(s$$41, f$$20);
}
function fold(f$$21, z$$2, s$$42) {
  return SetTreeModule$$$fold(f$$21, z$$2, FSharpSet$$get_Tree(s$$42));
}
function foldBack(f$$22, s$$43, z$$3) {
  return SetTreeModule$$$foldBack(f$$22, FSharpSet$$get_Tree(s$$43), z$$3);
}
function map(f$$23, s$$44, comparer$$27) {
  return FSharpSet$$Map$$7597B8F7(s$$44, f$$23, comparer$$27);
}
function count(s$$45) {
  return FSharpSet$$get_Count(s$$45);
}
function minimumElement(s$$46) {
  return FSharpSet$$get_MinimumElement(s$$46);
}
function maximumElement(s$$47) {
  return FSharpSet$$get_MaximumElement(s$$47);
}
function ofList(li, comparer$$28) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$28, SetTreeModule$$$ofSeq(comparer$$28, li));
}
function ofArray(arr$$2, comparer$$29) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$29, SetTreeModule$$$ofArray(comparer$$29, arr$$2));
}
function toList(s$$48) {
  return SetTreeModule$$$toList(FSharpSet$$get_Tree(s$$48));
}
function toArray(s$$49, cons) {
  const n$$3 = count(s$$49) | 0;
  const res$$1 = new cons(n$$3);
  SetTreeModule$$$copyToArray(FSharpSet$$get_Tree(s$$49), res$$1, 0);
  return res$$1;
}
function toSeq(s$$50) {
  return SetTreeModule$$$toSeq(FSharpSet$$get_Tree(s$$50));
}
function ofSeq(elements, comparer$$30) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$30, SetTreeModule$$$ofSeq(comparer$$30, elements));
}
function difference(x$$28, y$$6) {
  return FSharpSet$$$op_Subtraction(x$$28, y$$6);
}
function isSubset(x$$29, y$$7) {
  return FSharpSet$$IsSubsetOf$$6A20B1FF(x$$29, y$$7);
}
function isSuperset(x$$30, y$$8) {
  return FSharpSet$$IsSupersetOf$$6A20B1FF(x$$30, y$$8);
}
function isProperSubset(x$$31, y$$9) {
  return FSharpSet$$IsProperSubsetOf$$6A20B1FF(x$$31, y$$9);
}
function isProperSuperset(x$$32, y$$10) {
  return FSharpSet$$IsProperSupersetOf$$6A20B1FF(x$$32, y$$10);
}
function minElement(s$$51) {
  return FSharpSet$$get_MinimumElement(s$$51);
}
function maxElement(s$$52) {
  return FSharpSet$$get_MaximumElement(s$$52);
}

function createMutablePrivate(comparer$$31, tree$0027) {
  let tree$$1 = tree$0027;
  return {
    get size() {
      return SetTreeModule$$$count(tree$$1);
    },

    add(x$$33) {
      const this$$$4 = this;
      tree$$1 = SetTreeModule$$$add(comparer$$31, x$$33, tree$$1);
      return this$$$4;
    },

    add_(x$$34) {
      if (SetTreeModule$$$mem(comparer$$31, x$$34, tree$$1)) {
        return false;
      } else {
        tree$$1 = SetTreeModule$$$add(comparer$$31, x$$34, tree$$1);
        return true;
      }
    },

    clear() {
      tree$$1 = new SetTree$00601(0, "SetEmpty");
    },

    delete(x$$35) {
      if (SetTreeModule$$$mem(comparer$$31, x$$35, tree$$1)) {
        tree$$1 = SetTreeModule$$$remove(comparer$$31, x$$35, tree$$1);
        return true;
      } else {
        return false;
      }
    },

    has(x$$36) {
      return SetTreeModule$$$mem(comparer$$31, x$$36, tree$$1);
    },

    keys() {
      return SetTreeModule$$$toSeq(tree$$1);
    },

    values() {
      return SetTreeModule$$$toSeq(tree$$1);
    },

    entries() {
      const source = SetTreeModule$$$toSeq(tree$$1);
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping(v) {
        return [v, v];
      }, source);
    },

    [Symbol.iterator]() {
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["toIterator"])(SetTreeModule$$$mkIEnumerator(tree$$1));
    },

    GetEnumerator() {
      return SetTreeModule$$$mkIEnumerator(tree$$1);
    }

  };
}

function createMutable(source$$1, comparer$$32) {
  const set = Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$$$002Ector$$Z6150332D"])(source$$1, comparer$$32);
  return set;
}
function distinct(xs, comparer$$33) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["delay"])(function () {
    const set$$1 = Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$$$002Ector$$Z6150332D"])(Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])(), comparer$$33);
    return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["collect"])(function (x$$37) {
      return Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$Add$$2B595"])(set$$1, x$$37) ? Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["singleton"])(x$$37) : Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    }, xs);
  });
}
function distinctBy(projection, xs$$1, comparer$$34) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["delay"])(function () {
    const set$$2 = Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$$$002Ector$$Z6150332D"])(Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])(), comparer$$34);
    return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["collect"])(function (x$$38) {
      return Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$Add$$2B595"])(set$$2, projection(x$$38)) ? Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["singleton"])(x$$38) : Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    }, xs$$1);
  });
}
function unionWith(s1$$4, s2$$4) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["fold"])(function folder(acc$$14, x$$39) {
    return acc$$14.add(x$$39);
  }, s1$$4, s2$$4);
}
function intersectWith(s1$$5, s2$$5, comparer$$35) {
  const s2$$6 = ofSeq(s2$$5, comparer$$35);
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["iterate"])(function (x$$40) {
    if (!FSharpSet$$Contains$$2B595(s2$$6, x$$40)) {
      const value = s1$$5.delete(x$$40);
      value, null;
    }
  }, s1$$5);
}
function exceptWith(s1$$6, s2$$7) {
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["iterate"])(function (x$$41) {
    const value$$1 = s1$$6.delete(x$$41);
    value$$1, null;
  }, s2$$7);
}
function isSubsetOf(s1$$7, s2$$8, comparer$$36) {
  return isSubset(ofSeq(s1$$7, comparer$$36), ofSeq(s2$$8, comparer$$36));
}
function isSupersetOf(s1$$8, s2$$9, comparer$$37) {
  return isSuperset(ofSeq(s1$$8, comparer$$37), ofSeq(s2$$9, comparer$$37));
}
function isProperSubsetOf(s1$$9, s2$$10, comparer$$38) {
  return isProperSubset(ofSeq(s1$$9, comparer$$38), ofSeq(s2$$10, comparer$$38));
}
function isProperSupersetOf(s1$$10, s2$$11, comparer$$39) {
  return isProperSuperset(ofSeq(s1$$10, comparer$$39), ofSeq(s2$$11, comparer$$39));
}

/***/ }),

/***/ "./.fable/fable-library.2.4.11/String.js":
/*!***********************************************!*\
  !*** ./.fable/fable-library.2.4.11/String.js ***!
  \***********************************************/
/*! exports provided: compare, compareOrdinal, compareTo, startsWith, indexOfAny, printf, toConsole, toConsoleError, toText, toFail, fsFormat, format, endsWith, initialize, insert, isNullOrEmpty, isNullOrWhiteSpace, concat, join, joinWithIndices, validateGuid, newGuid, guidToArray, arrayToGuid, toBase64String, fromBase64String, padLeft, padRight, remove, replace, replicate, getCharAtIndex, split, trim, trimStart, trimEnd, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareOrdinal", function() { return compareOrdinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTo", function() { return compareTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOfAny", function() { return indexOfAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printf", function() { return printf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toConsole", function() { return toConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toConsoleError", function() { return toConsoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toText", function() { return toText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFail", function() { return toFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fsFormat", function() { return fsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return isNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrWhiteSpace", function() { return isNullOrWhiteSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinWithIndices", function() { return joinWithIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGuid", function() { return validateGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGuid", function() { return newGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guidToArray", function() { return guidToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToGuid", function() { return arrayToGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64String", function() { return toBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBase64String", function() { return fromBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padLeft", function() { return padLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padRight", function() { return padRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicate", function() { return replicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharAtIndex", function() { return getCharAtIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimStart", function() { return trimStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimEnd", function() { return trimEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "./.fable/fable-library.2.4.11/Date.js");
/* harmony import */ var _Decimal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Decimal */ "./.fable/fable-library.2.4.11/Decimal.js");
/* harmony import */ var _Long__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Long */ "./.fable/fable-library.2.4.11/Long.js");
/* harmony import */ var _RegExp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExp */ "./.fable/fable-library.2.4.11/RegExp.js");




const fsFormatRegExp = /(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w)/;
const formatRegExp = /\{(\d+)(,-?\d+)?(?:\:([a-zA-Z])(\d{0,2})|\:(.+?))?\}/g;
// RFC 4122 compliant. From https://stackoverflow.com/a/13653180/3922220
// const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
// Relax GUID parsing, see #1637
const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
// These are used for formatting and only take longs and decimals into account (no bigint)
function isNumeric(x) {
    return typeof x === "number" || x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"] || x instanceof _Decimal__WEBPACK_IMPORTED_MODULE_1__["default"];
}
function isLessThan(x, y) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return _Long__WEBPACK_IMPORTED_MODULE_2__["compare"](x, y) < 0;
    }
    else if (x instanceof _Decimal__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        return x.cmp(y) < 0;
    }
    else {
        return x < y;
    }
}
function multiply(x, y) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return _Long__WEBPACK_IMPORTED_MODULE_2__["op_Multiply"](x, y);
    }
    else if (x instanceof _Decimal__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        return x.mul(y);
    }
    else {
        return x * y;
    }
}
function toFixed(x, dp) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return String(x) + (0).toFixed(dp).substr(1);
    }
    else {
        return x.toFixed(dp);
    }
}
function toPrecision(x, sd) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return String(x) + (0).toPrecision(sd).substr(1);
    }
    else {
        return x.toPrecision(sd);
    }
}
function toExponential(x, dp) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return String(x) + (0).toExponential(dp).substr(1);
    }
    else {
        return x.toExponential(dp);
    }
}
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true ||
            i === 1 /* CurrentCultureIgnoreCase */ ||
            i === 3 /* InvariantCultureIgnoreCase */ ||
            i === 5 /* OrdinalIgnoreCase */;
    }
    function isOrdinal(i) {
        return i === 4 /* Ordinal */ ||
            i === 5 /* OrdinalIgnoreCase */;
    }
    if (x == null) {
        return y == null ? 0 : -1;
    }
    if (y == null) {
        return 1;
    } // everything is bigger than null
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return (x === y) ? 0 : (x < y ? -1 : 1);
    }
    else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare(...args) {
    switch (args.length) {
        case 2: return cmp(args[0], args[1], false);
        case 3: return cmp(args[0], args[1], args[2]);
        case 4: return cmp(args[0], args[1], args[2] === true);
        case 5: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default: throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareOrdinal(x, y) {
    return cmp(x, y, 4 /* Ordinal */);
}
function compareTo(x, y) {
    return cmp(x, y, 0 /* CurrentCulture */);
}
function startsWith(str, pattern, ic) {
    if (str.length >= pattern.length) {
        return cmp(str.substr(0, pattern.length), pattern, ic) === 0;
    }
    return false;
}
function indexOfAny(str, anyOf, ...args) {
    if (str == null || str === "") {
        return -1;
    }
    const startIndex = (args.length > 0) ? args[0] : 0;
    if (startIndex < 0) {
        throw new Error("Start index cannot be negative");
    }
    const length = (args.length > 1) ? args[1] : str.length - startIndex;
    if (length < 0) {
        throw new Error("Length cannot be negative");
    }
    if (length > str.length - startIndex) {
        throw new Error("Invalid startIndex and length");
    }
    str = str.substr(startIndex, length);
    for (const c of anyOf) {
        const index = str.indexOf(c);
        if (index > -1) {
            return index + startIndex;
        }
    }
    return -1;
}
function toHex(x) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return _Long__WEBPACK_IMPORTED_MODULE_2__["toString"](x.unsigned ? x : _Long__WEBPACK_IMPORTED_MODULE_2__["fromBytes"](_Long__WEBPACK_IMPORTED_MODULE_2__["toBytes"](x), true), 16);
    }
    else {
        return (Number(x) >>> 0).toString(16);
    }
}
function printf(input) {
    return {
        input,
        cont: fsFormat(input),
    };
}
function toConsole(arg) {
    // Don't remove the lambda here, see #1357
    return arg.cont((x) => { console.log(x); });
}
function toConsoleError(arg) {
    return arg.cont((x) => { console.error(x); });
}
function toText(arg) {
    return arg.cont((x) => x);
}
function toFail(arg) {
    return arg.cont((x) => { throw new Error(x); });
}
function formatOnce(str2, rep) {
    return str2.replace(fsFormatRegExp, (_, prefix, flags, padLength, precision, format) => {
        let sign = "";
        if (isNumeric(rep)) {
            if (format.toLowerCase() !== "x") {
                if (isLessThan(rep, 0)) {
                    rep = multiply(rep, -1);
                    sign = "-";
                }
                else {
                    if (flags.indexOf(" ") >= 0) {
                        sign = " ";
                    }
                    else if (flags.indexOf("+") >= 0) {
                        sign = "+";
                    }
                }
            }
            precision = precision == null ? null : parseInt(precision, 10);
            switch (format) {
                case "f":
                case "F":
                    precision = precision != null ? precision : 6;
                    rep = toFixed(rep, precision);
                    break;
                case "g":
                case "G":
                    rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
                    break;
                case "e":
                case "E":
                    rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
                    break;
                case "x":
                    rep = toHex(rep);
                    break;
                case "X":
                    rep = toHex(rep).toUpperCase();
                    break;
                default: // AOid
                    rep = String(rep);
                    break;
            }
        }
        padLength = parseInt(padLength, 10);
        if (!isNaN(padLength)) {
            const zeroFlag = flags.indexOf("0") >= 0; // Use '0' for left padding
            const minusFlag = flags.indexOf("-") >= 0; // Right padding
            const ch = minusFlag || !zeroFlag ? " " : "0";
            if (ch === "0") {
                rep = padLeft(rep, padLength - sign.length, ch, minusFlag);
                rep = sign + rep;
            }
            else {
                rep = padLeft(sign + rep, padLength, ch, minusFlag);
            }
        }
        else {
            rep = sign + rep;
        }
        const once = prefix + rep;
        return once.replace(/%/g, "%%");
    });
}
function createPrinter(str, cont) {
    return (...args) => {
        // Make a copy as the function may be used several times
        let strCopy = str;
        for (const arg of args) {
            strCopy = formatOnce(strCopy, arg);
        }
        return fsFormatRegExp.test(strCopy)
            ? createPrinter(strCopy, cont)
            : cont(strCopy.replace(/%%/g, "%"));
    };
}
function fsFormat(str) {
    return (cont) => {
        return fsFormatRegExp.test(str)
            ? createPrinter(str, cont)
            : cont(str);
    };
}
function format(str, ...args) {
    if (typeof str === "object" && args.length > 0) {
        // Called with culture info
        str = args[0];
        args.shift();
    }
    return str.replace(formatRegExp, (_, idx, padLength, format, precision, pattern) => {
        let rep = args[idx];
        if (isNumeric(rep)) {
            precision = precision == null ? null : parseInt(precision, 10);
            switch (format) {
                case "f":
                case "F":
                    precision = precision != null ? precision : 2;
                    rep = toFixed(rep, precision);
                    break;
                case "g":
                case "G":
                    rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
                    break;
                case "e":
                case "E":
                    rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
                    break;
                case "p":
                case "P":
                    precision = precision != null ? precision : 2;
                    rep = toFixed(multiply(rep, 100), precision) + " %";
                    break;
                case "d":
                case "D":
                    rep = precision != null ? padLeft(String(rep), precision, "0") : String(rep);
                    break;
                case "x":
                case "X":
                    rep = precision != null ? padLeft(toHex(rep), precision, "0") : toHex(rep);
                    if (format === "X") {
                        rep = rep.toUpperCase();
                    }
                    break;
                default:
                    if (pattern) {
                        let sign = "";
                        rep = pattern.replace(/(0+)(\.0+)?/, (_, intPart, decimalPart) => {
                            if (isLessThan(rep, 0)) {
                                rep = multiply(rep, -1);
                                sign = "-";
                            }
                            rep = toFixed(rep, decimalPart != null ? decimalPart.length - 1 : 0);
                            return padLeft(rep, (intPart || "").length - sign.length + (decimalPart != null ? decimalPart.length : 0), "0");
                        });
                        rep = sign + rep;
                    }
            }
        }
        else if (rep instanceof Date) {
            rep = Object(_Date__WEBPACK_IMPORTED_MODULE_0__["toString"])(rep, pattern || format);
        }
        padLength = parseInt((padLength || " ").substring(1), 10);
        if (!isNaN(padLength)) {
            rep = padLeft(String(rep), Math.abs(padLength), " ", padLength < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    const idx = str.lastIndexOf(search);
    return idx >= 0 && idx === str.length - search.length;
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("String length must be non-negative");
    }
    const xs = new Array(n);
    for (let i = 0; i < n; i++) {
        xs[i] = f(i);
    }
    return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length === 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function concat(...xs) {
    return xs.map((x) => String(x)).join("");
}
function join(delimiter, xs) {
    if (Array.isArray(xs)) {
        return xs.join(delimiter);
    }
    else {
        return Array.from(xs).join(delimiter);
    }
}
function joinWithIndices(delimiter, xs, startIndex, count) {
    const endIndexPlusOne = startIndex + count;
    if (endIndexPlusOne > xs.length) {
        throw new Error("Index and count must refer to a location within the buffer.");
    }
    return xs.slice(startIndex, endIndexPlusOne).join(delimiter);
}
/** Validates UUID as specified in RFC4122 (versions 1-5). Trims braces. */
function validateGuid(str, doNotThrow) {
    const trimmedAndLowered = trim(str, "{", "}").toLowerCase();
    if (guidRegex.test(trimmedAndLowered)) {
        return doNotThrow ? [true, trimmedAndLowered] : trimmedAndLowered;
    }
    else if (doNotThrow) {
        return [false, "00000000-0000-0000-0000-000000000000"];
    }
    throw new Error("Guid should contain 32 digits with 4 dashes: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
}
// From https://gist.github.com/LeverOne/1308368
function newGuid() {
    let b = "";
    for (let a = 0; a++ < 36;) {
        b += a * 51 & 52
            ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16)
            : "-";
    }
    return b;
}
// Maps for number <-> hex string conversion
let _convertMapsInitialized = false;
let _byteToHex;
let _hexToByte;
function initConvertMaps() {
    _byteToHex = new Array(256);
    _hexToByte = {};
    for (let i = 0; i < 256; i++) {
        _byteToHex[i] = (i + 0x100).toString(16).substr(1);
        _hexToByte[_byteToHex[i]] = i;
    }
    _convertMapsInitialized = true;
}
/** Parse a UUID into it's component bytes */
// Adapted from https://github.com/zefferus/uuid-parse
function guidToArray(s) {
    if (!_convertMapsInitialized) {
        initConvertMaps();
    }
    let i = 0;
    const buf = new Uint8Array(16);
    s.toLowerCase().replace(/[0-9a-f]{2}/g, ((oct) => {
        switch (i) {
            // .NET saves first three byte groups with different endianness
            // See https://stackoverflow.com/a/16722909/3922220
            case 0:
            case 1:
            case 2:
            case 3:
                buf[3 - i++] = _hexToByte[oct];
                break;
            case 4:
            case 5:
                buf[9 - i++] = _hexToByte[oct];
                break;
            case 6:
            case 7:
                buf[13 - i++] = _hexToByte[oct];
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                buf[i++] = _hexToByte[oct];
                break;
        }
    }));
    // Zero out remaining bytes if string was short
    while (i < 16) {
        buf[i++] = 0;
    }
    return buf;
}
/** Convert UUID byte array into a string */
function arrayToGuid(buf) {
    if (buf.length !== 16) {
        throw new Error("Byte array for GUID must be exactly 16 bytes long");
    }
    if (!_convertMapsInitialized) {
        initConvertMaps();
    }
    const guid = _byteToHex[buf[3]] + _byteToHex[buf[2]] +
        _byteToHex[buf[1]] + _byteToHex[buf[0]] + "-" +
        _byteToHex[buf[5]] + _byteToHex[buf[4]] + "-" +
        _byteToHex[buf[7]] + _byteToHex[buf[6]] + "-" +
        _byteToHex[buf[8]] + _byteToHex[buf[9]] + "-" +
        _byteToHex[buf[10]] + _byteToHex[buf[11]] +
        _byteToHex[buf[12]] + _byteToHex[buf[13]] +
        _byteToHex[buf[14]] + _byteToHex[buf[15]];
    return guid;
}
function notSupported(name) {
    throw new Error("The environment doesn't support '" + name + "', please use a polyfill.");
}
function toBase64String(inArray) {
    let str = "";
    for (let i = 0; i < inArray.length; i++) {
        str += String.fromCharCode(inArray[i]);
    }
    return typeof btoa === "function" ? btoa(str) : notSupported("btoa");
}
function fromBase64String(b64Encoded) {
    const binary = typeof atob === "function" ? atob(b64Encoded) : notSupported("atob");
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    len = len - str.length;
    for (let i = 0; i < len; i++) {
        str = isRight ? str + ch : ch + str;
    }
    return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && (startIndex + count) > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp(Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, () => x);
}
function getCharAtIndex(input, index) {
    if (index < 0 || index >= input.length) {
        throw new Error("Index was outside the bounds of the array.");
    }
    return input[index];
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count === "number" ? count : null;
    removeEmpty = typeof removeEmpty === "number" ? removeEmpty : null;
    if (count < 0) {
        throw new Error("Count cannot be less than zero");
    }
    if (count === 0) {
        return [];
    }
    if (!Array.isArray(splitters)) {
        if (removeEmpty === 0) {
            return str.split(splitters, count);
        }
        const len = arguments.length;
        splitters = Array(len - 1);
        for (let key = 1; key < len; key++) {
            splitters[key - 1] = arguments[key];
        }
    }
    splitters = splitters.map((x) => Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(x));
    splitters = splitters.length > 0 ? splitters : [" "];
    let i = 0;
    const splits = [];
    const reg = new RegExp(splitters.join("|"), "g");
    while (count == null || count > 1) {
        const m = reg.exec(str);
        if (m === null) {
            break;
        }
        if (!removeEmpty || (m.index - i) > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || (str.length - i) > 0) {
        splits.push(str.substring(i));
    }
    return splits;
}
function trim(str, ...chars) {
    if (chars.length === 0) {
        return str.trim();
    }
    const pattern = "[" + Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(chars.join("")) + "]+";
    return str.replace(new RegExp("^" + pattern), "").replace(new RegExp(pattern + "$"), "");
}
function trimStart(str, ...chars) {
    return chars.length === 0
        ? str.trimStart()
        : str.replace(new RegExp("^[" + Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(chars.join("")) + "]+"), "");
}
function trimEnd(str, ...chars) {
    return chars.length === 0
        ? str.trimEnd()
        : str.replace(new RegExp("[" + Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(chars.join("")) + "]+$"), "");
}
function filter(pred, x) {
    return x.split("").filter((c) => pred(c)).join("");
}
//# sourceMappingURL=String.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Types.js":
/*!**********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Types.js ***!
  \**********************************************/
/*! exports provided: declare, SystemObject, List, Union, Record, anonRecord, FSharpRef, Exception, isException, FSharpException, MatchFailureException, Attribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declare", function() { return declare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemObject", function() { return SystemObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Union", function() { return Union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anonRecord", function() { return anonRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpRef", function() { return FSharpRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception", function() { return Exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isException", function() { return isException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpException", function() { return FSharpException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchFailureException", function() { return MatchFailureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.4.11/Util.js");

function sameType(x, y) {
    return y != null && Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;
}
// Taken from Babel helpers
function inherits(subClass, superClass) {
    // if (typeof superClass !== "function" && superClass !== null) {
    //   throw new TypeError(
    //     "Super expression must either be null or a function, not " +
    //       typeof superClass
    //   );
    // }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
        },
    });
    // if (superClass)
    //   Object.setPrototypeOf
    //     ? Object.setPrototypeOf(subClass, superClass)
    //     : (subClass.__proto__ = superClass);
}
function declare(cons, superClass) {
    inherits(cons, superClass || SystemObject);
    return cons;
}
function SystemObject() {
    return;
}
SystemObject.prototype.toString = function () {
    return "{" + Object.keys(this).map((k) => k + " = " + String(this[k])).join(";\n ") + "}";
};
SystemObject.prototype.GetHashCode = function () {
    return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["identityHash"])(this);
};
SystemObject.prototype.Equals = function (other) {
    return this === other;
};
function compareList(self, other) {
    if (self === other) {
        return 0;
    }
    else {
        if (other == null) {
            return -1;
        }
        while (self.tail != null) {
            if (other.tail == null) {
                return 1;
            }
            const res = Object(_Util__WEBPACK_IMPORTED_MODULE_0__["compare"])(self.head, other.head);
            if (res !== 0) {
                return res;
            }
            self = self.tail;
            other = other.tail;
        }
        return other.tail == null ? 0 : -1;
    }
}
function List(head, tail) {
    this.head = head;
    this.tail = tail;
}
List.prototype.toString = function () {
    return "[" + Array.from(this).map((x) => String(x)).join("; ") + "]";
};
List.prototype.toJSON = function () {
    return Array.from(this);
};
List.prototype[Symbol.iterator] = function () {
    let cur = this;
    return {
        next: () => {
            const tmp = cur;
            cur = cur.tail;
            return { done: tmp.tail == null, value: tmp.head };
        },
    };
};
List.prototype.GetHashCode = function () {
    const hashes = Array.from(this).map(_Util__WEBPACK_IMPORTED_MODULE_0__["structuralHash"]);
    return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])(hashes);
};
List.prototype.Equals = function (other) {
    return compareList(this, other) === 0;
};
List.prototype.CompareTo = function (other) {
    return compareList(this, other);
};
function Union(tag, name, ...fields) {
    this.tag = tag | 0;
    this.name = name;
    this.fields = fields;
}
Union.prototype.toString = function () {
    const len = this.fields.length;
    if (len === 0) {
        return this.name;
    }
    else if (len === 1) {
        return this.name + " " + String(this.fields[0]);
    }
    else {
        return this.name + " (" + this.fields.map((x) => String(x)).join(",") + ")";
    }
};
Union.prototype.toJSON = function () {
    return this.fields.length === 0
        ? this.name
        : [this.name].concat(this.fields);
};
Union.prototype.GetHashCode = function () {
    const hashes = this.fields.map((x) => Object(_Util__WEBPACK_IMPORTED_MODULE_0__["structuralHash"])(x));
    hashes.splice(0, 0, Object(_Util__WEBPACK_IMPORTED_MODULE_0__["numberHash"])(this.tag));
    return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])(hashes);
};
Union.prototype.Equals = function (other) {
    return this === other
        || (sameType(this, other)
            && this.tag === other.tag
            && Object(_Util__WEBPACK_IMPORTED_MODULE_0__["equalArrays"])(this.fields, other.fields));
};
Union.prototype.CompareTo = function (other) {
    if (this === other) {
        return 0;
    }
    else if (!sameType(this, other)) {
        return -1;
    }
    else if (this.tag === other.tag) {
        return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["compareArrays"])(this.fields, other.fields);
    }
    else {
        return this.tag < other.tag ? -1 : 1;
    }
};
function recordToJson(record, getFieldNames) {
    const o = {};
    const keys = getFieldNames == null ? Object.keys(record) : getFieldNames(record);
    for (let i = 0; i < keys.length; i++) {
        o[keys[i]] = record[keys[i]];
    }
    return o;
}
function recordEquals(self, other, getFieldNames) {
    if (self === other) {
        return true;
    }
    else if (!sameType(self, other)) {
        return false;
    }
    else {
        const thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);
        for (let i = 0; i < thisNames.length; i++) {
            if (!Object(_Util__WEBPACK_IMPORTED_MODULE_0__["equals"])(self[thisNames[i]], other[thisNames[i]])) {
                return false;
            }
        }
        return true;
    }
}
function recordCompare(self, other, getFieldNames) {
    if (self === other) {
        return 0;
    }
    else if (!sameType(self, other)) {
        return -1;
    }
    else {
        const thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);
        for (let i = 0; i < thisNames.length; i++) {
            const result = Object(_Util__WEBPACK_IMPORTED_MODULE_0__["compare"])(self[thisNames[i]], other[thisNames[i]]);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    }
}
function Record() {
    return;
}
Record.prototype.toString = function () {
    return "{" + Object.keys(this).map((k) => k + " = " + String(this[k])).join(";\n ") + "}";
};
Record.prototype.toJSON = function () {
    return recordToJson(this);
};
Record.prototype.GetHashCode = function () {
    const hashes = Object.keys(this).map((k) => Object(_Util__WEBPACK_IMPORTED_MODULE_0__["structuralHash"])(this[k]));
    return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])(hashes);
};
Record.prototype.Equals = function (other) {
    return recordEquals(this, other);
};
Record.prototype.CompareTo = function (other) {
    return recordCompare(this, other);
};
function anonRecord(o) {
    return Object.assign(Object.create(Record.prototype), o);
}
const FSharpRef = declare(function FSharpRef(contents) {
    this.contents = contents;
}, Record);
// EXCEPTIONS
const Exception = declare(function Exception(msg) {
    this.stack = Error().stack;
    this.message = msg;
});
function isException(x) {
    return x instanceof Error || x instanceof Exception;
}
function getFSharpExceptionFieldNames(self) {
    return Object.keys(self).filter((k) => k !== "message" && k !== "stack");
}
const FSharpException = declare(function FSharpException() {
    Exception.call(this);
}, Exception);
FSharpException.prototype.toString = function () {
    const fieldNames = getFSharpExceptionFieldNames(this);
    const len = fieldNames.length;
    if (len === 0) {
        return this.message;
    }
    else if (len === 1) {
        return this.message + " " + String(this[fieldNames[0]]);
    }
    else {
        return this.message + " (" + fieldNames.map((k) => String(this[k])).join(",") + ")";
    }
};
FSharpException.prototype.toJSON = function () {
    return recordToJson(this, getFSharpExceptionFieldNames);
};
FSharpException.prototype.GetHashCode = function () {
    const hashes = getFSharpExceptionFieldNames(this).map((k) => Object(_Util__WEBPACK_IMPORTED_MODULE_0__["structuralHash"])(this[k]));
    return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])(hashes);
};
FSharpException.prototype.Equals = function (other) {
    return recordEquals(this, other, getFSharpExceptionFieldNames);
};
FSharpException.prototype.CompareTo = function (other) {
    return recordCompare(this, other, getFSharpExceptionFieldNames);
};
const MatchFailureException = declare(function MatchFailureException(arg1, arg2, arg3) {
    this.arg1 = arg1;
    this.arg2 = arg2 | 0;
    this.arg3 = arg3 | 0;
    this.message = "The match cases were incomplete";
}, FSharpException);
const Attribute = declare(function Attribute() { return; });
//# sourceMappingURL=Types.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/Util.js":
/*!*********************************************!*\
  !*** ./.fable/fable-library.2.4.11/Util.js ***!
  \*********************************************/
/*! exports provided: extend, isDisposable, Comparer, comparerFromEqualityComparer, containsValue, tryGetValue, addToSet, assertEqual, assertNotEqual, Lazy, lazyFromValue, padWithZeros, padLeftAndRightWithZeros, dateOffset, int16ToString, int32ToString, ObjectRef, stringHash, numberHash, combineHashCodes, identityHash, structuralHash, isArray, isIterable, equalArraysWith, equalArrays, equals, compareDates, comparePrimitives, compareArraysWith, compareArrays, compareObjects, compare, min, max, createAtom, createObj, jsOptions, round, sign, randomNext, randomBytes, unescapeDataString, escapeDataString, escapeUriString, count, clear, uncurry, curry, partialApply, mapCurriedArgs, addToDict, getItemFromDict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisposable", function() { return isDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comparer", function() { return Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparerFromEqualityComparer", function() { return comparerFromEqualityComparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsValue", function() { return containsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryGetValue", function() { return tryGetValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToSet", function() { return addToSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertEqual", function() { return assertEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNotEqual", function() { return assertNotEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return Lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyFromValue", function() { return lazyFromValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padWithZeros", function() { return padWithZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padLeftAndRightWithZeros", function() { return padLeftAndRightWithZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateOffset", function() { return dateOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int16ToString", function() { return int16ToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int32ToString", function() { return int32ToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectRef", function() { return ObjectRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringHash", function() { return stringHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberHash", function() { return numberHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineHashCodes", function() { return combineHashCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityHash", function() { return identityHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "structuralHash", function() { return structuralHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalArraysWith", function() { return equalArraysWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalArrays", function() { return equalArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDates", function() { return compareDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparePrimitives", function() { return comparePrimitives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareArraysWith", function() { return compareArraysWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareArrays", function() { return compareArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareObjects", function() { return compareObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObj", function() { return createObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsOptions", function() { return jsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNext", function() { return randomNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomBytes", function() { return randomBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescapeDataString", function() { return unescapeDataString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeDataString", function() { return escapeDataString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeUriString", function() { return escapeUriString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncurry", function() { return uncurry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partialApply", function() { return partialApply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapCurriedArgs", function() { return mapCurriedArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToDict", function() { return addToDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemFromDict", function() { return getItemFromDict; });
// tslint:disable:ban-types
// Object.assign flattens getters and setters
// See https://stackoverflow.com/questions/37054596/js-es5-how-to-assign-objects-with-setters-and-getters
function extend(target, ...sources) {
    for (const source of sources) {
        for (const key of Object.keys(source)) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        }
    }
    return target;
}
function isDisposable(x) {
    return x != null && typeof x.Dispose === "function";
}
class Comparer {
    constructor(f) {
        this.Compare = f || compare;
    }
}
function comparerFromEqualityComparer(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if (typeof comparer.Compare === "function") {
        return new Comparer(comparer.Compare);
    }
    else {
        return new Comparer((x, y) => {
            const xhash = comparer.GetHashCode(x);
            const yhash = comparer.GetHashCode(y);
            if (xhash === yhash) {
                return comparer.Equals(x, y) ? 0 : -1;
            }
            else {
                return xhash < yhash ? -1 : 1;
            }
        });
    }
}
// TODO: Move these three methods to Map and Set modules
function containsValue(v, map) {
    for (const kv of map) {
        if (equals(v, kv[1])) {
            return true;
        }
    }
    return false;
}
function tryGetValue(map, key, defaultValue) {
    return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
function addToSet(v, set) {
    if (set.has(v)) {
        return false;
    }
    set.add(v);
    return true;
}
function assertEqual(actual, expected, msg) {
    if (!equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
function assertNotEqual(actual, expected, msg) {
    if (equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
class Lazy {
    constructor(factory) {
        this.factory = factory;
        this.isValueCreated = false;
    }
    get Value() {
        if (!this.isValueCreated) {
            this.createdValue = this.factory();
            this.isValueCreated = true;
        }
        return this.createdValue;
    }
    get IsValueCreated() {
        return this.isValueCreated;
    }
}
function lazyFromValue(v) {
    return new Lazy(() => v);
}
function padWithZeros(i, length) {
    let str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
function padLeftAndRightWithZeros(i, lengthLeft, lengthRight) {
    let str = i.toString(10);
    while (str.length < lengthLeft) {
        str = "0" + str;
    }
    while (str.length < lengthRight) {
        str = str + "0";
    }
    return str;
}
function dateOffset(date) {
    const date1 = date;
    return typeof date1.offset === "number"
        ? date1.offset
        : (date.kind === 1 /* UTC */
            ? 0 : date.getTimezoneOffset() * -60000);
}
function int16ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFF + i + 1 : i;
    return i.toString(radix);
}
function int32ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFFFFFF + i + 1 : i;
    return i.toString(radix);
}
class ObjectRef {
    static id(o) {
        if (!ObjectRef.idMap.has(o)) {
            ObjectRef.idMap.set(o, ++ObjectRef.count);
        }
        return ObjectRef.idMap.get(o);
    }
}
ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
function stringHash(s) {
    let i = 0;
    let h = 5381;
    const len = s.length;
    while (i < len) {
        h = (h * 33) ^ s.charCodeAt(i++);
    }
    return h;
}
function numberHash(x) {
    return x * 2654435761 | 0;
}
// From https://stackoverflow.com/a/37449594
function combineHashCodes(hashes) {
    if (hashes.length === 0) {
        return 0;
    }
    return hashes.reduce((h1, h2) => {
        return ((h1 << 5) + h1) ^ h2;
    });
}
function identityHash(x) {
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default:
            return numberHash(ObjectRef.id(x));
    }
}
function structuralHash(x) {
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default: {
            if (typeof x.GetHashCode === "function") {
                return x.GetHashCode();
            }
            else if (isArray(x)) {
                const ar = x;
                const len = ar.length;
                const hashes = new Array(len);
                for (let i = 0; i < len; i++) {
                    hashes[i] = structuralHash(ar[i]);
                }
                return combineHashCodes(hashes);
            }
            else {
                return stringHash(String(x));
            }
        }
    }
}
function isArray(x) {
    return Array.isArray(x) || ArrayBuffer.isView(x);
}
function isIterable(x) {
    return x != null && typeof x === "object" && Symbol.iterator in x;
}
function equalArraysWith(x, y, eq) {
    if (x == null) {
        return y == null;
    }
    if (y == null) {
        return false;
    }
    if (x.length !== y.length) {
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        if (!eq(x[i], y[i])) {
            return false;
        }
    }
    return true;
}
function equalArrays(x, y) {
    return equalArraysWith(x, y, equals);
}
// export function equalObjects(x: { [k: string]: any }, y: { [k: string]: any }): boolean {
//   if (x == null) { return y == null; }
//   if (y == null) { return false; }
//   const xKeys = Object.keys(x);
//   const yKeys = Object.keys(y);
//   if (xKeys.length !== yKeys.length) {
//     return false;
//   }
//   xKeys.sort();
//   yKeys.sort();
//   for (let i = 0; i < xKeys.length; i++) {
//     if (xKeys[i] !== yKeys[i] || !equals(x[xKeys[i]], y[yKeys[i]])) {
//       return false;
//     }
//   }
//   return true;
// }
function equals(x, y) {
    if (x === y) {
        return true;
    }
    else if (x == null) {
        return y == null;
    }
    else if (y == null) {
        return false;
    }
    else if (typeof x !== "object") {
        return false;
    }
    else if (typeof x.Equals === "function") {
        return x.Equals(y);
    }
    else if (isArray(x)) {
        return isArray(y) && equalArrays(x, y);
    }
    else if (x instanceof Date) {
        return (y instanceof Date) && compareDates(x, y) === 0;
    }
    else {
        return false;
    }
}
function compareDates(x, y) {
    let xtime;
    let ytime;
    // DateTimeOffset and DateTime deals with equality differently.
    if ("offset" in x && "offset" in y) {
        xtime = x.getTime();
        ytime = y.getTime();
    }
    else {
        xtime = x.getTime() + dateOffset(x);
        ytime = y.getTime() + dateOffset(y);
    }
    return xtime === ytime ? 0 : (xtime < ytime ? -1 : 1);
}
function comparePrimitives(x, y) {
    return x === y ? 0 : (x < y ? -1 : 1);
}
function compareArraysWith(x, y, comp) {
    if (x == null) {
        return y == null ? 0 : 1;
    }
    if (y == null) {
        return -1;
    }
    if (x.length !== y.length) {
        return x.length < y.length ? -1 : 1;
    }
    for (let i = 0, j = 0; i < x.length; i++) {
        j = comp(x[i], y[i]);
        if (j !== 0) {
            return j;
        }
    }
    return 0;
}
function compareArrays(x, y) {
    return compareArraysWith(x, y, compare);
}
function compareObjects(x, y) {
    if (x == null) {
        return y == null ? 0 : 1;
    }
    if (y == null) {
        return -1;
    }
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
        return xKeys.length < yKeys.length ? -1 : 1;
    }
    xKeys.sort();
    yKeys.sort();
    for (let i = 0, j = 0; i < xKeys.length; i++) {
        const key = xKeys[i];
        if (key !== yKeys[i]) {
            return key < yKeys[i] ? -1 : 1;
        }
        else {
            j = compare(x[key], y[key]);
            if (j !== 0) {
                return j;
            }
        }
    }
    return 0;
}
function compare(x, y) {
    if (x === y) {
        return 0;
    }
    else if (x == null) {
        return y == null ? 0 : -1;
    }
    else if (y == null) {
        return 1;
    }
    else if (typeof x !== "object") {
        return x < y ? -1 : 1;
    }
    else if (typeof x.CompareTo === "function") {
        return x.CompareTo(y);
    }
    else if (isArray(x)) {
        return isArray(y) && compareArrays(x, y);
    }
    else if (x instanceof Date) {
        return (y instanceof Date) && compareDates(x, y);
    }
    else {
        return 1;
    }
}
function min(comparer, x, y) {
    return comparer(x, y) < 0 ? x : y;
}
function max(comparer, x, y) {
    return comparer(x, y) > 0 ? x : y;
}
function createAtom(value) {
    let atom = value;
    return (value) => {
        if (value === void 0) {
            return atom;
        }
        else {
            atom = value;
            return void 0;
        }
    };
}
const CaseRules = {
    None: 0,
    LowerFirst: 1,
    SnakeCase: 2,
    SnakeCaseAllCaps: 3,
    KebabCase: 4,
};
function dashify(str, separator) {
    return str.replace(/[a-z]?[A-Z]/g, (m) => m.length === 1
        ? m.toLowerCase()
        : m.charAt(0) + separator + m.charAt(1).toLowerCase());
}
function changeCase(str, caseRule) {
    switch (caseRule) {
        case CaseRules.LowerFirst:
            return str.charAt(0).toLowerCase() + str.slice(1);
        case CaseRules.SnakeCase:
            return dashify(str, "_");
        case CaseRules.SnakeCaseAllCaps:
            return dashify(str, "_").toUpperCase();
        case CaseRules.KebabCase:
            return dashify(str, "-");
        case CaseRules.None:
        default:
            return str;
    }
}
function createObj(fields, caseRule = CaseRules.None) {
    function fail(kvPair) {
        throw new Error("Cannot infer key and value of " + String(kvPair));
    }
    const o = {};
    const definedCaseRule = caseRule;
    for (let kvPair of fields) {
        let caseRule = CaseRules.None;
        if (kvPair == null) {
            fail(kvPair);
        }
        // Deflate unions and use the defined case rule
        if (typeof kvPair.toJSON === "function") {
            kvPair = kvPair.toJSON();
            caseRule = definedCaseRule;
        }
        if (Array.isArray(kvPair)) {
            switch (kvPair.length) {
                case 0:
                    fail(kvPair);
                    break;
                case 1:
                    o[changeCase(kvPair[0], caseRule)] = true;
                    break;
                case 2:
                    const value = kvPair[1];
                    o[changeCase(kvPair[0], caseRule)] = value;
                    break;
                default:
                    o[changeCase(kvPair[0], caseRule)] = kvPair.slice(1);
            }
        }
        else if (typeof kvPair === "string") {
            o[changeCase(kvPair, caseRule)] = true;
        }
        else {
            fail(kvPair);
        }
    }
    return o;
}
function jsOptions(mutator) {
    const opts = {};
    mutator(opts);
    return opts;
}
function round(value, digits = 0) {
    const m = Math.pow(10, digits);
    const n = +(digits ? value * m : value).toFixed(8);
    const i = Math.floor(n);
    const f = n - i;
    const e = 1e-8;
    const r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 === 0) ? i : i + 1) : Math.round(n);
    return digits ? r / m : r;
}
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomBytes(buffer) {
    if (buffer == null) {
        throw new Error("Buffer cannot be null");
    }
    for (let i = 0; i < buffer.length; i += 6) {
        // Pick random 48-bit number. Fill buffer in 2 24-bit chunks to avoid bitwise truncation.
        let r = Math.floor(Math.random() * 281474976710656); // Low 24 bits = chunk 1.
        const rhi = Math.floor(r / 16777216); // High 24 bits shifted via division = chunk 2.
        for (let j = 0; j < 6 && i + j < buffer.length; j++) {
            if (j === 3) {
                r = rhi;
            }
            buffer[i + j] = r & 255;
            r >>>= 8;
        }
    }
}
function unescapeDataString(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent((s).replace(/\+/g, "%20"));
}
function escapeDataString(s) {
    return encodeURIComponent(s).replace(/!/g, "%21")
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A");
}
function escapeUriString(s) {
    return encodeURI(s);
}
// ICollection.Clear and Count members can be called on Arrays
// or Dictionaries so we need a runtime check (see #1120)
function count(col) {
    if (isArray(col)) {
        return col.length;
    }
    else {
        let count = 0;
        for (const _ of col) {
            count++;
        }
        return count;
    }
}
function clear(col) {
    if (isArray(col)) {
        col.splice(0);
    }
    else {
        col.clear();
    }
}
const CURRIED_KEY = "__CURRIED__";
function uncurry(arity, f) {
    // f may be a function option with None value
    if (f == null) {
        return null;
    }
    // The function is already uncurried
    if (f.length > 1) {
        // if (CURRIED_KEY in f) { // This doesn't always work
        return f;
    }
    let uncurriedFn;
    switch (arity) {
        case 2:
            uncurriedFn = (a1, a2) => f(a1)(a2);
            break;
        case 3:
            uncurriedFn = (a1, a2, a3) => f(a1)(a2)(a3);
            break;
        case 4:
            uncurriedFn = (a1, a2, a3, a4) => f(a1)(a2)(a3)(a4);
            break;
        case 5:
            uncurriedFn = (a1, a2, a3, a4, a5) => f(a1)(a2)(a3)(a4)(a5);
            break;
        case 6:
            uncurriedFn = (a1, a2, a3, a4, a5, a6) => f(a1)(a2)(a3)(a4)(a5)(a6);
            break;
        case 7:
            uncurriedFn = (a1, a2, a3, a4, a5, a6, a7) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7);
            break;
        case 8:
            uncurriedFn = (a1, a2, a3, a4, a5, a6, a7, a8) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7)(a8);
            break;
        default:
            throw new Error("Uncurrying to more than 8-arity is not supported: " + arity);
    }
    uncurriedFn[CURRIED_KEY] = f;
    return uncurriedFn;
}
function curry(arity, f) {
    if (f == null) {
        return null;
    }
    if (CURRIED_KEY in f) {
        return f[CURRIED_KEY];
    }
    switch (arity) {
        case 2:
            return (a1) => (a2) => f(a1, a2);
        case 3:
            return (a1) => (a2) => (a3) => f(a1, a2, a3);
        case 4:
            return (a1) => (a2) => (a3) => (a4) => f(a1, a2, a3, a4);
        case 5:
            return (a1) => (a2) => (a3) => (a4) => (a5) => f(a1, a2, a3, a4, a5);
        case 6:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f(a1, a2, a3, a4, a5, a6);
        case 7:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f(a1, a2, a3, a4, a5, a6, a7);
        case 8:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f(a1, a2, a3, a4, a5, a6, a7, a8);
        default:
            throw new Error("Currying to more than 8-arity is not supported: " + arity);
    }
}
function partialApply(arity, f, args) {
    if (f == null) {
        return null;
    }
    else if (CURRIED_KEY in f) {
        f = f[CURRIED_KEY];
        for (let i = 0; i < args.length; i++) {
            f = f(args[i]);
        }
        return f;
    }
    else {
        switch (arity) {
            case 1:
                // Wrap arguments to make sure .concat doesn't destruct arrays. Example
                // [1,2].concat([3,4],5)   --> [1,2,3,4,5]    // fails
                // [1,2].concat([[3,4],5]) --> [1,2,[3,4],5]  // ok
                return (a1) => f.apply(null, args.concat([a1]));
            case 2:
                return (a1) => (a2) => f.apply(null, args.concat([a1, a2]));
            case 3:
                return (a1) => (a2) => (a3) => f.apply(null, args.concat([a1, a2, a3]));
            case 4:
                return (a1) => (a2) => (a3) => (a4) => f.apply(null, args.concat([a1, a2, a3, a4]));
            case 5:
                return (a1) => (a2) => (a3) => (a4) => (a5) => f.apply(null, args.concat([a1, a2, a3, a4, a5]));
            case 6:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f.apply(null, args.concat([a1, a2, a3, a4, a5, a6]));
            case 7:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f.apply(null, args.concat([a1, a2, a3, a4, a5, a6, a7]));
            case 8:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f.apply(null, args.concat([a1, a2, a3, a4, a5, a6, a7, a8]));
            default:
                throw new Error("Partially applying to more than 8-arity is not supported: " + arity);
        }
    }
}
function mapCurriedArgs(fn, mappings) {
    function mapArg(fn, arg, mappings, idx) {
        const mapping = mappings[idx];
        if (mapping !== 0) {
            const expectedArity = mapping[0];
            const actualArity = mapping[1];
            if (expectedArity > 1) {
                arg = curry(expectedArity, arg);
            }
            if (actualArity > 1) {
                arg = uncurry(actualArity, arg);
            }
        }
        const res = fn(arg);
        if (idx + 1 === mappings.length) {
            return res;
        }
        else {
            return (arg) => mapArg(res, arg, mappings, idx + 1);
        }
    }
    return (arg) => mapArg(fn, arg, mappings, 0);
}
function addToDict(dict, k, v) {
    if (dict.has(k)) {
        throw new Error("An item with the same key has already been added. Key: " + k);
    }
    dict.set(k, v);
}
function getItemFromDict(map, key) {
    if (map.has(key)) {
        return map.get(key);
    }
    else {
        throw new Error(`The given key '${key}' was not present in the dictionary.`);
    }
}
//# sourceMappingURL=Util.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/lib/big.js":
/*!************************************************!*\
  !*** ./.fable/fable-library.2.4.11/lib/big.js ***!
  \************************************************/
/*! exports provided: Big, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Big", function() { return Big; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util */ "./.fable/fable-library.2.4.11/Util.js");
// https://github.com/MikeMcl/big.js/blob/01b3ce3a6b0ba7b42442ea48ec4ffc88d1669ec4/big.mjs
/* tslint:disable */

// The shared prototype object.
var P = {
    GetHashCode() { return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])([this.s, this.e].concat(this.c)); },
    Equals(x) { return !this.cmp(x); },
    CompareTo(x) { return this.cmp(x); },
};
/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */
/************************************** EDITABLE DEFAULTS *****************************************/
// The default values below must be integers within the stated ranges.
/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */
var DP = 28, // 0 to MAX_DP
/*
 * The rounding mode (RM) used when rounding to the above decimal places.
 *
 *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
 *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
 *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
 *  3  Away from zero.                                  (ROUND_UP)
 */
RM = 1, // 0, 1, 2 or 3
// The maximum value of DP and Big.DP.
MAX_DP = 1E6, // 0 to 1000000
// The maximum magnitude of the exponent argument to the pow method.
MAX_POWER = 1E6, // 1 to 1000000
/*
 * The negative exponent (NE) at and beneath which toString returns exponential notation.
 * (JavaScript numbers: -7)
 * -1000000 is the minimum recommended exponent value of a Big.
 */
NE = -29, // 0 to -1000000
/*
 * The positive exponent (PE) at and above which toString returns exponential notation.
 * (JavaScript numbers: 21)
 * 1000000 is the maximum recommended exponent value of a Big.
 * (This limit is not enforced or checked.)
 */
PE = 29, // 0 to 1000000
/**************************************************************************************************/
// Error messages.
NAME = '[big.js] ', INVALID = NAME + 'Invalid ', INVALID_DP = INVALID + 'decimal places', INVALID_RM = INVALID + 'rounding mode', DIV_BY_ZERO = NAME + 'Division by zero', UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
/*
 * Create and return a Big constructor.
 *
 */
function _Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
        var x = this;
        // Enable constructor usage without new.
        if (!(x instanceof Big))
            return n === UNDEFINED ? _Big_() : new Big(n);
        // Duplicate.
        if (n instanceof Big) {
            x.s = n.s;
            x.e = n.e;
            x.c = n.c.slice();
            normalize(x);
        }
        else {
            parse(x, n);
        }
        /*
         * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
         * points to Object.
         */
        x.constructor = Big;
    }
    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.version = '5.2.2';
    return Big;
}
function normalize(x) {
    x = round(x, DP, 0);
    if (x.c.length > 1 && !x.c[0]) {
        let i = x.c.findIndex(x => x);
        x.c = x.c.slice(i);
        x.e = x.e - i;
    }
}
/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
    var e, i, nl;
    // Minus zero?
    if (n === 0 && 1 / n < 0)
        n = '-0';
    else if (!NUMERIC.test(n += ''))
        throw Error(INVALID + 'number');
    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;
    // Decimal point?
    if ((e = n.indexOf('.')) > -1)
        n = n.replace('.', '');
    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {
        // Determine exponent.
        if (e < 0)
            e = i;
        e += +n.slice(i + 1);
        n = n.substring(0, i);
    }
    else if (e < 0) {
        // Integer.
        e = n.length;
    }
    nl = n.length;
    // Determine leading zeros before decimal point.
    for (i = 0; i < e && i < nl && n.charAt(i) == '0';)
        ++i;
    // older version (ignores decimal point).
    // // Determine leading zeros.
    // for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
    if (i == nl) {
        // Zero.
        x.c = [x.e = 0];
    }
    else {
        x.e = e - i - 1;
        x.c = [];
        // Convert string to array of digits without leading zeros
        for (e = 0; i < nl;)
            x.c[e++] = +n.charAt(i++);
        // older version (doesn't keep trailing zeroes).
        // // Determine trailing zeros.
        // for (; nl > 0 && n.charAt(--nl) == '0';);
        // // Convert string to array of digits without leading/trailing zeros.
        // for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }
    x = round(x, Big.DP, Big.RM);
    return x;
}
/*
 * Round Big x to a maximum of dp decimal places using rounding mode rm.
 * Called by stringify, P.div, P.round and P.sqrt.
 *
 * x {Big} The Big to round.
 * dp {number} Integer, 0 to MAX_DP inclusive.
 * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, dp, rm, more) {
    var xc = x.c, i = x.e + dp + 1;
    if (i < xc.length) {
        if (rm === 1) {
            // xc[i] is the digit after the digit that may be rounded up.
            more = xc[i] >= 5;
        }
        else if (rm === 2) {
            more = xc[i] > 5 || xc[i] == 5 &&
                (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
        }
        else if (rm === 3) {
            more = more || !!xc[0];
        }
        else {
            more = false;
            if (rm !== 0)
                throw Error(INVALID_RM);
        }
        if (i < 1) {
            xc.length = 1;
            if (more) {
                // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                x.e = -dp;
                xc[0] = 1;
            }
            else {
                // Zero.
                xc[0] = x.e = 0;
            }
        }
        else {
            // Remove any digits after the required decimal places.
            xc.length = i--;
            // Round up?
            if (more) {
                // Rounding up may mean the previous digit has to be rounded up.
                for (; ++xc[i] > 9;) {
                    xc[i] = 0;
                    if (!i--) {
                        ++x.e;
                        xc.unshift(1);
                    }
                }
            }
            // Remove trailing zeros.
            for (i = xc.length; !xc[--i];)
                xc.pop();
        }
    }
    else if (rm < 0 || rm > 3 || rm !== ~~rm) {
        throw Error(INVALID_RM);
    }
    return x;
}
/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 *
 * x {Big}
 * id? {number} Caller id.
 *         1 toExponential
 *         2 toFixed
 *         3 toPrecision
 *         4 valueOf
 * n? {number|undefined} Caller's argument.
 * k? {number|undefined}
 */
function stringify(x, id, n, k) {
    var e, s, Big = x.constructor, z = !x.c[0];
    if (n !== UNDEFINED) {
        if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
            throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
        }
        x = new Big(x);
        // The index of the digit that may be rounded up.
        n = k - x.e;
        // Round?
        if (x.c.length > ++k)
            round(x, n, Big.RM);
        // toFixed: recalculate k as x.e may have changed if value rounded up.
        if (id == 2)
            k = x.e + n + 1;
        // Append zeros?
        for (; x.c.length < k;)
            x.c.push(0);
    }
    e = x.e;
    s = x.c.join('');
    n = s.length;
    // Exponential notation?
    if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
        s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;
        // Normal notation.
    }
    else if (e < 0) {
        for (; ++e;)
            s = '0' + s;
        s = '0.' + s;
    }
    else if (e > 0) {
        if (++e > n)
            for (e -= n; e--;)
                s += '0';
        else if (e < n)
            s = s.slice(0, e) + '.' + s.slice(e);
    }
    else if (n > 1) {
        s = s.charAt(0) + '.' + s.slice(1);
    }
    return x.s < 0 && (!z || id == 4) ? '-' + s : s;
}
// Prototype/instance methods
/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
};
/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
*/
P.cmp = function (y) {
    var isneg, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either zero?
    if (!xc[0] || !yc[0])
        return !xc[0] ? !yc[0] ? 0 : -j : i;
    // Signs differ?
    if (i != j)
        return i;
    isneg = i < 0;
    // Compare exponents.
    if (k != l)
        return k > l ^ isneg ? 1 : -1;
    // Compare digit by digit.
    j = Math.max(xc.length, yc.length);
    for (i = 0; i < j; i++) {
        k = i < xc.length ? xc[i] : 0;
        l = i < yc.length ? yc[i] : 0;
        if (k != l)
            return k > l ^ isneg ? 1 : -1;
    }
    return 0;
    // old version (doesn't compare well trailing zeroes, e.g. 1.0 with 1.00)
    // j = (k = xc.length) < (l = yc.length) ? k : l;
    // // Compare digit by digit.
    // for (i = -1; ++i < j;) {
    //   if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    // }
    // // Compare lengths.
    // return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
    var Big = this.constructor, x = new Big(this), y = new Big(y), a = x.c, // dividend
    b = y.c, // divisor
    k = x.s == y.s ? 1 : -1, dp = Big.DP;
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP)
        throw Error(INVALID_DP);
    // Divisor is zero?
    if (!b[0])
        throw Error(DIV_BY_ZERO);
    // Dividend is 0? Return +-0.
    if (!a[0])
        return new Big(k * 0);
    var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), // remainder
    rl = r.length, q = y, // quotient
    qc = q.c = [], qi = 0, d = dp + (q.e = x.e - y.e) + 1; // number of digits of the result
    q.s = k;
    k = d < 0 ? 0 : d;
    // Create version of divisor with leading zero.
    bz.unshift(0);
    // Add zeros to make remainder as long as divisor.
    for (; rl++ < bl;)
        r.push(0);
    do {
        // n is how many times the divisor goes into current remainder.
        for (n = 0; n < 10; n++) {
            // Compare divisor and remainder.
            if (bl != (rl = r.length)) {
                cmp = bl > rl ? 1 : -1;
            }
            else {
                for (ri = -1, cmp = 0; ++ri < bl;) {
                    if (b[ri] != r[ri]) {
                        cmp = b[ri] > r[ri] ? 1 : -1;
                        break;
                    }
                }
            }
            // If divisor < remainder, subtract divisor from remainder.
            if (cmp < 0) {
                // Remainder can't be more than 1 digit longer than divisor.
                // Equalise lengths using divisor with extra leading zero?
                for (bt = rl == bl ? b : bz; rl;) {
                    if (r[--rl] < bt[rl]) {
                        ri = rl;
                        for (; ri && !r[--ri];)
                            r[ri] = 9;
                        --r[ri];
                        r[rl] += 10;
                    }
                    r[rl] -= bt[rl];
                }
                for (; !r[0];)
                    r.shift();
            }
            else {
                break;
            }
        }
        // Add the digit n to the result array.
        qc[qi++] = cmp ? n : ++n;
        // Update the remainder.
        if (r[0] && cmp)
            r[rl] = a[ai] || 0;
        else
            r = [a[ai]];
    } while ((ai++ < al || r[0] !== UNDEFINED) && k--);
    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {
        // There can't be more than one zero.
        qc.shift();
        q.e--;
    }
    // Round?
    if (qi > d)
        round(q, dp, Big.RM, r[0] !== UNDEFINED);
    return q;
};
/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
    return !this.cmp(y);
};
/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
    return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
    return this.cmp(y) > -1;
};
/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
    return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
    return this.cmp(y) < 1;
};
/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
    var i, j, t, xlty, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.plus(y);
    }
    var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        // y is non-zero? x is non-zero? Or both are zero.
        return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
    }
    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {
        if (xlty = a < 0) {
            a = -a;
            t = xc;
        }
        else {
            ye = xe;
            t = yc;
        }
        t.reverse();
        for (b = a; b--;)
            t.push(0);
        t.reverse();
    }
    else {
        // Exponents equal. Check digit by digit.
        j = ((xlty = xc.length < yc.length) ? xc : yc).length;
        for (a = b = 0; b < j; b++) {
            if (xc[b] != yc[b]) {
                xlty = xc[b] < yc[b];
                break;
            }
        }
    }
    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
        t = xc;
        xc = yc;
        yc = t;
        y.s = -y.s;
    }
    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */
    if ((b = (j = yc.length) - (i = xc.length)) > 0)
        for (; b--;)
            xc[i++] = 0;
    // Subtract yc from xc.
    for (b = i; j > a;) {
        if (xc[--j] < yc[j]) {
            for (i = j; i && !xc[--i];)
                xc[i] = 9;
            --xc[i];
            xc[j] += 10;
        }
        xc[j] -= yc[j];
    }
    // Remove trailing zeros.
    for (; xc[--b] === 0;)
        xc.pop();
    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] === 0;) {
        xc.shift();
        --ye;
    }
    if (!xc[0]) {
        // n - n = +0
        y.s = 1;
        // Result must be zero.
        xc = [ye = 0];
    }
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
    var ygtx, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    if (!y.c[0])
        throw Error(DIV_BY_ZERO);
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx)
        return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
};
/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
    var t, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.minus(y);
    }
    var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
    // Either zero? y is non-zero? x is non-zero? Or both are zero.
    if (!xc[0] || !yc[0])
        return yc[0] ? y : new Big(xc[0] ? x : a * 0);
    xc = xc.slice();
    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (a = xe - ye) {
        if (a > 0) {
            ye = xe;
            t = yc;
        }
        else {
            a = -a;
            t = xc;
        }
        t.reverse();
        for (; a--;)
            t.push(0);
        t.reverse();
    }
    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
        t = yc;
        yc = xc;
        xc = t;
    }
    a = yc.length;
    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for (b = 0; a; xc[a] %= 10)
        b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    if (b) {
        xc.unshift(b);
        ++ye;
    }
    // Remove trailing zeros.
    for (a = xc.length; xc[--a] === 0;)
        xc.pop();
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
    var Big = this.constructor, x = new Big(this), y = new Big(1), one = new Big(1), isneg = n < 0;
    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER)
        throw Error(INVALID + 'exponent');
    if (isneg)
        n = -n;
    for (;;) {
        if (n & 1)
            y = y.times(x);
        n >>= 1;
        if (!n)
            break;
        x = x.times(x);
    }
    return isneg ? one.div(y) : y;
};
/*
 * Return a new Big whose value is the value of this Big rounded using rounding mode rm
 * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
 * multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 * If rm is not specified, use Big.RM.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
 */
P.round = function (dp, rm) {
    var Big = this.constructor;
    if (dp === UNDEFINED)
        dp = 0;
    else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP)
        throw Error(INVALID_DP);
    return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
};
/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
    var r, c, t, Big = this.constructor, x = new Big(this), s = x.s, e = x.e, half = new Big(0.5);
    // Zero?
    if (!x.c[0])
        return new Big(x);
    // Negative?
    if (s < 0)
        throw Error(NAME + 'No square root');
    // Estimate.
    s = Math.sqrt(x + '');
    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
        c = x.c.join('');
        if (!(c.length + e & 1))
            c += '0';
        s = Math.sqrt(c);
        e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    }
    else {
        r = new Big(s);
    }
    e = r.e + (Big.DP += 4);
    // Newton-Raphson iteration.
    do {
        t = r;
        r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));
    return round(r, Big.DP -= 4, Big.RM);
};
/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
    var c, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, a = xc.length, b = yc.length, i = x.e, j = y.e;
    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;
    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0])
        return new Big(y.s * 0);
    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;
    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
        c = xc;
        xc = yc;
        yc = c;
        j = a;
        a = b;
        b = j;
    }
    // Initialise coefficient array of result with zeros.
    for (c = new Array(j = a + b); j--;)
        c[j] = 0;
    // Multiply.
    // i is initially xc.length.
    for (i = b; i--;) {
        b = 0;
        // a is yc.length.
        for (j = a + i; j > i;) {
            // Current sum of products at this digit position, plus carry.
            b = c[j] + yc[i] * xc[j - i - 1] + b;
            c[j--] = b % 10;
            // carry
            b = b / 10 | 0;
        }
        c[j] = (c[j] + b) % 10;
    }
    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b)
        ++y.e;
    else
        c.shift();
    // Remove trailing zeros.
    for (i = c.length; !c[--i];)
        c.pop();
    y.c = c;
    return y;
};
/*
 * Return a string representing the value of this Big in exponential notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 */
P.toExponential = function (dp) {
    return stringify(this, 1, dp, dp);
};
/*
 * Return a string representing the value of this Big in normal notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp) {
    return stringify(this, 2, dp, this.e + dp);
};
/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Integer, 1 to MAX_DP inclusive.
 */
P.toPrecision = function (sd) {
    return stringify(this, 3, sd, sd - 1);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P.toString = function () {
    return stringify(this);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
};
// Export
var Big = _Big_();
/* harmony default export */ __webpack_exports__["default"] = (Big);
//# sourceMappingURL=big.js.map

/***/ }),

/***/ "./.fable/fable-library.2.4.11/lib/long.js":
/*!*************************************************!*\
  !*** ./.fable/fable-library.2.4.11/lib/long.js ***!
  \*************************************************/
/*! exports provided: default, Long, isLong, fromInt, fromNumber, fromBits, fromString, fromValue, ZERO, UZERO, ONE, UONE, NEG_ONE, MAX_VALUE, MAX_UNSIGNED_VALUE, MIN_VALUE, toInt, toNumber, toString, getHighBits, getHighBitsUnsigned, getLowBits, getLowBitsUnsigned, getNumBitsAbs, isZero, isNegative, isPositive, isOdd, isEven, equals, notEquals, lessThan, lessThanOrEqual, greaterThan, greaterThanOrEqual, compare, negate, add, subtract, multiply, divide, modulo, not, and, or, xor, shiftLeft, shiftRight, shiftRightUnsigned, rotateLeft, rotateRight, toSigned, toUnsigned, toBytes, toBytesLE, toBytesBE, fromBytes, fromBytesLE, fromBytesBE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Long", function() { return Long; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLong", function() { return isLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInt", function() { return fromInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNumber", function() { return fromNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBits", function() { return fromBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValue", function() { return fromValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UZERO", function() { return UZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UONE", function() { return UONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEG_ONE", function() { return NEG_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_VALUE", function() { return MAX_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_UNSIGNED_VALUE", function() { return MAX_UNSIGNED_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_VALUE", function() { return MIN_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighBits", function() { return getHighBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighBitsUnsigned", function() { return getHighBitsUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowBits", function() { return getLowBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowBitsUnsigned", function() { return getLowBitsUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumBitsAbs", function() { return getNumBitsAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isZero", function() { return isZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNegative", function() { return isNegative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPositive", function() { return isPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOdd", function() { return isOdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEven", function() { return isEven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEquals", function() { return notEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThan", function() { return lessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThanOrEqual", function() { return lessThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThan", function() { return greaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThanOrEqual", function() { return greaterThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return modulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return xor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftLeft", function() { return shiftLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftRight", function() { return shiftRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftRightUnsigned", function() { return shiftRightUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateLeft", function() { return rotateLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRight", function() { return rotateRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSigned", function() { return toSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnsigned", function() { return toUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBytes", function() { return toBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBytesLE", function() { return toBytesLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBytesBE", function() { return toBytesBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBytes", function() { return fromBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBytesLE", function() { return fromBytesLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBytesBE", function() { return fromBytesBE; });
// Adapted from: https://github.com/dcodeIO/long.js/blob/master/src/long.js
// Apache License 2.0: https://github.com/dcodeIO/long.js/blob/master/LICENSE
/* harmony default export */ __webpack_exports__["default"] = (Long);
/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;
try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
    ])), {}).exports;
}
catch (e) {
    // no wasm support :(
}
/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {
    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;
    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;
    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}
Long.prototype.GetHashCode = function () {
    let h1 = this.unsigned ? 1 : 0;
    h1 = ((h1 << 5) + h1) ^ this.high;
    h1 = ((h1 << 5) + h1) ^ this.low;
    return h1;
};
Long.prototype.Equals = function (x) { return equals(this, x); };
Long.prototype.CompareTo = function (x) { return compare(this, x); };
Long.prototype.toString = function (radix) { return toString(this, radix); };
Long.prototype.toJSON = function () { return toString(this); };
// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.
/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", { value: true });
/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
// Long.isLong = isLong;
/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    }
    else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}
/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromInt = fromInt;
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    }
    else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return negate(fromNumber(-value, unsigned));
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}
/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromNumber = fromNumber;
/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromBits = fromBits;
/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
            unsigned = false;
    }
    else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return negate(fromString(str.substring(1), unsigned, radix));
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = add(multiply(result, power), fromNumber(value));
        }
        else {
            result = multiply(result, radixToPower);
            result = add(result, fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
// Long.fromString = fromString;
/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
// Long.fromValue = fromValue;
// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);
/**
 * Signed zero.
 * @type {!Long}
 */
// Long.ZERO = ZERO;
/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);
/**
 * Unsigned zero.
 * @type {!Long}
 */
// Long.UZERO = UZERO;
/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);
/**
 * Signed one.
 * @type {!Long}
 */
// Long.ONE = ONE;
/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);
/**
 * Unsigned one.
 * @type {!Long}
 */
// Long.UONE = UONE;
/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);
/**
 * Signed negative one.
 * @type {!Long}
 */
// Long.NEG_ONE = NEG_ONE;
/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
/**
 * Maximum signed value.
 * @type {!Long}
 */
// Long.MAX_VALUE = MAX_VALUE;
/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
/**
 * Maximum unsigned value.
 * @type {!Long}
 */
// Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
/**
 * Minimum signed value.
 * @type {!Long}
 */
// Long.MIN_VALUE = MIN_VALUE;
/**
 * @alias Long.prototype
 * @inner
 */
// var LongPrototype = Long.prototype;
/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @this {!Long}
 * @returns {number}
 */
function toInt($this) {
    return $this.unsigned ? $this.low >>> 0 : $this.low;
}
;
/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @this {!Long}
 * @returns {number}
 */
function toNumber($this) {
    if ($this.unsigned)
        return (($this.high >>> 0) * TWO_PWR_32_DBL) + ($this.low >>> 0);
    return $this.high * TWO_PWR_32_DBL + ($this.low >>> 0);
}
;
/**
 * Converts the Long to a string written in the specified radix.
 * @this {!Long}
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
function toString($this, radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (isZero($this))
        return '0';
    if (isNegative($this)) { // Unsigned Longs are never negative
        if (equals($this, MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix), div = divide($this, radixLong), rem1 = subtract(multiply(div, radixLong), $this);
            return toString(div, radix) + toInt(rem1).toString(radix);
        }
        else
            return '-' + toString(negate($this), radix);
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), $this.unsigned), rem = $this;
    var result = '';
    while (true) {
        var remDiv = divide(rem, radixToPower), intval = toInt(subtract(rem, multiply(remDiv, radixToPower))) >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if (isZero(rem))
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
}
;
/**
 * Gets the high 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed high bits
 */
function getHighBits($this) {
    return $this.high;
}
;
/**
 * Gets the high 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned high bits
 */
function getHighBitsUnsigned($this) {
    return $this.high >>> 0;
}
;
/**
 * Gets the low 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed low bits
 */
function getLowBits($this) {
    return $this.low;
}
;
/**
 * Gets the low 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned low bits
 */
function getLowBitsUnsigned($this) {
    return $this.low >>> 0;
}
;
/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @this {!Long}
 * @returns {number}
 */
function getNumBitsAbs($this) {
    if (isNegative($this)) // Unsigned Longs are never negative
        return equals($this, MIN_VALUE) ? 64 : getNumBitsAbs(negate($this));
    var val = $this.high != 0 ? $this.high : $this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return $this.high != 0 ? bit + 33 : bit + 1;
}
;
/**
 * Tests if this Long's value equals zero.
 * @this {!Long}
 * @returns {boolean}
 */
function isZero($this) {
    return $this.high === 0 && $this.low === 0;
}
;
/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
// LongPrototype.eqz = LongPrototype.isZero;
/**
 * Tests if this Long's value is negative.
 * @this {!Long}
 * @returns {boolean}
 */
function isNegative($this) {
    return !$this.unsigned && $this.high < 0;
}
;
/**
 * Tests if this Long's value is positive.
 * @this {!Long}
 * @returns {boolean}
 */
function isPositive($this) {
    return $this.unsigned || $this.high >= 0;
}
;
/**
 * Tests if this Long's value is odd.
 * @this {!Long}
 * @returns {boolean}
 */
function isOdd($this) {
    return ($this.low & 1) === 1;
}
;
/**
 * Tests if this Long's value is even.
 * @this {!Long}
 * @returns {boolean}
 */
function isEven($this) {
    return ($this.low & 1) === 0;
}
;
/**
 * Tests if this Long's value equals the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function equals($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    if ($this.unsigned !== other.unsigned && ($this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return $this.high === other.high && $this.low === other.low;
}
;
/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.eq = LongPrototype.equals;
/**
 * Tests if this Long's value differs from the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function notEquals($this, other) {
    return !equals($this, /* validates */ other);
}
;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.neq = LongPrototype.notEquals;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ne = LongPrototype.notEquals;
/**
 * Tests if this Long's value is less than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function lessThan($this, other) {
    return compare($this, /* validates */ other) < 0;
}
;
/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lt = LongPrototype.lessThan;
/**
 * Tests if this Long's value is less than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function lessThanOrEqual($this, other) {
    return compare($this, /* validates */ other) <= 0;
}
;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lte = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.le = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is greater than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function greaterThan($this, other) {
    return compare($this, /* validates */ other) > 0;
}
;
/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gt = LongPrototype.greaterThan;
/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function greaterThanOrEqual($this, other) {
    return compare($this, /* validates */ other) >= 0;
}
;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gte = LongPrototype.greaterThanOrEqual;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ge = LongPrototype.greaterThanOrEqual;
/**
 * Compares this Long's value with the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
function compare($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    if (equals($this, other))
        return 0;
    var thisNeg = isNegative($this), otherNeg = isNegative(other);
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!$this.unsigned)
        return isNegative(subtract($this, other)) ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > ($this.high >>> 0) || (other.high === $this.high && (other.low >>> 0) > ($this.low >>> 0)) ? -1 : 1;
}
;
/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
// LongPrototype.comp = LongPrototype.compare;
/**
 * Negates this Long's value.
 * @this {!Long}
 * @returns {!Long} Negated Long
 */
function negate($this) {
    if (!$this.unsigned && equals($this, MIN_VALUE))
        return MIN_VALUE;
    return add(not($this), ONE);
}
;
/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
// LongPrototype.neg = LongPrototype.negate;
/**
 * Returns the sum of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
function add($this, addend) {
    if (!isLong(addend))
        addend = fromValue(addend);
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 0xFFFF;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 0xFFFF;
    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, $this.unsigned);
}
;
/**
 * Returns the difference of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
function subtract($this, subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return add($this, negate(subtrahend));
}
;
/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
// LongPrototype.sub = LongPrototype.subtract;
/**
 * Returns the product of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
function multiply($this, multiplier) {
    if (isZero($this))
        return $this.unsigned ? UZERO : ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);
    // use wasm support if present
    if (wasm) {
        var low = wasm.mul($this.low, $this.high, multiplier.low, multiplier.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    if (isZero(multiplier))
        return $this.unsigned ? UZERO : ZERO;
    if (equals($this, MIN_VALUE))
        return isOdd(multiplier) ? MIN_VALUE : ZERO;
    if (equals(multiplier, MIN_VALUE))
        return isOdd($this) ? MIN_VALUE : ZERO;
    if (isNegative($this)) {
        if (isNegative(multiplier))
            return multiply(negate($this), negate(multiplier));
        else
            return negate(multiply(negate($this), multiplier));
    }
    else if (isNegative(multiplier))
        return negate(multiply($this, negate(multiplier)));
    // If both longs are small, use float multiplication
    if (lessThan($this, TWO_PWR_24) && lessThan(multiplier, TWO_PWR_24))
        return fromNumber(toNumber($this) * toNumber(multiplier), $this.unsigned);
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 0xFFFF;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 0xFFFF;
    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, $this.unsigned);
}
;
/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
// LongPrototype.mul = LongPrototype.multiply;
/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
function divide($this, divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (isZero(divisor))
        throw Error('division by zero');
    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!$this.unsigned &&
            $this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return $this;
        }
        var low = ($this.unsigned ? wasm.div_u : wasm.div_s)($this.low, $this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    if (isZero($this))
        return $this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!$this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (equals($this, MIN_VALUE)) {
            if (equals(divisor, ONE) || equals(divisor, NEG_ONE))
                return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
            else if (equals(divisor, MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = shiftRight($this, 1);
                approx = shiftLeft(divide(halfThis, divisor), 1);
                if (equals(approx, ZERO)) {
                    return isNegative(divisor) ? ONE : NEG_ONE;
                }
                else {
                    rem = subtract($this, multiply(divisor, approx));
                    res = add(approx, divide(rem, divisor));
                    return res;
                }
            }
        }
        else if (equals(divisor, MIN_VALUE))
            return $this.unsigned ? UZERO : ZERO;
        if (isNegative($this)) {
            if (isNegative(divisor))
                return divide(negate($this), negate(divisor));
            return negate(divide(negate($this), divisor));
        }
        else if (isNegative(divisor))
            return negate(divide($this, negate(divisor)));
        res = ZERO;
    }
    else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = toUnsigned(divisor);
        if (greaterThan(divisor, $this))
            return UZERO;
        if (greaterThan(divisor, shiftRightUnsigned($this, 1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = $this;
    while (greaterThanOrEqual(rem, divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(toNumber(rem) / toNumber(divisor)));
        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48), 
        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
        approxRes = fromNumber(approx), approxRem = multiply(approxRes, divisor);
        while (isNegative(approxRem) || greaterThan(approxRem, rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, $this.unsigned);
            approxRem = multiply(approxRes, divisor);
        }
        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (isZero(approxRes))
            approxRes = ONE;
        res = add(res, approxRes);
        rem = subtract(rem, approxRem);
    }
    return res;
}
;
/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
// LongPrototype.div = LongPrototype.divide;
/**
 * Returns this Long modulo the specified.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
function modulo($this, divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    // use wasm support if present
    if (wasm) {
        var low = ($this.unsigned ? wasm.rem_u : wasm.rem_s)($this.low, $this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    return subtract($this, multiply(divide($this, divisor), divisor));
}
;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.mod = LongPrototype.modulo;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.rem = LongPrototype.modulo;
/**
 * Returns the bitwise NOT of this Long.
 * @this {!Long}
 * @returns {!Long}
 */
function not($this) {
    return fromBits(~$this.low, ~$this.high, $this.unsigned);
}
;
/**
 * Returns the bitwise AND of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function and($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low & other.low, $this.high & other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise OR of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function or($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low | other.low, $this.high | other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise XOR of this Long and the given one.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function xor($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low ^ other.low, $this.high ^ other.high, $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftLeft($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    if ((numBits &= 63) === 0)
        return $this;
    else if (numBits < 32)
        return fromBits($this.low << numBits, ($this.high << numBits) | ($this.low >>> (32 - numBits)), $this.unsigned);
    else
        return fromBits(0, $this.low << (numBits - 32), $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shl = LongPrototype.shiftLeft;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftRight($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    if ((numBits &= 63) === 0)
        return $this;
    else if (numBits < 32)
        return fromBits(($this.low >>> numBits) | ($this.high << (32 - numBits)), $this.high >> numBits, $this.unsigned);
    else
        return fromBits($this.high >> (numBits - 32), $this.high >= 0 ? 0 : -1, $this.unsigned);
}
;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr = LongPrototype.shiftRight;
/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftRightUnsigned($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    numBits &= 63;
    if (numBits === 0)
        return $this;
    else {
        var high = $this.high;
        if (numBits < 32) {
            var low = $this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, $this.unsigned);
        }
        else if (numBits === 32)
            return fromBits(high, 0, $this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, $this.unsigned);
    }
}
;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shru = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits rotated to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
const rotateLeft = function rotateLeft(numBits) {
    var b;
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.low << numBits) | (this.high >>> b)), ((this.high << numBits) | (this.low >>> b)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.high << numBits) | (this.low >>> b)), ((this.low << numBits) | (this.high >>> b)), this.unsigned);
};
/**
 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotl = LongPrototype.rotateLeft;
/**
 * Returns this Long with bits rotated to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
const rotateRight = function rotateRight(numBits) {
    var b;
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.high << b) | (this.low >>> numBits)), ((this.low << b) | (this.high >>> numBits)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.low << b) | (this.high >>> numBits)), ((this.high << b) | (this.low >>> numBits)), this.unsigned);
};
/**
 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotr = LongPrototype.rotateRight;
/**
 * Converts this Long to signed.
 * @this {!Long}
 * @returns {!Long} Signed long
 */
function toSigned($this) {
    if (!$this.unsigned)
        return $this;
    return fromBits($this.low, $this.high, false);
}
;
/**
 * Converts this Long to unsigned.
 * @this {!Long}
 * @returns {!Long} Unsigned long
 */
function toUnsigned($this) {
    if ($this.unsigned)
        return $this;
    return fromBits($this.low, $this.high, true);
}
;
/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @this {!Long}
 * @returns {!Array.<number>} Byte representation
 */
function toBytes($this, le) {
    return le ? toBytesLE($this) : toBytesBE($this);
}
;
/**
 * Converts this Long to its little endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Little endian byte representation
 */
function toBytesLE($this) {
    var hi = $this.high, lo = $this.low;
    return [
        lo & 0xff,
        lo >>> 8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24,
        hi & 0xff,
        hi >>> 8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
}
;
/**
 * Converts this Long to its big endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Big endian byte representation
 */
function toBytesBE($this) {
    var hi = $this.high, lo = $this.low;
    return [
        hi >>> 24,
        hi >>> 16 & 0xff,
        hi >>> 8 & 0xff,
        hi & 0xff,
        lo >>> 24,
        lo >>> 16 & 0xff,
        lo >>> 8 & 0xff,
        lo & 0xff
    ];
}
;
/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
function fromBytes(bytes, unsigned, le) {
    return le ? fromBytesLE(bytes, unsigned) : fromBytesBE(bytes, unsigned);
}
;
/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
function fromBytesLE(bytes, unsigned) {
    return new Long(bytes[0] |
        bytes[1] << 8 |
        bytes[2] << 16 |
        bytes[3] << 24, bytes[4] |
        bytes[5] << 8 |
        bytes[6] << 16 |
        bytes[7] << 24, unsigned);
}
;
/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
function fromBytesBE(bytes, unsigned) {
    return new Long(bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] << 8 |
        bytes[7], bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] << 8 |
        bytes[3], unsigned);
}
;
//# sourceMappingURL=long.js.map

/***/ }),

/***/ "./src/App.fs":
/*!********************!*\
  !*** ./src/App.fs ***!
  \********************/
/*! exports provided: permalink, facebook, awaitAnimationFrame, findTwitterFrame, twitter, gen, $007CC$007C_$007C, $007CE$007C_$007C, concat, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permalink", function() { return permalink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebook", function() { return facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitAnimationFrame", function() { return awaitAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTwitterFrame", function() { return findTwitterFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitter", function() { return twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gen", function() { return gen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$007CC$007C_$007C", function() { return $007CC$007C_$007C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$007CE$007C_$007C", function() { return $007CE$007C_$007C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _fable_fable_library_2_4_11_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/String.js */ "./.fable/fable-library.2.4.11/String.js");
/* harmony import */ var _fable_fable_library_2_4_11_Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Util.js */ "./.fable/fable-library.2.4.11/Util.js");
/* harmony import */ var _Prelude_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prelude.fs */ "./src/Prelude.fs");
/* harmony import */ var _fable_fable_library_2_4_11_Async_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Async.js */ "./.fable/fable-library.2.4.11/Async.js");
/* harmony import */ var _fable_fable_library_2_4_11_AsyncBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/AsyncBuilder.js */ "./.fable/fable-library.2.4.11/AsyncBuilder.js");
/* harmony import */ var _fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/List.js */ "./.fable/fable-library.2.4.11/List.js");
/* harmony import */ var _Rand_fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rand.fs */ "./src/Rand.fs");
/* harmony import */ var _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _fable_fable_library_2_4_11_Option_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Option.js */ "./.fable/fable-library.2.4.11/Option.js");
/* harmony import */ var _Pitch_Old_fs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pitch.Old.fs */ "./src/Pitch.Old.fs");
/* harmony import */ var _Pitch_fs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pitch.fs */ "./src/Pitch.fs");
/* harmony import */ var _fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Seq.js */ "./.fable/fable-library.2.4.11/Seq.js");
/* harmony import */ var _fable_fable_library_2_4_11_Array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Array.js */ "./.fable/fable-library.2.4.11/Array.js");













function permalink(version, seed) {
  const loc = window.location.href;
  const path = Object(_fable_fable_library_2_4_11_String_js__WEBPACK_IMPORTED_MODULE_0__["split"])(loc, ["?"], null, 0)[0];
  return path + "?" + Object(_fable_fable_library_2_4_11_Util_js__WEBPACK_IMPORTED_MODULE_1__["int32ToString"])(version) + "." + Object(_Prelude_fs__WEBPACK_IMPORTED_MODULE_2__["Base64$$$toB64"])(seed);
}
function facebook(id) {
  const d = document;
  const fjs = d.getElementsByTagName("script")[0];

  if (d.getElementById(id) == null) {
    let js;
    const value = d.createElement("script");
    js = value;
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    const value$$1 = fjs.parentNode.insertBefore(js, fjs);
    value$$1, null;
  }
}
function awaitAnimationFrame() {
  const arg00 = function arg00(tupledArg) {
    const cont = tupledArg[0];
    const value$$2 = window.requestAnimationFrame(cont);
    value$$2, null;
  };

  return Object(_fable_fable_library_2_4_11_Async_js__WEBPACK_IMPORTED_MODULE_3__["fromContinuations"])(arg00);
}
function findTwitterFrame(n) {
  const builder$0040 = _fable_fable_library_2_4_11_AsyncBuilder_js__WEBPACK_IMPORTED_MODULE_4__["singleton"];
  return builder$0040.Delay(function () {
    let tweet;
    const value$$3 = document.getElementsByTagName("iframe")[0];
    tweet = value$$3;
    return tweet == null ? n !== 0 ? builder$0040.Bind(Object(_fable_fable_library_2_4_11_Async_js__WEBPACK_IMPORTED_MODULE_3__["sleep"])(100), function () {
      return builder$0040.ReturnFrom(findTwitterFrame(n - 1));
    }) : builder$0040.Return(null) : builder$0040.Return(tweet);
  });
}
function twitter(pitch, version$$1, seed$$1) {
  const url = permalink(version$$1, seed$$1);
  const urlAndHash = 280 - (url.length + 14) | 0;
  const sample = pitch.length > urlAndHash ? pitch.substr(0, urlAndHash - 3) + "..." : pitch;
  let tweetFrame;
  const value$$4 = document.getElementsByTagName("iframe")[0];
  tweetFrame = value$$4;

  if (!(tweetFrame == null)) {
    tweetFrame.remove();
  }

  const btn = document.createElement("a");
  btn.className = "twitter-share-button";
  btn.setAttribute("href", "http://twitter.com/share");
  btn.setAttribute("data-url", permalink(version$$1, seed$$1));
  btn.setAttribute("data-text", sample);
  btn.setAttribute("data-hashtags", "pitchotron");
  const twt = document.getElementById("twitter");
  const prevBtn = twt.getElementsByClassName("twitter-share-button")[0];

  if (!(prevBtn == null)) {
    const value$$5 = twt.replaceChild(btn, prevBtn);
    value$$5, null;
  } else {
    const value$$6 = twt.appendChild(btn);
    value$$6, null;
  }

  try {
    twttr.widgets.load();
  } catch (ex) {
    console.error(ex.message);
  }
}
function gen($offset$$11, $rand$$12, $wordCount$$13, $pitchls$$14, $node$$15) {
  gen: while (true) {
    const offset = $offset$$11,
          rand = $rand$$12,
          wordCount = $wordCount$$13,
          pitchls = $pitchls$$14,
          node = $node$$15;

    if (wordCount === 0) {
      return [rand, 0, pitchls];
    } else {
      switch (node.tag) {
        case 1:
          {
            const ss = node.fields[0];
            return Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_5__["fold"])(function (tupledArg$$1, node$$1) {
              return gen(offset, tupledArg$$1[0], tupledArg$$1[1], tupledArg$$1[2], node$$1);
            }, [rand, wordCount, pitchls], ss);
          }

        case 2:
          {
            const alts = node.fields[0];
            const choices = Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_5__["length"])(alts) | 0;
            const patternInput = Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$next"])(rand, wordCount === 1 ? offset : 0);
            const rand$$2 = patternInput[1];
            const r = patternInput[0] | 0;
            const alt = Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_5__["item"])(r % choices, alts);
            $offset$$11 = offset;
            $rand$$12 = rand$$2;
            $wordCount$$13 = wordCount;
            $pitchls$$14 = pitchls;
            $node$$15 = alt;
            continue gen;
          }

        default:
          {
            const s = node.fields[0];
            return [rand, wordCount - 1, Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_5__["append"])(pitchls, new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](s, new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"]()))];
          }
      }
    }

    break;
  }
}
function $007CC$007C_$007C(c, s$$1) {
  if (s$$1.indexOf(c) === 0) {
    return Object(_fable_fable_library_2_4_11_Option_js__WEBPACK_IMPORTED_MODULE_8__["some"])(null);
  } else {
    return null;
  }
}
function $007CE$007C_$007C(c$$1, s$$2) {
  if (Object(_fable_fable_library_2_4_11_String_js__WEBPACK_IMPORTED_MODULE_0__["endsWith"])(s$$2, c$$1)) {
    return Object(_fable_fable_library_2_4_11_Option_js__WEBPACK_IMPORTED_MODULE_8__["some"])(null);
  } else {
    return null;
  }
}
function concat(ls) {
  const loop = function loop($result$$21, $_arg1$$2$$22) {
    loop: while (true) {
      const result = $result$$21,
            _arg1$$2 = $_arg1$$2$$22;
      var $target$$23, next, h, tail;

      if (_arg1$$2.tail != null) {
        if (_arg1$$2.head === " ") {
          $target$$23 = 1;
          next = _arg1$$2.tail;
        } else {
          const activePatternResult140 = $007CC$007C_$007C(".", _arg1$$2.head);

          if (activePatternResult140 != null) {
            $target$$23 = 2;
            h = _arg1$$2.head;
            tail = _arg1$$2.tail;
          } else {
            const activePatternResult141 = $007CC$007C_$007C(",", _arg1$$2.head);

            if (activePatternResult141 != null) {
              $target$$23 = 2;
              h = _arg1$$2.head;
              tail = _arg1$$2.tail;
            } else {
              $target$$23 = 3;
            }
          }
        }
      } else {
        $target$$23 = 0;
      }

      switch ($target$$23) {
        case 0:
          {
            let s$$3;
            let strings;
            const list = result;
            strings = Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_5__["reverse"])(list);
            s$$3 = Object(_fable_fable_library_2_4_11_String_js__WEBPACK_IMPORTED_MODULE_0__["join"])("", strings);
            return Object(_fable_fable_library_2_4_11_String_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(Object(_fable_fable_library_2_4_11_String_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(s$$3, " !", " !"), " ?", " ?");
          }

        case 1:
          {
            $result$$21 = result;
            $_arg1$$2$$22 = next;
            continue loop;
          }

        case 2:
          {
            $result$$21 = new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](h, result);
            $_arg1$$2$$22 = tail;
            continue loop;
          }

        case 3:
          {
            var $target$$24, h$$1, h2, tail$$1;

            if (_arg1$$2.tail != null) {
              const activePatternResult137 = $007CE$007C_$007C("'", _arg1$$2.head);

              if (activePatternResult137 != null) {
                if (_arg1$$2.tail.tail != null) {
                  $target$$24 = 0;
                  h$$1 = _arg1$$2.head;
                  h2 = _arg1$$2.tail.head;
                  tail$$1 = _arg1$$2.tail.tail;
                } else {
                  $target$$24 = 1;
                }
              } else {
                $target$$24 = 1;
              }
            } else {
              $target$$24 = 1;
            }

            switch ($target$$24) {
              case 0:
                {
                  $result$$21 = new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](h2, new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](h$$1, new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](" ", result)));
                  $_arg1$$2$$22 = tail$$1;
                  continue loop;
                }

              case 1:
                {
                  if (_arg1$$2.tail != null) {
                    const tail$$2 = _arg1$$2.tail;
                    const h$$2 = _arg1$$2.head;
                    $result$$21 = new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](h$$2, new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](" ", result));
                    $_arg1$$2$$22 = tail$$2;
                    continue loop;
                  } else {
                    throw new Error("The match cases were incomplete");
                  }
                }
            }
          }
      }

      break;
    }
  };

  return loop(new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](), ls);
}
function init() {
  facebook("facebook-jssdk");
  const div = document.getElementById("pitch");
  const btn$$1 = document.getElementById("generate");
  const lnk = document.getElementById("permalink");

  const change = function change(version$$2, rand$$3) {
    const builder$0040$$1 = _fable_fable_library_2_4_11_AsyncBuilder_js__WEBPACK_IMPORTED_MODULE_4__["singleton"];
    return builder$0040$$1.Delay(function () {
      const pitch$$1 = version$$2 === 0 ? _Pitch_Old_fs__WEBPACK_IMPORTED_MODULE_9__["pitch"] : _Pitch_fs__WEBPACK_IMPORTED_MODULE_10__["pitch"];
      lnk.href = permalink(version$$2, Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$seed"])(rand$$3));
      const patternInput$$1 = gen(10, rand$$3, 100, new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](), pitch$$1);
      const full = patternInput$$1[2];
      twitter(concat(full), version$$2, Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$seed"])(rand$$3));
      return builder$0040$$1.For(Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_11__["rangeNumber"])(1, 1, 100), function (_arg1$$3) {
        const wordCount$$2 = _arg1$$3 | 0;
        return builder$0040$$1.For(Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_11__["rangeNumber"])(0, 1, 10), function (_arg2$$1) {
          const offset$$1 = _arg2$$1 | 0;
          const patternInput$$2 = gen(offset$$1, rand$$3, wordCount$$2, new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_7__["List"](), pitch$$1);
          const result$$1 = patternInput$$2[2];
          const n$$1 = patternInput$$2[1] | 0;
          div.textContent = concat(result$$1);
          return builder$0040$$1.Combine(n$$1 !== 0 ? builder$0040$$1.Return() : builder$0040$$1.Zero(), builder$0040$$1.Delay(function () {
            return builder$0040$$1.Bind(Object(_fable_fable_library_2_4_11_Async_js__WEBPACK_IMPORTED_MODULE_3__["sleep"])(15), function () {
              return builder$0040$$1.Return();
            });
          }));
        });
      });
    });
  };

  let cancel = null;

  const generate = function generate(version$$3, seed$$2) {
    if (!(cancel == null)) {
      Object(_fable_fable_library_2_4_11_Async_js__WEBPACK_IMPORTED_MODULE_3__["cancel"])(cancel);
    }

    cancel = Object(_fable_fable_library_2_4_11_Async_js__WEBPACK_IMPORTED_MODULE_3__["createCancellationToken"])();
    Object(_fable_fable_library_2_4_11_Async_js__WEBPACK_IMPORTED_MODULE_3__["startImmediate"])(change(version$$3, seed$$2), cancel);
  };

  btn$$1.addEventListener("click", function (e) {
    const rand$$4 = Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$rand"])();
    history.pushState([1, Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$seed"])(rand$$4)], "Pitch", "/");
    generate(1, rand$$4);
    e.stopPropagation();
  });
  window.addEventListener("popstate", function (e$$1) {
    const event = e$$1;
    const patternInput$$3 = event.state;
    const version$$4 = patternInput$$3[0] | 0;
    const seed$$3 = patternInput$$3[1] | 0;
    let rand$$5;
    const seed$$4 = seed$$3 | 0;
    rand$$5 = Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$create"])(seed$$4);
    generate(version$$4, rand$$5);
    e$$1.stopPropagation();
  });

  const parseQuery = function parseQuery(query) {
    if (query.indexOf("?") === 0) {
      const q = query.substr(1);
      const matchValue$$2 = Object(_fable_fable_library_2_4_11_String_js__WEBPACK_IMPORTED_MODULE_0__["split"])(q, ".", 2, 0);
      var $target$$30, seed$$5, v;

      if (!Object(_fable_fable_library_2_4_11_Array_js__WEBPACK_IMPORTED_MODULE_12__["equalsWith"])(_fable_fable_library_2_4_11_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], matchValue$$2, null) ? matchValue$$2.length === 2 : false) {
        const activePatternResult157 = Object(_Prelude_fs__WEBPACK_IMPORTED_MODULE_2__["$007CInt$007C_$007C"])(matchValue$$2[0]);

        if (activePatternResult157 != null) {
          $target$$30 = 0;
          seed$$5 = matchValue$$2[1];
          v = activePatternResult157;
        } else {
          $target$$30 = 1;
        }
      } else {
        $target$$30 = 1;
      }

      switch ($target$$30) {
        case 0:
          {
            return [v, Object(_Prelude_fs__WEBPACK_IMPORTED_MODULE_2__["Base64$$$ofB64"])(seed$$5.split(""))];
          }

        case 1:
          {
            return null;
          }
      }
    } else {
      return null;
    }
  };

  let patternInput$$4;
  let option$$2;
  let option$$1;
  const option = parseQuery(window.location.search);
  option$$1 = Object(_fable_fable_library_2_4_11_Option_js__WEBPACK_IMPORTED_MODULE_8__["defaultArgWith"])(option, function ifNoneThunk() {
    const matchValue$$3 = history.state;

    if (Object(_fable_fable_library_2_4_11_Util_js__WEBPACK_IMPORTED_MODULE_1__["equals"])(matchValue$$3, null)) {
      return null;
    } else {
      const s$$4 = matchValue$$3;
      let arg0;
      const value$$7 = s$$4;
      arg0 = value$$7;
      return arg0;
    }
  });
  option$$2 = Object(_fable_fable_library_2_4_11_Option_js__WEBPACK_IMPORTED_MODULE_8__["map"])(function mapping(tupledArg$$2) {
    const v$$1 = tupledArg$$2[0] | 0;
    const s$$5 = tupledArg$$2[1] | 0;
    return [v$$1, Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$create"])(s$$5)];
  }, option$$1);
  patternInput$$4 = Object(_fable_fable_library_2_4_11_Option_js__WEBPACK_IMPORTED_MODULE_8__["defaultArgWith"])(option$$2, function defThunk() {
    return [1, Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$rand"])()];
  });
  const version$$5 = patternInput$$4[0] | 0;
  const rand$$6 = patternInput$$4[1];
  history.replaceState([version$$5, Object(_Rand_fs__WEBPACK_IMPORTED_MODULE_6__["RandModule$$$seed"])(rand$$6)], "Pitchotron", null);
  console.log("generate " + String(rand$$6));
  generate(version$$5, rand$$6);
}
init();

/***/ }),

/***/ "./src/App.fsproj":
/*!************************!*\
  !*** ./src/App.fsproj ***!
  \************************/
/*! exports provided: permalink, facebook, awaitAnimationFrame, findTwitterFrame, twitter, gen, $007CC$007C_$007C, $007CE$007C_$007C, concat, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.fs */ "./src/App.fs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permalink", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["permalink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "facebook", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["facebook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "awaitAnimationFrame", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["awaitAnimationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findTwitterFrame", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["findTwitterFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "twitter", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["twitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gen", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["gen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$007CC$007C_$007C", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["$007CC$007C_$007C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$007CE$007C_$007C", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["$007CE$007C_$007C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _App_fs__WEBPACK_IMPORTED_MODULE_0__["init"]; });



/***/ }),

/***/ "./src/Model.fs":
/*!**********************!*\
  !*** ./src/Model.fs ***!
  \**********************/
/*! exports provided: Node$, Node$$reflection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node$", function() { return Node$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node$$reflection", function() { return Node$$reflection; });
/* harmony import */ var _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _fable_fable_library_2_4_11_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Reflection.js */ "./.fable/fable-library.2.4.11/Reflection.js");


const Node$ = Object(_fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Model_Node(tag, name, ...fields) {
  _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"].call(this, tag, name, ...fields);
}, _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function Node$$reflection() {
  return Object(_fable_fable_library_2_4_11_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union"])("Model.Node", [], Node$, () => [["Txt", [_fable_fable_library_2_4_11_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["string"]]], ["Cons", [Object(_fable_fable_library_2_4_11_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["list"])(Node$$reflection())]], ["Alt", [Object(_fable_fable_library_2_4_11_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["list"])(Node$$reflection())]]]);
}

/***/ }),

/***/ "./src/Pitch.Old.fs":
/*!**************************!*\
  !*** ./src/Pitch.Old.fs ***!
  \**************************/
/*! exports provided: decouvrez, rencontre, accident, doubleVie, catastrophe, boyMeetsGirl, thriller, pitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decouvrez", function() { return decouvrez; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rencontre", function() { return rencontre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accident", function() { return accident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleVie", function() { return doubleVie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catastrophe", function() { return catastrophe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boyMeetsGirl", function() { return boyMeetsGirl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thriller", function() { return thriller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pitch", function() { return pitch; });
/* harmony import */ var _Model_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.fs */ "./src/Model.fs");
/* harmony import */ var _fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/List.js */ "./.fable/fable-library.2.4.11/List.js");
/* harmony import */ var _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Types.js */ "./.fable/fable-library.2.4.11/Types.js");



const decouvrez = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Découvrez l'incroyable double vie de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "John"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Silvio"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Jean Marcel"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Paolo"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Thomas"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Max"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Maurice"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Boris")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ","), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "flic"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fleuriste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "psychiatre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "peintre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "colleur d'affiches"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "employé de bureau"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chef d'entreprise"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "banquier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chauffeur de taxi"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "conducteur de métro"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "organisateur de mariages"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "paisible retraité"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vendeur de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "téléphones"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "canapés"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "farces et attrape"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voyages"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voitures"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "lingerie")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "coiffeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "toiletteur pour chiens"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "prof"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'anglais"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'histoire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de math"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de yoga"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de pilates"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de théâtre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de chant")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "politicien")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le jour... et"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "serial killer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dealer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de crack"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de viagra"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de tamiflu"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de blagues carambar")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "super héros doté du pouvoir"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'arrêter le temps"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de télékinésie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de téléportation"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de commander au feu"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de lire dans les pensées"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de brouiller les ondes des téléphones portables"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de retarder les montres")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "cambrioleur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "masseur de pieds"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vampire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voleur d'organes à la tire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "gérant de boîte échangiste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "acteur porno"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "auteur des tweets de Nadine Morano"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "trader"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "hacker"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "danseuse de cabaret"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "braqueur de viellies dames"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "kidnappeur de chiens"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chirurgien plastique amateur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voyant par téléphone"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "mafioso"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "yakusa"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tranfiquant d'organes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tueur à gages"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "prêtre exorciste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "gourou d'une secte"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chasseur de primes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "gigolo")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "la nuit.")]));
const rencontre = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "L'irruption"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de sa fille cachée"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une prof de fitness noctambule"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une petite fée jalouse et collante"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une vagabonde sans le sou"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une princesse deshéritée"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une nouvelle employée un peu trop curieuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un frère jumeau dont il ignorait l'existence"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un amour de jeunesse oublié"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une nouvelle voisine cachant un lourd secret"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un extraterrestre anthropologue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un chien d'aveugle sans maître")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans sa vie peu ordinaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans son quotidien trop bien organisé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans son emploi du temps déjà bien compliqué")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "va lui faire commettre une erreur fatale"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le conduira sur le chemin de la vengeance"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "va mettre en péril sa couverture"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "risque de lui faire commettre un crime irréparable"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sera le grain de sable qui fera tout dérailler"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "l'emmenera sur les chemins de l'amour qu'il n'avait jamais empruntés")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")]));
const accident = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Suite à"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un accident"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de trottinette"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de char à voile"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de coiffure"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de vélo"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vasculaire cérébral")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une maladie dégénérative"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un rêve prémonitoire traumatisant"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "la prédiction fatale d'une cartomancienne"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une faillite soudaine"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une lamentable méprise"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une overdose de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "médicaments"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "laxatifs"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "calmants"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "décontractants musculaires")]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "il se met à tout confondre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "il se met à tout mélanger"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "il doit tout avouer à sa famille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "il commet des erreurs irréparables"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "il remet tout en cause"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "il décide de tout arrêter. Mais le passé ne se laisse pas si facilement oublier."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "il décide de repartir à zéro. Mais des ennemis invisibles le surveillent...")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")]));
const doubleVie = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([decouvrez, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([rencontre, accident]))]));
const catastrophe = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un groupe d'étudiants insouciants"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un couple de jeunes mariés")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "part faire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une balade"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une excursion"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un pique nique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un parcours d'orientation"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de l'escalade")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en forêt"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en montagne"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans une friche industrielle"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans un village désert")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ". Ils ignorent que leurs pas les mènent tout droit vers"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le repaire d'une bête aussi mystérieuse que sanguinaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le repaire d'un déséquilibré"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "passionné par la putréfaction"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "collectionneur de scalps"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "amateur de chirurgie plastique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ancien chirurgien spécialiste des greffes en tout genre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "passionné de prothèses robotiques")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le repaire d'insectes géants et assoiffés de sang"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une base extraterrestre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une secte qui voue un culte"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "aux serpents"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "aux extraterrestres"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à Nadine Morano")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le repaire de terroristes qui ont mis au point un nouveau type de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "bombe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "virus")]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")]));
const boyMeetsGirl = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un cowboy"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un retraité"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un flic"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un boxeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un trader"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un blogueur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un ostréiculteur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un clone"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un justicier masqué"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un pompier volontaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un mariachi"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un marchan de glaces ambulant"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un pilote de tanker intergalactique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un père de famille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un karatéka"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un prince"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un génie de l'informatique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un professeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de mathématiques"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'histoire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'anglais"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de physique quantique")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un cuisinier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un jeune peintre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un boucher-charcutier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un explorateur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un SDF")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "boulimique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "au grand coeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "cocaïnomane"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "accro au coca light"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fatigué par la vie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sans foi ni loi"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "indécis"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "agoraphobe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "impulsif"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en proie à des hallucinations"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de petite taille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "incontinent"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "intrépide"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "divorcé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "atteint d'Alzheimer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "pauvre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doté de superpouvoirs"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "amnésique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "venu d'un pays lointain"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "américain"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "japonais"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "russe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "philosophe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui vient de gagner au loto"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "excentrique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "timide")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "emboutit la voiture d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "rencontre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur internet"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "au rayon surgelés"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans un salon de tatouage"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chez son médecin"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "par hasard")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "bouscule"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans la rue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans une file d'attente"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans un métro bondé")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tchatte avec"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sauve"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une tornade"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un grave accident")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "se retrouve dans un train avec"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est coincé dans un ascenseur avec"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tombe sur le site d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "trouve le portable d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "échange par erreur sa valise avec"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fait tomber ses courses devant")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une bibliothécaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une catcheuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une stripteaseuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une vielle dame"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une journaliste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une extraterrestre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une chanteuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une neurologue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une urologue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une voleuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une orpheline"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une star de cinéma"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une diva"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une cyborg"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une gendarmette"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une gymnaste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une héritière"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une chômeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une gérante de baraque à frites"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une voisine"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une joggeuse")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "hérotomane"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sexy"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "anorexique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ambitieuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui prédit l'avenir"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui sait lire dans les pensées"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "maladroite"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "accro au banga"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui a beaucoup de choses à lui apprendre sur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "son passé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sa famille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "son père biologique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sa mère"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "son frère jumeau dont il ignorait l'existence")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "riche"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "prête à tout pour réussir"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui n'a peur de rien"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "portoricaine"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "scandinave"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "capable de se téléporter"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en quête de spiritualité"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui n'a jamais éprouvé aucun sentiment"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sans le sous")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ensemble ils feront face à tous les obstacles qui se dressent sur la route de l'Amour."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Il découvre qu'elle court un grave danger."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ensemble, ils s'inscrivent à un jeu de téléréalité qui pourrait bien bouleverser leur vie."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Au milieu des secrets se cache parfois l'amour."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Mais il ignore qu'elle cache un lourd secret."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Et ce n'est pas l'arrivée des extra-terrestres qui va arranger les choses..."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Comment s'aimer quand on est si différents ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une rencontre qui risque de bouleverser leur vie à jamais."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Le hasard tresse parfois des liens indéfectibles."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Leurs entourages respectifs feront tout pour les empêcher de se voir."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Quel accueil leur entourage va-t-il réserver à cette idylle naissante ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une passion volcanique qui risque de les mener à leur perte."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ils décident de faire un bout de chemin ensemble"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "au risque de s'égarer."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "mais les embuches ne tardent pas à faire leur apparition...")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ou comment nos pires défauts peuvent devenir des qualités aux yeux de l'être aimé."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Il découvre qu'elle travaille en fait pour les services secrets..."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Cette rencontre est-elle vraiment le fruit du hasard ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ce qu'elle va lui apprendre le changera à jamais."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Elle lui demande de la protéger. Dans quoi s'embarque-t-il ?")]))]));
const thriller = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un policier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un flic"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un détective privé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un avocat"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un bloggeur")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "accro a l'energy drink"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "insomniaque"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "narcoleptique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "malchanceux"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ruiné par la crise"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "veuf"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "transexuel"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "malheureux en amour")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "enquête sur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doit démasquer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "se lance sur la piste d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doit résoudre les énigmes d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est contacté par"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est la nouvelle cible d'")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un politicien"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un boucher"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un parrain de la mafia"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un déséquilibré"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un pervers polymorphe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un assassin"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un serial killer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un kidnapeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un criminel"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un zoophile"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un néonazi")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "zombie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "amnésique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "psychopathe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "daltonien"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "myope"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de groupe sanguin AB négatif"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chauve"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "borgne"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "unijambiste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de petite taille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", " ")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui capture ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_2__["List"](new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en se déguisant en"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vieille dame"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Claude François"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "hot dog"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "bonhomme cetelem"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "distributeur automatique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "infirmière"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "agent immobilié"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Pocahontas")]))])), new _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_2__["List"]())), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui torture ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec des vêtements en lycra."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en leur chantant des chansons de Carla Bruni."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec des albums de Police."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en leur faisant manger de la raclette."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec 5 fruits et légumes par jour."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en les empêchant de dormir.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui choisit ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans l'annuaire."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur facebook."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en regardant Tellement Vrai."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "selon les numéros du Rapido."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "selon les rues du Monopoly."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans des faux entretiens d'embauche."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en organisant un casting.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui oblige ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à suivre Nadine Morano sur tweeter."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à faire le marathon de Paris."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à boire du coca après avoir mangé un mentos."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à jouer à kinectimal."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à lire l'intégrale de Marc Levy.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tue ses victimes selon les caractéristiques de leur signe astrologique."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tue ses victimes en suivant la liste des sept... nains !"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "lâche ses proies dans la forêt pour une grande chasse à courre humaine.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui "), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vend les scalps de ses victimes sur eBay."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vend ses victimes en pièces détachées sur leboncoin.fr...")]))]))]))]));
const pitch = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([doubleVie, catastrophe, boyMeetsGirl, thriller]));

/***/ }),

/***/ "./src/Pitch.fs":
/*!**********************!*\
  !*** ./src/Pitch.fs ***!
  \**********************/
/*! exports provided: decouvrezM, decouvrezF, rencontre, accident, doubleVie, catastrophe, boyMeetsGirl, thriller, pitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decouvrezM", function() { return decouvrezM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decouvrezF", function() { return decouvrezF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rencontre", function() { return rencontre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accident", function() { return accident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleVie", function() { return doubleVie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catastrophe", function() { return catastrophe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boyMeetsGirl", function() { return boyMeetsGirl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thriller", function() { return thriller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pitch", function() { return pitch; });
/* harmony import */ var _Model_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.fs */ "./src/Model.fs");
/* harmony import */ var _fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/List.js */ "./.fable/fable-library.2.4.11/List.js");
/* harmony import */ var _fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Seq.js */ "./.fable/fable-library.2.4.11/Seq.js");



const decouvrezM = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Découvrez l'incroyable double vie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de John"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Silvio"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Jean Marcel"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Paolo"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Thomas"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Max"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Maurice"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Boris"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Gérard"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Romain"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'Arthur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Kevin"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Wilson"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de David")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ","), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "flic"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fleuriste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "psychiatre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "peintre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "colleur d'affiches"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "employé de bureau"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chef d'entreprise"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "banquier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chauffeur de taxi"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "conducteur de métro"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "organisateur de mariages"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "paisible retraité"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vendeur de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "téléphones"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "canapés"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "farces et attrape"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voyages"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voitures"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "lingerie connectée")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "coiffeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "toiletteur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "psychanalyste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ostéopathe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "styliste")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "pour chiens"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "pour chats")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "prof"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'anglais"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'histoire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de maths"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de flying yoga"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de pilates"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de théâtre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de chant"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de science nat"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de claquettes")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "politicien")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le jour... et"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "serial killer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dealer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de crack"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de viagra"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de blagues carambar"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de protoxyde d'azote")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "super héros capable"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'arrêter le temps"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de télékinésie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de téléportation"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de commander au feu"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de lire dans les pensées"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de brouiller les ondes des téléphones portables"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de retarder les montres")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "cambrioleur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "masseur de pieds"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vampire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voleur d'organes à la tire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "gérant de boîte échangiste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "acteur porno"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "trader"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "hacker"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "braqueur de vieilles dames"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "kidnappeur de chiens"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chirurgien plastique amateur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voyant par téléphone"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "mafioso"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "yakusa"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "trafiquant d'organes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tueur à gages"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "prêtre exorciste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "gourou d'une secte"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chasseur de primes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "gigolo"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dessinateur de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "BD"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "manga"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "pin up")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "auteur jeunesse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "taxidermiste amateur")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "la nuit.")]));
const decouvrezF = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Découvrez l'incroyable double vie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Julie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Mélanie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Marguerite"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Pénélope"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Magali"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Mariella"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Dolores"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Marie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Sarah"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'Emmanuelle"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'Odile"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Claire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Marie-Charlotte")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ","), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "flic"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fleuriste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "psychiatre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "peintre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "colleuse d'affiches"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "employée de bureau"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "cheffe d'entreprise"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "banquière"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chauffeuse Uber"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "conductrice de bus"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "organisatrice de mariages"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "architecte d'intérieur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "paisible retraitée"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vendeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de sex toys connectés"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'électromenager connecté"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de fenêtres oscillo-battantes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de trottinettes électriques"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de lingerie")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "coiffeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "toiletteuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "psychanalyste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ostéopathe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "styliste")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "pour chiens"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "pour chats")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "coach"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de prise de parole"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de conversation"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de vie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de drague sur internet"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sportive"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vocal")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "politicienne")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le jour... et"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "serial killer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dealeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de crack"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de viagra"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de protoxyde d'azote"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de blagues carambar")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "super héroïne capable"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'arrêter le temps"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de télékinésie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de téléportation"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de commander au feu"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de lire dans les pensées"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de brouiller les ondes des téléphones portables"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de retarder les montres")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "cambrioleuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "masseuse de pieds"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "masseuse shiatsu"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vampire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voleuse d'organes à la tire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tradeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "hackeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "championne de pole dance"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "braqueuse de vieilles dames"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chirurgienne plastique amateure"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "voyante par téléphone"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "mafiosa"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "yakusa"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "trafiquante d'organes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tueuse à gages"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "prêtre exorciste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "gourou d'une secte"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chasseuse de primes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dessinatrice de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "BD"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "manga"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "pin up")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "performeuse burlesque"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "comique de stand up"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "autrice"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "jeunesse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de théâtre")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chanteuse de RnB")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "la nuit.")]));
function rencontre(il, le) {
  return new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "L'irruption"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de sa fille cachée"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une prof de fitness noctambule"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une petite fée jalouse et collante"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une vagabonde sans le sou"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une princesse deshéritée"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une nouvelle employée un peu trop curieuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un nouveau collègue un peu fouineur")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un frère jumeau"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une soeur")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dont "), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", il), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ignorait l'existence")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un amour de jeunesse oublié"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une nouvelle voisine cachant un lourd secret"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un extraterrestre anthropologue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un fantôme triste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un thermomix connecté"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une intelligence artificielle compatisante"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une rôliste elfique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un rôliste timide"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un chien d'aveugle sans maître")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans sa vie peu ordinaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans son quotidien trop bien réglé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans son emploi du temps bien rempli")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "va lui faire commettre une erreur fatale"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", le + " conduira sur le chemin de la vengeance"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "va mettre en péril sa couverture"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "risque de lui faire commettre un crime irréparable"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sera le grain de sable qui fera tout dérailler"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "l'emmènera sur les routes de l'amour qu'" + il + " n'avait jamais empruntés")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")]));
}
function accident(pronom, article) {
  return new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Suite à"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un accident"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de trottinette"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de char à voile"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de coiffure"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de vélo"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vasculaire cérébral")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une maladie dégénérative"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un rêve prémonitoire traumatisant"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "la prédiction fatale d'une cartomancienne"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une faillite soudaine"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une lamentable méprise"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une overdose de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "médicaments"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "laxatifs"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "calmants"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "décontractants musculaires"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "probiotiques"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tisane détox")]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", pronom), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "se met à tout confondre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "se met à tout mélanger"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doit tout avouer à sa famille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "commet des erreurs irréparables"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "remet tout en cause"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "décide de tout arrêter. Mais le passé ne se laisse pas si facilement oublier.."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "décide de repartir à zéro. Mais des ennemis invisibles " + article + " surveillent..")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")]));
}
const doubleVie = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([decouvrezM, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([rencontre("il", "le"), accident("il", "le")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([decouvrezF, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([rencontre("elle", "la"), accident("elle", "la")]))]))]));
const catastrophe = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un groupe d'étudiants insouciants"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un couple de jeunes mariés"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un couple de jeunes amoureux"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un groupe de collègues en team building"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un groupe de jeunes gender fluid")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "part faire")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Suite à un match Tinder, deux célibataires"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Des jeunes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Des gamins"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Des enfants")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en BMX"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en rollers"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en trottinette"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en skate")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Lors d'une rencontre IRL, des joueurs "), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Fortnite"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de World of Warcraft"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de World of Arbeitskraft"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Minecraft")]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "partent faire")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une balade"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une excursion"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un pique nique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un parcours d'orientation"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de l'escalade"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un karaoké"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un laser game"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un trek")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en forêt"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en montagne"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans une friche industrielle"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans un village désert"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans un village troglodyte"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans les anciens docks"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "du Havre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Marseille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de Saint Nazaire")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à Pontault-Combault"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans les catacombes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "près d'un site militaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "près d'une centrale nucléaire")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ". Ils ignorent que leurs pas les mènent tout droit vers"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le repaire d'un déséquilibré"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "passionné par la putréfaction"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "collectionneur de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "scalps"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fémurs"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Panini de la coupe du monde 1998"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "pancréas")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "amateur de chirurgie plastique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ancien chirurgien spécialiste des greffes en tout genre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "passionné de prothèses robotiques")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le repaire d'insectes géants et assoiffés de sang"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une base extraterrestre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une faille spatio-temporelle"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui les ramène au Moyen Age"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui les ramène en 2007"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui les ramène le jour de leur naissance"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui les propulse dans un futur apocalyptique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui les propulse dans un futur verdoyant"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui leur fait vivre leur propre mort"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui crée une boucle étrange"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui les envoie au XIXe siècle")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un cimetière indien oublié"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "où rôdent des esprits vengeurs"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "où les pierres sont vivantes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "où les ombres peuvent vous engloutir"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "où un shaman attend depuis des siècles une âme à posseder"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "où un sorcier aspire les âmes des égarés"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "peuplé d'esprits frappeurs")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une secte qui voue un culte"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "aux serpents"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "aux extraterrestres"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à Alain Juppé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "aux Reptiliens")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le repaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de terroristes qui élaborent un nouveau type"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de bombe olfactive"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de virus"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de gasto-entérite"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "H1N1"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ebola")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de grippe espagnole"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de peste bubonique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de variole"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'arme chimique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de drogue synthétique qui déclenche des hallucinations"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de thé ayurvédique qui"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "provoque de graves troubles du comportement"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "rend épileptique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "rend paranoïaque"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fait entendre des voix"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "rend fou"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "rend dépressive")]))]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une bête aussi mystérieuse que sanguinaire")]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")]));
const boyMeetsGirl = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un cowboy"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un retraité"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un flic"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un boxeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un trader"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un instagrammeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un youtubeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un ostréiculteur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un clone"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un clown"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un justicier masqué"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un pompier volontaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un mariachi"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un marchand de glaces ambulant"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un pilote de tanker intergalactique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un père de famille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un karatéka"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un prince"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un génie de l'informatique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un professeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de mathématiques"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'histoire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'anglais"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de physique quantique")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un cuisinier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un jeune peintre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un boucher-charcutier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un explorateur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un SDF"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un paparazzi"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un gilet jaune")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "boulimique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "au grand coeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "cocaïnomane"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "accro au coca light"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fatigué par la vie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sans foi ni loi"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "indécis"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "agoraphobe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "impulsif"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en proie à des hallucinations"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de petite taille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "incontinent"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "intrépide"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "divorcé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "atteint d'Alzheimer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "fauché"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sans scrupules"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doté de superpouvoirs"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "amnésique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "venu d'un pays lointain"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "américain"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "japonais"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "russe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "philosophe"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui vient de gagner au loto"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "excentrique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "timide"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ventriloque")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "emboutit la voiture d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "rencontre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur internet"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "au rayon surgelés"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans un salon de tatouage"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "chez son médecin"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "par hasard")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "bouscule"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans la rue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans une file d'attente"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "dans un métro bondé")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "discute en MP avec"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "rencontre sur Tinder"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sauve"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'une tornade"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'un grave accident")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "se retrouve dans un train avec"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est coincé dans un ascenseur avec"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tombe sur le profil d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "trouve le portable d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "échange par erreur sa valise avec"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "renverse ses courses aux pieds d'")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une bibliothécaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une catcheuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une contorsionniste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une strip teaseuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une vieille dame"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une journaliste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une chanteuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une neurologue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une urologue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une voleuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une orpheline"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une star de cinéma"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une diva"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une cyborg"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une gendarmette"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une gymnaste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une héritière"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une chômeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une gérante de baraque à frites"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une voisine"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une joggeuse")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sexy"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "anorexique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ambitieuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui prédit l'avenir"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui sait lire dans les pensées"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "maladroite"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "accro au banga"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui a beaucoup de choses à lui apprendre sur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "son passé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sa famille"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "son père biologique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sa mère"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "son frère jumeau dont il ignorait l'existence")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "richissime"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "prête à tout pour réussir"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui n'a peur de rien"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "portoricaine"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "scandinave"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "capable de se téléporter"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en quête de spiritualité"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui n'a jamais éprouvé aucun sentiment"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sans le sou"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "végétarienne"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur le point de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "se faire seppuku"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "s'immoler par le feu")]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ensemble ils feront face à tous les obstacles qui se dressent sur la route de l'Amour."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Il découvre qu'elle court un grave danger."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ensemble, ils s'inscrivent à un jeu de téléréalité qui pourrait bien bouleverser leur vie."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Au milieu des secrets se cache parfois l'amour."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Mais il ignore qu'elle cache un lourd secret."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Et ce n'est pas"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "l'arrivée des extra-terrestres "), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "la pire canicule"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "la plus terrible inondation"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "le pire tremblement de terre")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de tous les temps"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de l'histoire")]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui va arranger les choses..")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Comment s'aimer quand on est si différents ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une rencontre qui risque de bouleverser leur vie à jamais."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Le hasard tresse parfois des liens indéfectibles."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Leurs entourages respectifs feront tout pour les empêcher de se voir."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Quel accueil leur entourage va-t-il réserver à cette idylle naissante ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une passion volcanique qui risque de les mener à leur perte."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ils décident de faire un bout de chemin ensemble"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "au risque de s'égarer."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "mais les embuches ne tardent pas à faire leur apparition...")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ou comment nos pires défauts peuvent devenir des qualités aux yeux de l'être aimé."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Il découvre qu'elle travaille en fait pour les services secrets..."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Cette rencontre est-elle vraiment le fruit du hasard ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Ce qu'elle va lui apprendre le changera à jamais."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Elle lui demande de la protéger. Dans quoi s'embarque-t-il ?")]))]));
const thriller = (() => {
  const adjM = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "accro a l'energy drink"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "insomniaque"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "narcoleptique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "parano"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "malchanceux"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ruiné par la crise"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "veuf"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "transexuel"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "malheureux en amour")]));
  const adjF = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "accro a l'energy drink"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "insomniaque"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "narcoleptique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "malchanceuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "parano"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "ruinée par la crise"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "veuve"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "transexuelle"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "malheureuse en amour")]));
  const classicM = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un policier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un flic"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un détective privé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un avocat")])), adjM, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "enquête sur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doit démasquer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "traque"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "poursuit"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doit résoudre les énigmes d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est contacté par"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est la nouvelle cible d'")]))]));
  const classicF = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une policière"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une flic"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une détective privé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une avocate"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une journaliste")])), adjF, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "enquête sur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doit démasquer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "traque"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "poursuit"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "doit résoudre les énigmes d'"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est contactée par"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est la nouvelle cible d'")]))]));
  const internetM = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un instagrammeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Un youtubeur")])), adjM, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "filme par hasard"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "filme par erreur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est contacté par"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "like par mégarde")]))]));
  const internetF = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une instagrammeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une youtubeuse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Une influenceuse")])), adjF, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "filme par hasard"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "filme par erreur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "est contactée par"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "like par mégarde")]))]));
  return new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([classicM, internetM, classicF, internetF])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un maître chanteur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un parrain de la mafia"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un déséquilibré"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un pervers"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un assassin"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un serial killer"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un kidnappeur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un criminel"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un scientologue"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "un néonazi")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "zombie"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "myope"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "(de groupe sanguin AB négatif)"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "musclé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "balafré"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "borgne"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "unijambiste"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "bipolaire"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sans scrupules"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "moustachu"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", " ")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui capture ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en se déguisant en"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vieille dame"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Claude François"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "hot dog"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "bonhomme cetelem"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "distributeur automatique"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "infirmière"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "agent immobilier"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Pokemon"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Emmanuel Macron"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Laurent Delahousse"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Evelyne Dhéliat"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Philippe Etchebest"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Flunchy"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "témoin de Jéhovah"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Schtroumpf"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à lunettes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "faceur"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "costaud"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "gourmand")]))]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui torture ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec des vêtements en lycra."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en leur chantant "), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "du Maître Gims."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "une reprise de Starmania."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "des tubes d'Eddy Mitchell."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "du Booba."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "du Céline Dion.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec des albums de Police."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en leur faisant manger de la raclette."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec 5 fruits et légumes par jour."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en les empêchant de dormir."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en les obligeant à regarder des comptes instagram inspirants."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en les forçant à faire des dictées."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec du jazz vocal.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui sélectionne ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur Copains d'avant."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur facebook."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur instagram."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur linkedin."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "au moyen d'un drone furtif."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "selon les numéros du Rapido."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "selon les rues du Monopoly."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "selon leurs allergies alimentaires."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "au moyen de faux entretiens d'embauche."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en organisant un faux casting"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "d'émission de téléréalité"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de the Voice"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de sosies de"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Beyoncé"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Johnny Hallyday"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Aya Nakamura")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "de comédie musicale")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")]))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui oblige ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à suivre"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Mariah Carey"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Nadine Morano")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "sur twitter.")])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à faire le marathon de Paris."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à boire du coca après avoir mangé un mentos."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à lire l'intégrale de Marc Levy."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "à regarder des vidéos d'ASMR jusqu'à ce que mort s'ensuive.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "tue ses victimes"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "selon les caractéristiques de leur signe astrologique chinois."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en suivant la liste des sept... nains !"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec des positions de yoga maléfiques."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "avec des probiotiques."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "en les recouvrant de pétales de fleur.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "lache ses proies dans la forêt pour une grande chasse à courre humaine.")]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "qui "), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofSeq"])(Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["delay"])(function () {
    const site = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "leboncoin.fr"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Vinted"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "eBay")]));
    return Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["append"])(Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["singleton"])(new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vend les scalps de ses victimes sur"), site, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", ".")]))), Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["delay"])(function () {
      return Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["append"])(Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["singleton"])(new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](1, "Cons", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "vend ses victimes en pièces détachées sur"), site, new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "...")]))), Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["delay"])(function () {
        return Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["append"])(Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["singleton"])(new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "remplace le cerveau de ses victimes par des intelligences artificielles.")), Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["delay"])(function () {
          return Object(_fable_fable_library_2_4_11_Seq_js__WEBPACK_IMPORTED_MODULE_2__["singleton"])(new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "hybride ses victimes avec des animaux."));
        }));
      }));
    }));
  })))]))])), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Comment l'arrêter ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Comment le mettre hors d'état de nuire ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Comment le piéger ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Mais les apparences sont parfois trompeuses..."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "A qui profite vraiment le crime ?"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "(Les hiboux ne sont pas ce que l'on croit)"), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Mais personne ne croit à son histoire."), new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](0, "Txt", "Comment éviter le pire ?")]))]));
})();
const pitch = new _Model_fs__WEBPACK_IMPORTED_MODULE_0__["Node$"](2, "Alt", Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofArray"])([doubleVie, catastrophe, boyMeetsGirl, thriller]));

/***/ }),

/***/ "./src/Prelude.fs":
/*!************************!*\
  !*** ./src/Prelude.fs ***!
  \************************/
/*! exports provided: $007CInt$007C_$007C, Base64$$$toB64, Base64$$$ofB64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$007CInt$007C_$007C", function() { return $007CInt$007C_$007C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64$$$toB64", function() { return Base64$$$toB64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64$$$ofB64", function() { return Base64$$$ofB64; });
/* harmony import */ var _fable_fable_library_2_4_11_Int32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Int32.js */ "./.fable/fable-library.2.4.11/Int32.js");
/* harmony import */ var _fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/List.js */ "./.fable/fable-library.2.4.11/List.js");


function $007CInt$007C_$007C(x) {
  const matchValue = Object(_fable_fable_library_2_4_11_Int32_js__WEBPACK_IMPORTED_MODULE_0__["tryParse"])(x, 511, false, 32);

  if (matchValue[0]) {
    const v = matchValue[1] | 0;
    return v;
  } else {
    return null;
  }
}

function Base64$$$toB64c(value) {
  const d = value & 63 | 0;

  if (d < 26) {
    const value$$1 = "A".charCodeAt(0) + d | 0;
    return String.fromCharCode(value$$1);
  } else if (d < 52) {
    const value$$2 = "a".charCodeAt(0) + d - 26 | 0;
    return String.fromCharCode(value$$2);
  } else if (d < 62) {
    const value$$3 = "0".charCodeAt(0) + d - 52 | 0;
    return String.fromCharCode(value$$3);
  } else if (d === 62) {
    return "-";
  } else {
    return "_";
  }
}

function Base64$$$toB64(value$$4) {
  if (value$$4 === 0) {
    return "";
  } else {
    return Base64$$$toB64(value$$4 >> 6) + Base64$$$toB64c(value$$4);
  }
}

function Base64$$$ofB64c(c) {
  if (c >= "A" ? c <= "Z" : false) {
    return c.charCodeAt(0) - "A".charCodeAt(0) | 0;
  } else if (c >= "a" ? c <= "z" : false) {
    return c.charCodeAt(0) - "a".charCodeAt(0) + 26 | 0;
  } else if (c >= "0" ? c <= "9" : false) {
    return c.charCodeAt(0) - "0".charCodeAt(0) + 52 | 0;
  } else if (c === "-") {
    return 62;
  } else {
    return 63;
  }
}

function Base64$$$ofB64(s) {
  var source;

  const loop = function loop($n$$6, $_arg1$$7) {
    loop: while (true) {
      const n = $n$$6,
            _arg1 = $_arg1$$7;

      if (_arg1.tail == null) {
        return n | 0;
      } else {
        const t = _arg1.tail;
        const h = _arg1.head;
        $n$$6 = (n << 6) + Base64$$$ofB64c(h);
        $_arg1$$7 = t;
        continue loop;
      }

      break;
    }
  };

  return loop(0, (source = s, (Object(_fable_fable_library_2_4_11_List_js__WEBPACK_IMPORTED_MODULE_1__["ofSeq"])(source)))) | 0;
}

/***/ }),

/***/ "./src/Rand.fs":
/*!*********************!*\
  !*** ./src/Rand.fs ***!
  \*********************/
/*! exports provided: Rand, Rand$reflection, RandModule$$$create, RandModule$$$rand, RandModule$$$next, RandModule$$$seed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rand", function() { return Rand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rand$reflection", function() { return Rand$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandModule$$$create", function() { return RandModule$$$create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandModule$$$rand", function() { return RandModule$$$rand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandModule$$$next", function() { return RandModule$$$next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandModule$$$seed", function() { return RandModule$$$seed; });
/* harmony import */ var _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Types.js */ "./.fable/fable-library.2.4.11/Types.js");
/* harmony import */ var _fable_fable_library_2_4_11_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Reflection.js */ "./.fable/fable-library.2.4.11/Reflection.js");
/* harmony import */ var _fable_fable_library_2_4_11_Date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Date.js */ "./.fable/fable-library.2.4.11/Date.js");
/* harmony import */ var _fable_fable_library_2_4_11_Long_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.4.11/Long.js */ "./.fable/fable-library.2.4.11/Long.js");




const Rand = Object(_fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Random_Rand(tag, name, ...fields) {
  _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"].call(this, tag, name, ...fields);
}, _fable_fable_library_2_4_11_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function Rand$reflection() {
  return Object(_fable_fable_library_2_4_11_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union"])("Random.Rand", [], Rand, () => [["Rand", [_fable_fable_library_2_4_11_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["float64"]]]]);
}
function RandModule$$$create(seed) {
  return new Rand(0, "Rand", seed);
}
function RandModule$$$rand() {
  var copyOfStruct;
  return RandModule$$$create(Math.abs(~~Object(_fable_fable_library_2_4_11_Long_js__WEBPACK_IMPORTED_MODULE_3__["toInt"])((copyOfStruct = Object(_fable_fable_library_2_4_11_Date_js__WEBPACK_IMPORTED_MODULE_2__["utcNow"])(), Object(_fable_fable_library_2_4_11_Date_js__WEBPACK_IMPORTED_MODULE_2__["getTicks"])(copyOfStruct)))));
}
function RandModule$$$next(_arg1, offset) {
  const seed$$1 = _arg1.fields[0];
  const r = Math.sin(seed$$1 + offset) * 1000000;
  return [Math.abs(~~r), new Rand(0, "Rand", r)];
}
function RandModule$$$seed(_arg1$$1) {
  const s = _arg1$$1.fields[0];
  return ~~s | 0;
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map