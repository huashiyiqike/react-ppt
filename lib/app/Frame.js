"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var velocity_react_1 = require("velocity-react");
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            animate: false
        };
        return _this;
    }
    Frame.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { onClick: function () { _this.setState({ animate: true }); console.log('clicked'); } },
            React.createElement(velocity_react_1.VelocityComponent, { animation: { opacity: this.state.animate ? 1 : 0 }, runOnMount: true, duration: 500 },
                React.createElement("div", null, "fdsfsf"))));
    };
    return Frame;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Frame;
//# sourceMappingURL=Frame.js.map