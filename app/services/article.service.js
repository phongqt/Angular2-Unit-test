System.register(['angular2/http', 'angular2/core', '../cores/config', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var http_1, core_1, config_1, Observable_1;
    var ArticleService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ArticleService = (function () {
                function ArticleService(http) {
                    this.http = http;
                }
                ArticleService.prototype.getArticles = function (page, limit) {
                    return this.http.get(config_1.PublishVar.apiUrl + 'article?page=' + page + '&limit=' + limit)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                    // return Promise.resolve(Articles).then(function (res:Article[]) {
                    //     var list=[];
                    //     res = res.sort((n1,n2) => {
                    //         if (n1.id < n2.id) {
                    //             return 1;
                    //         }
                    //         if (n1.id > n2.id) {
                    //             return -1;
                    //         }
                    //         return 0;
                    //     });
                    //     for (var i = ((page - 1)* limit); i <res.length; i++) {
                    //         list.push(res[i]);
                    //         if (i == (limit * page -1)) {
                    //             break;
                    //         }
                    //     }
                    //     return list;
                    // });
                    //return Promise.resolve(Articles);
                };
                ArticleService.prototype.getArticleDetail = function (id) {
                    //   var element = Articles.map(function(x) {return x.id; }).indexOf(id);
                    //   return Articles[element];
                    //  return Promise.resolve(Articles).then(Article => Articles.filter(Article => Article.id === id)[0]);
                    return this.http.get(config_1.PublishVar.apiUrl + 'article/' + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticleService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ArticleService.prototype.deleteArticle = function (id) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.delete(config_1.PublishVar.apiUrl + 'article/' + id, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticleService.prototype.postArticle = function (data) {
                    //let body = JSON.stringify({ data });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(config_1.PublishVar.apiUrl + 'article/', data, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticleService.prototype.uploadFile = function (file) {
                    var formData = new FormData();
                    formData.append("files", file);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'multipart/form-data');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(config_1.PublishVar.apiUrl + 'file', formData, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ArticleService);
                return ArticleService;
            }());
            exports_1("ArticleService", ArticleService);
        }
    }
});
//# sourceMappingURL=article.service.js.map