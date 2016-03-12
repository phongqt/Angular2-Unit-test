System.register(['angular2/testing', "./article.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, article_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            }],
        execute: function() {
            testing_1.describe('MyService Tests', function () {
                var service = new article_service_1.ArticleService();
                testing_1.it('Should return a list of dogs', function () {
                    var items = service.getArticles(1, 5);
                    testing_1.expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky']);
                });
            });
        }
    }
});
//# sourceMappingURL=article.service.spec.js.map