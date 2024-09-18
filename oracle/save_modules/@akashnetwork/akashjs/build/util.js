"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awaitAll = exports.filter = exports.map = exports.sortBy = exports.prop = void 0;
const prop = (key) => (context) => context[key];
exports.prop = prop;
const sortBy = (evalFn) => (xs) => xs.sort((a, b) => evalFn(a) - evalFn(b));
exports.sortBy = sortBy;
const map = (fn) => (xs) => xs.map(fn);
exports.map = map;
const filter = (fn) => (xs) => xs.filter(fn);
exports.filter = filter;
exports.awaitAll = Promise.all.bind(Promise);
