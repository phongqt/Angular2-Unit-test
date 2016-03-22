System.register(["angular2/core", "../../services/article.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, article_service_1;
    var AdminAddArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            }],
        execute: function() {
            AdminAddArticleComponent = (function () {
                function AdminAddArticleComponent(_articleService) {
                    this._articleService = _articleService;
                    this.article = {};
                }
                AdminAddArticleComponent.prototype.ngOnInit = function () {
                    setTimeout(function () {
                        tinymce.init({
                            selector: '#content'
                        });
                    }, 500);
                };
                AdminAddArticleComponent.prototype.Post = function () {
                    this.article._Content = $('#content')[0].value;
                    var data = 'title=' + this.article.Title + '&description=' + this.article.Description + '&image=' + this.article.Image + '&content=' + this.article._Content;
                    this._articleService.postArticle(data).subscribe(function (res) {
                        if (res.success) {
                        }
                    }, function (error) {
                        console.log(error);
                    });
                };
                AdminAddArticleComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/layout/admin/admin.add.article.html',
                        providers: [article_service_1.ArticleService]
                    }), 
                    __metadata('design:paramtypes', [article_service_1.ArticleService])
                ], AdminAddArticleComponent);
                return AdminAddArticleComponent;
            }());
            exports_1("AdminAddArticleComponent", AdminAddArticleComponent);
        }
    }
});
//# sourceMappingURL=admin.addarticle.component.js.map