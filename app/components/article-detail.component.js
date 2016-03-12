System.register(["angular2/core", "angular2/router", "../services/article.service", '../pipes/truncate.pipe', '../pipes/capitalize-first-letter.pipe', '../pipes/capitalize.pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, article_service_1, truncate_pipe_1, capitalize_first_letter_pipe_1, capitalize_pipe_1;
    var ArticleDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
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
            ArticleDetailComponent = (function () {
                function ArticleDetailComponent(_articleService, _routeParams) {
                    this._articleService = _articleService;
                    this._routeParams = _routeParams;
                }
                ArticleDetailComponent.prototype.getArticleDetail = function (id) {
                    var _this = this;
                    this._articleService.getArticleDetail(id).then(function (Article) { return _this.article = Article; });
                };
                ArticleDetailComponent.prototype.ngOnInit = function () {
                    // '+' covert string to number because parameter always strings
                    var id = +this._routeParams.get('id');
                    this.getArticleDetail(id);
                };
                ArticleDetailComponent = __decorate([
                    core_1.Component({
                        selector: "article-detail",
                        templateUrl: "app/layout/article-detail.html",
                        providers: [article_service_1.ArticleService],
                        pipes: [truncate_pipe_1.TruncatePipe, capitalize_first_letter_pipe_1.CapitalizeFirstLetterPipe, capitalize_pipe_1.CapitalizePipe]
                    }), 
                    __metadata('design:paramtypes', [article_service_1.ArticleService, router_1.RouteParams])
                ], ArticleDetailComponent);
                return ArticleDetailComponent;
            }());
            exports_1("ArticleDetailComponent", ArticleDetailComponent);
        }
    }
});
//# sourceMappingURL=article-detail.component.js.map