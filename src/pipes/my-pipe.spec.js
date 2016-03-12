/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />
System.register(['angular2/testing', "./my-pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, my_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_pipe_1_1) {
                my_pipe_1 = my_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('MyPipe Tests', function () {
                var pipe;
                testing_1.beforeEach(function () {
                    pipe = new my_pipe_1.MyPipe();
                });
                testing_1.it('Should capitalize all words in a string', function () {
                    var result = pipe.transform('golden retriever', null);
                    testing_1.expect(result).toEqual('Golden Retriever');
                });
            });
        }
    }
});
//# sourceMappingURL=my-pipe.spec.js.map