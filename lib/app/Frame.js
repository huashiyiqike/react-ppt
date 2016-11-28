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
var React = require("react");
var cx = require("classnames");
var velocity_react_1 = require("velocity-react");
require('velocity-animate');
require('velocity-animate/velocity.ui');
var mobx_react_1 = require("mobx-react");
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            animate: false,
            count: _this.props.count
        };
        return _this;
    }
    Frame.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { onClick: function () { _this.setState({ animate: true }); console.log('clicked'); } },
            React.createElement(velocity_react_1.VelocityComponent, { animation: { opacity: this.state.animate ? 1 : 0 }, runOnMount: true, duration: 500 },
                React.createElement("div", null, "fdsfsfjkhjjdfsf"))));
    };
    return Frame;
}(React.Component));
exports.Frame = Frame;
exports.Frame2 = function () { return function (Target) {
    var Inner = (function (_super) {
        __extends(Inner, _super);
        function Inner(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.Idanimation = 0;
            _this.myTurnToAnimate = function (num) {
                return true;
            };
            _this.process = function (elem, children) {
                if (!elem || !elem.props) {
                    return children;
                }
                if (elem.props.animate) {
                    var newProps = Object.assign({}, _this.props);
                    newProps.others = exports.others(elem.defaultProps, newProps);
                    newProps.ref = (function (ref) {
                        _this.wrappedInstance = ref;
                    });
                    return React.createElement(velocity_react_1.VelocityComponent, __assign({}, _this.myTurnToAnimate(_this.Idanimation) ? {
                        animation: elem.props.animate,
                        duration: elem.props.duration ? elem.props.duration : 500,
                        runOnMount: false
                    } : {}), children);
                }
                else {
                    return elem;
                }
            };
            _this.state = {
                numAnimationLeft: 0
            };
            return _this;
        }
        Inner.prototype.render = function () {
            console.log(Target);
            return React.createElement(Target, {}, this.process(Target, this.props.children));
        };
        return Inner;
    }(React.Component));
    var func = function () {
        return Inner;
    };
    return func();
}; };
var Frame3 = (function (_super) {
    __extends(Frame3, _super);
    function Frame3(props, context) {
        return _super.call(this, props, context) || this;
    }
    Frame3.prototype.componentWillReceiveProps = function (nextProps) {
        console.log(nextProps);
    };
    Frame3.prototype.render = function () {
        console.log(this.props.order);
        console.log(this.props.Store.currentCount);
        var appear = this.props.Store.currentCount >= this.props.order;
        if (typeof this.props.order == "object") {
            appear = this.props.Store.currentCount < this.props.order[1]
                && this.props.Store.currentCount >= this.props.order[0];
        }
        console.log(this.props.animate);
        return React.createElement("div", { count: this.props.count },
            React.createElement(velocity_react_1.VelocityTransitionGroup, { enter: this.props.animate, leave: this.props.animateOut, runOnMount: this.props.order === 0, dragger: true }, appear ? this.props.children : undefined));
    };
    return Frame3;
}(React.Component));
Frame3 = __decorate([
    mobx_react_1.inject('Store'), mobx_react_1.observer
], Frame3);
exports.Frame3 = Frame3;
var List = (function (_super) {
    __extends(List, _super);
    function List(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            animate: _this.props.animate ? _this.props.animate : true
        };
        return _this;
    }
    List.prototype.render = function () {
        var _this = this;
        var animate = this.state.animate;
        return React.createElement("div", null,
            React.createElement(velocity_react_1.VelocityTransitionGroup, __assign({ runOnMount: true }, animate ? { enter: { animation: "transition.fadeIn", stagger: 100, drag: true } } : {}, { leave: { animation: "fadeOut", backwards: true } }),
                this.props.lists.map(function (value, index) {
                    return React.createElement("li", { className: cx({ "ul": _this.props.header }), style: _this.props.style, key: index }, value);
                }),
                this.props.children));
    };
    return List;
}(React.Component));
exports.List = List;
exports.others = function (defaultProps, props, ignore) {
    if (defaultProps === void 0) { defaultProps = {}; }
    if (props === void 0) { props = {}; }
    var defaultPropsKeys = Object.keys(defaultProps);
    var others = {};
    var animateAttributes = ['animate'];
    ignore = ignore || [];
    ignore = ignore.concat(animateAttributes);
    Object.keys(props).forEach(function (key) {
        if (ignore.findIndex(function (item) { return item === key; }) > -1) {
            return;
        }
    });
    return others;
};
//# sourceMappingURL=Frame.js.map