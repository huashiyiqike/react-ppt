"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo(props, context) {
        return _super.call(this, props, context) || this;
    }
    Demo.prototype.render = function () {
        return (React.createElement("div", null,
            "start",
            React.createElement("img", { src: "./static/qi.jpg", style: { width: "100px" } }),
            "         fdsfsfdsfsd"));
    };
    return Demo;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Demo;
//# sourceMappingURL=Demo.js.map