"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PPT_1 = require("./PPT");
var React = require("react");
var Frame_1 = require("./Frame");
exports.Frame = Frame_1.Frame;
exports.Frame2 = Frame_1.Frame2;
exports.Frame3 = Frame_1.Frame3;
exports.Lists = Frame_1.List;
var mobx_react_1 = require("mobx-react");
var mobx_1 = require("mobx");
var Store = (function () {
    function Store() {
        this.currentCount = 0;
        this.show = false;
    }
    Store.prototype.setCount = function (num) {
        this.currentCount = num;
    };
    Store.prototype.setShow = function (sh) {
        this.show = sh;
    };
    return Store;
}());
__decorate([
    mobx_1.observable
], Store.prototype, "currentCount", void 0);
__decorate([
    mobx_1.observable
], Store.prototype, "show", void 0);
__decorate([
    mobx_1.action
], Store.prototype, "setCount", null);
__decorate([
    mobx_1.action
], Store.prototype, "setShow", null);
var ReactPPT = (function (_super) {
    __extends(ReactPPT, _super);
    function ReactPPT(props) {
        return _super.call(this, props) || this;
    }
    ReactPPT.prototype.render = function () {
        return (React.createElement(mobx_react_1.Provider, { Store: new Store() },
            React.createElement(PPT_1.default, __assign({}, this.props), this.props.children)));
    };
    return ReactPPT;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactPPT;
exports.ReactPPT = ReactPPT;
//# sourceMappingURL=ReactPPT.js.map