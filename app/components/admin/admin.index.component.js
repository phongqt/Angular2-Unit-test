System.register(['angular2/core', 'angular2/router', '../admin/admin.header.component', '../admin/admin.menuleft.component', '../admin/admin.footer.component', '../admin/admin.article.component', 'angular2-cookie/core'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, admin_header_component_1, admin_menuleft_component_1, admin_footer_component_1, admin_article_component_1, core_2;
    var AdminIndexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (admin_header_component_1_1) {
                admin_header_component_1 = admin_header_component_1_1;
            },
            function (admin_menuleft_component_1_1) {
                admin_menuleft_component_1 = admin_menuleft_component_1_1;
            },
            function (admin_footer_component_1_1) {
                admin_footer_component_1 = admin_footer_component_1_1;
            },
            function (admin_article_component_1_1) {
                admin_article_component_1 = admin_article_component_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            AdminIndexComponent = (function () {
                function AdminIndexComponent(_router, _cookieService) {
                    this._router = _router;
                    this._cookieService = _cookieService;
                }
                AdminIndexComponent.prototype.ngOnInit = function () {
                    var cookieSotote = this._cookieService.getObject('blog-admin');
                    if (!cookieSotote) {
                        var link = ['Login'];
                        this._router.navigate(link);
                    }
                };
                AdminIndexComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-my-app',
                        templateUrl: 'app/layout/admin/admin.board.html',
                        directives: [admin_header_component_1.AdminHeaderComponent, admin_menuleft_component_1.AdminMenuLeftComponent, admin_footer_component_1.AdminFooterComponent, router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                        providers: [core_2.CookieService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/Article',
                            name: 'AdminArticle',
                            component: admin_article_component_1.AdminArticleComponent,
                            useAsDefault: true
                        },
                    ]), 
                    __metadata('design:paramtypes', [router_2.Router, core_2.CookieService])
                ], AdminIndexComponent);
                return AdminIndexComponent;
            }());
            exports_1("AdminIndexComponent", AdminIndexComponent);
        }
    }
});
//# sourceMappingURL=admin.index.component.js.map