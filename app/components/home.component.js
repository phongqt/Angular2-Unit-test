System.register(["angular2/core", 'angular2/router', './news.component', "./article-detail.component", "./header.component", "./footer.component", './about.component', './contact.component'], function(exports_1, context_1) {
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
    var core_1, router_1, news_component_1, article_detail_component_1, header_component_1, footer_component_1, about_component_1, contact_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (news_component_1_1) {
                news_component_1 = news_component_1_1;
            },
            function (article_detail_component_1_1) {
                article_detail_component_1 = article_detail_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/layout/home.html',
                        directives: [header_component_1.Header, footer_component_1.Footer, news_component_1.NewsComponent, router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'News',
                            component: news_component_1.NewsComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/article/detail/:id',
                            name: 'ArticleDetail',
                            component: article_detail_component_1.ArticleDetailComponent
                        },
                        {
                            path: '/about',
                            name: 'About',
                            component: about_component_1.AboutComponent
                        },
                        {
                            path: '/contact',
                            name: 'Contact',
                            component: contact_component_1.ContactComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map