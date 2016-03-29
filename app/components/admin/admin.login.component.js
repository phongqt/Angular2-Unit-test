System.register(['angular2/core', 'angular2/router', '../../services/admin/admin.user.service', 'angular2-cookie/core'], function(exports_1, context_1) {
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
    var core_1, router_1, admin_user_service_1, core_2;
    var AdminLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (admin_user_service_1_1) {
                admin_user_service_1 = admin_user_service_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            AdminLoginComponent = (function () {
                function AdminLoginComponent(_adminUserService, _router, _cookieService) {
                    this._adminUserService = _adminUserService;
                    this._router = _router;
                    this._cookieService = _cookieService;
                    this.user = {
                        UserName: '',
                        Password: ''
                    };
                    this.isLoading = false;
                }
                AdminLoginComponent.prototype.ngOnInit = function () {
                    var cookieSotote = this._cookieService.getObject('blog-admin');
                    if (cookieSotote) {
                        var link = ['Board'];
                        this._router.navigate(link);
                    }
                };
                AdminLoginComponent.prototype.Login = function () {
                    var _this = this;
                    this.isLoading = true;
                    this._adminUserService.login(this.user.UserName, this.user.Password).subscribe(function (res) {
                        if (res.success) {
                            _this._cookieService.putObject('blog-admin', res.data);
                            var link = ['Board'];
                            _this._router.navigate(link);
                        }
                        else {
                            _this.errorMessage = res.message;
                        }
                        _this.isLoading = false;
                    }, function (error) {
                        _this.errorMessage = error;
                        _this.isLoading = false;
                    });
                };
                AdminLoginComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-login',
                        templateUrl: 'app/layout/admin/login.html',
                        providers: [admin_user_service_1.AdminUserService, core_2.CookieService]
                    }), 
                    __metadata('design:paramtypes', [admin_user_service_1.AdminUserService, router_1.Router, core_2.CookieService])
                ], AdminLoginComponent);
                return AdminLoginComponent;
            }());
            exports_1("AdminLoginComponent", AdminLoginComponent);
        }
    }
});
//# sourceMappingURL=admin.login.component.js.map