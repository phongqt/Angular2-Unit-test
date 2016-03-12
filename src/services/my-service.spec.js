/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />
System.register(['angular2/testing', "./my-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, my_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_service_1_1) {
                my_service_1 = my_service_1_1;
            }],
        execute: function() {
            testing_1.describe('MyService Tests', function () {
                var service = new my_service_1.MyService();
                testing_1.it('Should return a list of dogs', function () {
                    var items = service.getDogs(4);
                    testing_1.expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky']);
                });
                testing_1.it('Should get all dogs available', function () {
                    var items = service.getDogs(100);
                    testing_1.expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier', 'boxer', 'chow chow', 'pug', 'akita', 'corgi', 'labrador']);
                });
            });
        }
    }
});
//# sourceMappingURL=my-service.spec.js.map