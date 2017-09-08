"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_1 = require('../../model/post');
var SubscribeComponent = (function () {
    function SubscribeComponent() {
        this.model = new post_1.Post(1, '', '', '');
        this.submitted = false;
        this.noJoke = true;
        this.image = "sources/images/obama.jpg";
        this.joke = '"You fool! Are you really trying to subscribe here?"';
    }
    SubscribeComponent.prototype.submitSubscription = function () {
        this.noJoke = false;
    };
    SubscribeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'subscribe',
            templateUrl: 'subscribe.component.html',
            styles: ["\n    form .ng-dirty {}\n    form .ng-pristine {}\n    form .ng-valid[required] {border: 2px solid #42a948;}\n    form .ng-invalid {border: 2px solid #a94442;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());
exports.SubscribeComponent = SubscribeComponent;
//# sourceMappingURL=subscribe.component.js.map