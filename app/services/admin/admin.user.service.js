System.register(['angular2/http', 'angular2/core', 'rxjs/Observable', '../../cores/config'], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1, config_1;
    var AdminUserService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            AdminUserService = (function () {
                function AdminUserService(http) {
                    this.http = http;
                }
                AdminUserService.prototype.login = function (userName, passWord) {
                    return this.http.get(config_1.PublishVar.apiUrl + 'user/login?username=' + userName + '&password=' + passWord)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                AdminUserService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AdminUserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdminUserService);
                return AdminUserService;
            }());
            exports_1("AdminUserService", AdminUserService);
        }
    }
});
//# sourceMappingURL=admin.user.service.js.map