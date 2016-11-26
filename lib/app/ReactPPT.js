"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var cx = require("classnames");
require("./ReactPPT.less");
var ReactPPT = (function (_super) {
    __extends(ReactPPT, _super);
    function ReactPPT(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.KeyPressInView = function (e) {
            switch (e.keyCode) {
                case 37:
                    _this.setState({
                        cur: _this.state.cur - 1 < 0 ? 0 : _this.state.cur - 1
                    });
                    break;
                case 27:
                    _this.setState({
                        isPlaying: false
                    });
                    break;
                default: {
                    var finish = _this.state.cur >= _this.props.content.length - 1;
                    _this.setState({
                        isPlaying: finish ? false : true,
                        cur: finish ? _this.state.cur : _this.state.cur + 1
                    });
                }
            }
        };
        _this.Click = function (e) {
            if (!_this.state.isPlaying) {
                return;
            }
            e.stopPropagation();
            var finish = _this.state.cur >= _this.props.content.length - 1;
            _this.setState({
                isPlaying: finish ? false : true,
                cur: finish ? _this.state.cur : _this.state.cur + 1
            });
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
            cur: _this.props.cur ? _this.props.cur : 0
        };
        _this.view = _this.view.bind(_this);
        return _this;
    }
    ReactPPT.prototype.componentDidUpdate = function () {
        if (!this.state.isPlaying) {
            this.refs["view"].blur();
        }
    };
    ReactPPT.prototype.render = function () {
        return (React.createElement("div", { className: "ppt" },
            this.slider(this.props.content, this.state.isPlaying),
            !this.state.isPlaying && this.preview(this.props.content[this.state.cur]),
            this.view(this.state.isPlaying),
            this.control()));
    };
    return ReactPPT;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactPPT;
//# sourceMappingURL=ReactPPT.js.map