/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />
System.register(['angular2/testing', "./my-list", "../services/my-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, my_list_1, my_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_list_1_1) {
                my_list_1 = my_list_1_1;
            },
            function (my_service_1_1) {
                my_service_1 = my_service_1_1;
            }],
        execute: function() {
            testing_1.describe('MyList Tests', function () {
                var list;
                var service = new my_service_1.MyService();
                testing_1.beforeEach(function () {
                    list = new my_list_1.MyList(service);
                });
                testing_1.it('Should get 5 dogs', function () {
                    list.ngOnInit();
                    testing_1.expect(list.items.length).toBe(5);
                    testing_1.expect(list.items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier']);
                });
            });
        }
    }
});
//# sourceMappingURL=my-list.spec.js.map