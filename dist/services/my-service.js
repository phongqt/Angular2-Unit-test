var MyService = (function () {
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
})();
exports.MyService = MyService;
//# sourceMappingURL=my-service.js.map