///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyService;
    return {
        setters:[],
        execute: function() {
            MyService = (function () {
                function MyService() {
                    this.animals = ['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier', 'boxer', 'chow chow', 'pug', 'akita', 'corgi', 'labrador'];
                }
                MyService.prototype.getDogs = function (count) {
                    var result = [];
                    if (count > this.animals.length)
                        count = this.animals.length;
                    for (var i = 0; i < count; i++) {
                        result.push(this.animals[i]);
                    }
                    return result;
                };
                return MyService;
            }());
            exports_1("MyService", MyService);
        }
    }
});
//# sourceMappingURL=my-service.js.map