System.register(["angular2/core", "../services/article.service", 'angular2/router', '../pipes/truncate.pipe', '../pipes/capitalize-first-letter.pipe', '../pipes/capitalize.pipe'], function(exports_1, context_1) {
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
    var core_1, article_service_1, router_1, truncate_pipe_1, capitalize_first_letter_pipe_1, capitalize_pipe_1;
    var NewsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            NewsComponent = (function () {
                function NewsComponent(_articleService, _router) {
                    this._articleService = _articleService;
                    this._router = _router;
                    this.page = 1;
                    this.limit = 5;
                    this.isDisabledPrevious = true;
                    this.isDisabledNext = false;
                }
                ;
                NewsComponent.prototype.getNews = function () {
                    var _this = this;
                    this._articleService.getArticles(this.page, this.limit).then(function (articles) { return _this.articles = articles; });
                };
                NewsComponent.prototype.ngOnInit = function () {
                    this.getNews();
                };
                NewsComponent.prototype.gotoNext = function () {
                    this.isDisabledPrevious = false;
                    this.page++;
                    this.isDisabledNext = this.page * this.limit >= 50;
                    this.getNews();
                };
                NewsComponent.prototype.gotoPrevious = function () {
                    this.page--;
                    this.isDisabledPrevious = this.page == 1;
                    this.isDisabledNext = false;
                    this.getNews();
                };
                NewsComponent.prototype.gotoArticleDetail = function (article) {
                    var link = ['ArticleDetail', { id: article.id }];
                    this._router.navigate(link);
                };
                NewsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/layout/news.html',
                        providers: [article_service_1.ArticleService],
                        pipes: [truncate_pipe_1.TruncatePipe, capitalize_first_letter_pipe_1.CapitalizeFirstLetterPipe, capitalize_pipe_1.CapitalizePipe]
                    }), 
                    __metadata('design:paramtypes', [article_service_1.ArticleService, router_1.Router])
                ], NewsComponent);
                return NewsComponent;
            }());
            exports_1("NewsComponent", NewsComponent);
        }
    }
});
//# sourceMappingURL=news.component.js.map