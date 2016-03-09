/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import { OnInit } from 'angular2/core';
import { MyService } from "../services/my-service";
export declare class MyList implements OnInit {
    items: Array<string>;
    service: MyService;
    constructor(service: MyService);
    ngOnInit(): void;
}
