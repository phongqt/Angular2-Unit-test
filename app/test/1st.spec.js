System.register(['angular2/testing'], function(exports_1) {
    var testing_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            testing_1.describe('MyPipe Tests', function () {
                testing_1.it('Should 1 == 1', function () {
                    testing_1.expect(1).toEqual(2);
                });
            });
        }
    }
});
//# sourceMappingURL=1st.spec.js.map