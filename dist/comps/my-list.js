var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var my_service_1 = require("../services/my-service");
var my_pipe_1 = require("../pipes/my-pipe");
var MyList = (function () {
    function MyList(service) {
        this.service = service;
    }
    MyList.prototype.ngOnInit = function () {
        this.items = this.service.getDogs(5);
    };
    MyList = __decorate([
        core_1.Component({
            selector: 'my-list',
            bindings: [my_service_1.MyService],
            pipes: [my_pipe_1.MyPipe],
            template: "<ul><li *ngFor=\"#item of items\">{{ item | capitalizeWords }}</li></ul>",
            styles: ["\n        :host {\n            font-family: 'Arial';\n            display: flex;\n            width: 100%;\n            height: 100%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [my_service_1.MyService])
    ], MyList);
    return MyList;
})();
exports.MyList = MyList;
//# sourceMappingURL=my-list.js.map