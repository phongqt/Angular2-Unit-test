System.register(['angular2/testing', '../pipes/truncate.pipe', '../pipes/capitalize-first-letter.pipe', '../pipes/capitalize.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, truncate_pipe_1, capitalize_first_letter_pipe_1, capitalize_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (truncate_pipe_1_1) {
                truncate_pipe_1 = truncate_pipe_1_1;
            },
            function (capitalize_first_letter_pipe_1_1) {
                capitalize_first_letter_pipe_1 = capitalize_first_letter_pipe_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('Test Pipe', function () {
                var trunCate;
                var capitalize;
                var capitalizeFirstLetter;
                testing_1.beforeEach(function () {
                    trunCate = new truncate_pipe_1.TruncatePipe();
                    capitalize = new capitalize_pipe_1.CapitalizePipe();
                    capitalizeFirstLetter = new capitalize_first_letter_pipe_1.CapitalizeFirstLetterPipe();
                });
                // Truncate string
                testing_1.it('transforms "angularjs2 typescript" to "angularjs2..."', function () {
                    testing_1.expect(trunCate.transform('angularjs2 typescript', ['10', '...'])).toEqual('angularjs2...');
                });
                // Capitalize first letter  
                testing_1.it('transforms "angularjs2 typescript" to "Angularjs2 Typescript"', function () {
                    testing_1.expect(capitalizeFirstLetter.transform('angularjs2 typescript', [])).toEqual('Angularjs2 Typescript');
                });
                // Capitalize string  
                testing_1.it('transforms "angularjs2 typescript" to "Angularjs2 typescript"', function () {
                    testing_1.expect(capitalize.transform('angularjs2 typescript', [])).toEqual('Angularjs2 typescript');
                });
            });
        }
    }
});
//# sourceMappingURL=pipe.test.spec.js.map