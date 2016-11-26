"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var ReactPPT_1 = require("./ReactPPT");
require("./index.less");
var cx = require("classnames");
var Frame_1 = require("./Frame");
var Lists = (function (_super) {
    __extends(Lists, _super);
    function Lists() {
        return _super.apply(this, arguments) || this;
    }
    Lists.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null,
            this.props.lists.map(function (value, index) {
                return React.createElement("li", { className: cx({ "ul": _this.props.header }), key: index }, value);
            }),
            this.props.children);
    };
    return Lists;
}(React.Component));
var Wrapper = (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper() {
        return _super.apply(this, arguments) || this;
    }
    Wrapper.prototype.render = function () {
        return React.createElement("div", { className: "wrapper" },
            React.createElement("div", { className: "header" }, this.props.header),
            this.props.children,
            React.createElement("footer", null, "\u5415\u797A|\u57FA\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u7684\u65F6\u95F4\u5E8F\u5217\u5EFA\u6A21"));
    };
    return Wrapper;
}(React.Component));
var divs = [
    React.createElement("div", { key: 1, className: "wrapper" },
        React.createElement("div", { className: "title" }, "\u57FA\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u7684\u65F6\u95F4\u5E8F\u5217\u5EFA\u6A21"),
        React.createElement("div", { className: "body" },
            "\u6E05\u534E\u5927\u5B66\u5DE5\u7A0B\u7855\u58EB\u6BD5\u4E1A\u8BBA\u6587\u7B54\u8FA9",
            React.createElement("br", null),
            React.createElement("h2", null, "\u5415\u797A"),
            React.createElement("br", null),
            React.createElement("br", null),
            "\u6E05\u534E\u5927\u5B66-\u9999\u6E2F\u4E2D\u6587\u5927\u5B66\u5A92\u4F53\u79D1\u5B66\u6280\u672F\u4E0E\u7CFB\u7EDF\u8054\u5408\u7814\u7A76\u4E2D\u5FC3",
            React.createElement("br", null),
            "\u6E05\u534E\u5927\u5B66\u4FE1\u606F\u79D1\u5B66\u4E0E\u6280\u672F\u56FD\u5BB6\u5B9E\u9A8C\u5BA4",
            React.createElement("br", null),
            "2016\u5E7412\u6708",
            React.createElement("br", null))),
    React.createElement(Wrapper, { key: 2, header: "提纲" },
        React.createElement("ul", { className: "list" },
            React.createElement("li", { className: "ul" }, "\u7814\u7A76\u610F\u4E49\u4E0E\u80CC\u666F"),
            React.createElement(Lists, { header: true, lists: ["主要研究内容"] },
                React.createElement(Lists, { lists: ["长时短时记忆模型优化",
                        "LSTM-RTRBM模型"] })),
            React.createElement(Lists, { header: true, lists: ["论文主要工作与贡献总结"] }))),
    React.createElement(Wrapper, { key: 3, header: "提纲" },
        React.createElement("ul", { className: "list" },
            React.createElement("li", { className: "ul" }, "\u7814\u7A76\u610F\u4E49\u4E0E\u80CC\u666F"),
            React.createElement("div", { className: "dimmer" },
                React.createElement(Lists, { header: true, lists: ["主要研究内容"] },
                    React.createElement(Lists, { lists: ["长时短时记忆模型优化",
                            "LSTM-RTRBM模型"] })),
                React.createElement(Lists, { header: true, lists: ["论文主要工作与贡献总结"] })))),
    React.createElement(Wrapper, { key: 4, header: "提纲" },
        React.createElement("ul", { className: "list" },
            React.createElement("li", { className: "ul" }, "\u7814\u7A76\u610F\u4E49\u4E0E\u80CC\u666F"),
            React.createElement(Lists, { header: true, lists: ["主要研究内容"] },
                React.createElement(Lists, { lists: ["长时短时记忆模型优化",
                        "LSTM-RTRBM模型"] })),
            React.createElement(Lists, { header: true, lists: ["论文主要工作与贡献总结"] }))),
    React.createElement(Wrapper, { key: 5, header: "长时短时记忆模型" },
        React.createElement("ul", { className: "list" },
            React.createElement(Lists, { header: true, lists: ["简介", "结构", "训练方法", "优化"] }))),
    React.createElement(Wrapper, { key: 6, header: "受限玻尔兹曼机" },
        React.createElement("ul", { className: "list" },
            React.createElement(Lists, { header: true, lists: ["简介", "结构", "训练方法"] }),
            React.createElement(Frame_1.default, null))),
    React.createElement("div", null,
        "3",
        React.createElement("div", null, "2")),
    React.createElement("div", null,
        "4",
        React.createElement("div", null, "2")),
    React.createElement("div", null,
        "5",
        React.createElement("div", null, "2")),
    React.createElement("div", null,
        "1",
        React.createElement("div", null, "2")),
    React.createElement("div", null, " pl;ac"),
    React.createElement("div", null,
        "1",
        React.createElement("div", null, "2")),
    React.createElement("div", null, " pl;ac"),
    React.createElement("div", null,
        "1",
        React.createElement("div", null, "2")),
    React.createElement("div", null, " pl;ac"),
    React.createElement("div", null,
        "1",
        React.createElement("div", null, "2")),
    React.createElement("div", null, " pl;ac"),
    React.createElement("div", null,
        "1",
        React.createElement("div", null, "2")),
    React.createElement("div", null, " pl;ac"),
    React.createElement("div", null,
        "1",
        React.createElement("div", null, "2")),
    React.createElement("div", null, " pl;ac"),
    React.createElement("div", null,
        "1",
        React.createElement("div", null, "2")),
];
ReactDOM.render(React.createElement(ReactPPT_1.default, { content: divs, cur: 5 }), document.querySelector('#content'));
//# sourceMappingURL=index.js.map