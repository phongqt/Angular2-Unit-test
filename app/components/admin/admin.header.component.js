System.register(['angular2/core', 'angular2/router', 'angular2-cookie/core'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, core_2;
    var AdminHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            AdminHeaderComponent = (function () {
                function AdminHeaderComponent(_router, _cookieService) {
                    this._router = _router;
                    this._cookieService = _cookieService;
                }
                AdminHeaderComponent.prototype.Logout = function () {
                    this._cookieService.remove('blog-admin');
                    var link = ['Login'];
                    this._router.navigate(link);
                };
                AdminHeaderComponent = __decorate([
                    core_1.Component({
                        selector: "admin-header",
                        templateUrl: 'app/layout/admin/admin.header.html',
                        directives: [router_2.RouterOutlet, router_2.ROUTER_DIRECTIVES],
                        providers: [core_2.CookieService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, core_2.CookieService])
                ], AdminHeaderComponent);
                return AdminHeaderComponent;
            }());
            exports_1("AdminHeaderComponent", AdminHeaderComponent);
        }
    }
});
//# sourceMappingURL=admin.header.component.js.map