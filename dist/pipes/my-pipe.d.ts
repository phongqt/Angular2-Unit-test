/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import { PipeTransform } from 'angular2/core';
export declare class MyPipe implements PipeTransform {
    constructor();
    transform(text: string, args: any[]): any;
}
