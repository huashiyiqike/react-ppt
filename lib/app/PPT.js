"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var cx = require("classnames");
require("./ReactPPT.less");
var mobx_react_1 = require("mobx-react");
var PPT = (function (_super) {
    __extends(PPT, _super);
    function PPT(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.KeyPressInView = function (e) {
            if (!_this.state.isPlaying) {
                return;
            }
            switch (e.keyCode) {
                case 38:
                case 37:
                    if (_this.props.Store.currentCount > 0) {
                        _this.props.Store.currentCount -= 1;
                    }
                    else {
                        var next = _this.state.cur - 1 < 0 ? 0 : _this.state.cur - 1;
                        _this.state.frameCount = _this.props.content[next].props && _this.props.content[next].props.count;
                        if (_this.state.frameCount == undefined) {
                            _this.state.frameCount = 0;
                        }
                        _this.props.Store.setCount(_this.state.frameCount);
                        _this.setState({
                            cur: next,
                            forward: false
                        });
                    }
                    break;
                case 27:
                    _this.setState({
                        isPlaying: false
                    });
                    break;
                default: {
                    var finish = _this.state.cur >= _this.props.content.length - 1 && _this.props.Store.currentCount >= _this.state.frameCount;
                    if (finish) {
                        _this.setState({
                            isPlaying: false
                        });
                    }
                    else {
                        if (_this.props.Store.currentCount < _this.state.frameCount) {
                            console.log(_this.props.Store.currentCount);
                            _this.props.Store.currentCount += 1;
                        }
                        else {
                            _this.state.frameCount = _this.props.content[_this.state.cur + 1].props && _this.props.content[_this.state.cur + 1].props.count;
                            if (_this.state.frameCount == undefined) {
                                _this.state.frameCount = 0;
                            }
                            _this.props.Store.setCount(0);
                            _this.setState({
                                cur: _this.state.cur + 1,
                                forward: true
                            });
                        }
                    }
                }
            }
        };
        _this.Click = function (e) {
            if (!_this.state.isPlaying) {
                return;
            }
            e.stopPropagation();
            var finish = _this.state.cur >= _this.props.content.length - 1 && _this.props.Store.currentCount >= _this.state.frameCount;
            if (finish) {
                _this.setState({
                    isPlaying: false
                });
            }
            else {
                if (_this.props.Store.currentCount < _this.state.frameCount) {
                    _this.props.Store.currentCount += 1;
                }
                else {
                    _this.setState({
                        cur: _this.state.cur + 1
                    });
                }
            }
        };
        _this.view = function (show) {
            var content = _this.props.content;
            return React.createElement("div", { className: "view", tabIndex: 1, ref: "view", onClick: _this.Click.bind(_this), onKeyDown: _this.KeyPressInView.bind(_this) }, show && content[_this.state.cur]);
        };
        _this.setCur = function (index) {
            _this.setState({
                cur: index,
                isPlaying: _this.state.isPlaying
            });
        };
        _this.preview = function (content) {
            return React.createElement("div", { className: "preview" }, content);
        };
        _this.play = function (e) {
            e.stopPropagation();
            _this.setState({
                isPlaying: true,
                cur: _this.state.cur
            });
            console.log(_this.refs["view"]);
            _this.refs["view"].focus();
            _this.state.frameCount = _this.props.content[_this.state.cur].props
                && _this.props.content[_this.state.cur].props.count;
            if (_this.state.frameCount == undefined) {
                _this.state.frameCount = 0;
            }
        };
        _this.stop = function (e) {
            e.stopPropagation();
            _this.setState({
                isPlaying: false,
                cur: _this.state.cur
            });
        };
        _this.prev = function (e) {
            e.stopPropagation();
            _this.setState({
                cur: _this.state.cur - 1,
                isPlaying: _this.state.isPlaying
            });
        };
        _this.next = function (e) {
            e.stopPropagation();
            _this.setState({
                cur: _this.state.cur + 1,
                isPlaying: _this.state.isPlaying
            });
            console.log(_this.state.cur);
        };
        _this.control = function () {
            return React.createElement("div", { className: cx({ "control-play": _this.state.isPlaying }) },
                React.createElement("div", { className: "control" },
                    React.createElement("span", { className: "btn-play", onClick: _this.play.bind(_this) }, "o"),
                    React.createElement("span", { className: "btn-stop", onClick: _this.stop.bind(_this) }, "x"),
                    React.createElement("span", { className: "btn-prev", onClick: _this.prev.bind(_this) }, "<"),
                    React.createElement("span", { className: "btn-next", onClick: _this.next.bind(_this) }, ">")));
        };
        _this.slider = function (divs, show) {
            if (show) {
                return null;
            }
            return React.createElement("div", { className: "slider" }, divs.map(function (value, index) {
                return React.createElement("div", { key: index, onClick: _this.setCur.bind(_this, index), className: "slider-piece" },
                    React.createElement("div", { className: "dummy" }),
                    React.createElement("div", { className: "slider-index" },
                        " ",
                        index + 1),
                    React.createElement("div", { className: "slider-value" }, value));
            }));
        };
        _this.state = {
            isPlaying: false,
            cur: _this.props.cur ? _this.props.cur : 0,
            forward: true
        };
        _this.view = _this.view.bind(_this);
        return _this;
    }
    PPT.prototype.componentDidMount = function () {
        var _this = this;
        document.onkeydown = function (e) {
            if (_this.state.isPlaying) {
                return;
            }
            else {
                console.log(e.keyCode);
                switch (e.keyCode) {
                    case 13:
                        _this.play(e);
                        break;
                    case 38:
                    case 37:
                        var next = _this.state.cur - 1 < 0 ? 0 : _this.state.cur - 1;
                        _this.setState({
                            cur: next,
                            forward: false
                        });
                        break;
                    case 39:
                    case 40:
                        if (_this.state.cur >= _this.props.content.length - 1) {
                            break;
                        }
                        _this.props.Store.setCount(0);
                        _this.setState({
                            cur: _this.state.cur + 1,
                            forward: true
                        });
                        break;
                    default:
                        return;
                }
            }
        };
    };
    PPT.prototype.componentDidUpdate = function () {
        if (!this.state.isPlaying) {
            this.refs["view"].blur();
        }
    };
    PPT.prototype.render = function () {
        return (React.createElement(mobx_react_1.Provider, { currentCount: this.props.Store.currentCount },
            React.createElement("div", { className: "ppt" },
                this.slider(this.props.content, this.state.isPlaying),
                !this.state.isPlaying && this.preview(this.props.content[this.state.cur]),
                this.view(this.state.isPlaying),
                this.control())));
    };
    return PPT;
}(React.Component));
PPT = __decorate([
    mobx_react_1.inject('Store'), mobx_react_1.observer
], PPT);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PPT;
//# sourceMappingURL=PPT.js.map