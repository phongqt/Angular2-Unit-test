System.register(['angular2/core', '../../services/admin/admin.user.service'], function(exports_1, context_1) {
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
    var core_1, admin_user_service_1;
    var AdminLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_user_service_1_1) {
                admin_user_service_1 = admin_user_service_1_1;
            }],
        execute: function() {
            AdminLoginComponent = (function () {
                function AdminLoginComponent(_adminUserService) {
                    this._adminUserService = _adminUserService;
                    this.user = {
                        UserName: '',
                        Password: ''
                    };
                }
                AdminLoginComponent.prototype.Login = function () {
                    this._adminUserService.login().subscribe(function (res) {
                        var tmp = res;
                    }, function (error) {
                        var tmp2 = error;
                    });
                };
                AdminLoginComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-login',
                        templateUrl: 'app/layout/admin/login.html',
                        providers: [admin_user_service_1.AdminUserService]
                    }), 
                    __metadata('design:paramtypes', [admin_user_service_1.AdminUserService])
                ], AdminLoginComponent);
                return AdminLoginComponent;
            }());
            exports_1("AdminLoginComponent", AdminLoginComponent);
        }
    }
});
//# sourceMappingURL=admin.login.component.js.map