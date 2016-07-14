// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

/// <reference path="../typings/browser.d.ts" />
declare var module: { id: string };

declare module 'd3' {
    var d3: any;
    export = d3;
}