var testing_1 = require('angular2/testing');
var my_pipe_1 = require("./my-pipe");
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
//# sourceMappingURL=my-pipe.spec.js.map