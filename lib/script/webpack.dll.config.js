"use strict";
var path = require("path");
var webpack = require("webpack");
var dllLists = [
    'react',
    'react-dom',
    'velocity-react',
    'velocity-animate'
];
module.exports = {
    entry: {
        library: dllLists
    },
    output: {
        filename: '[name].dll.js',
        path: path.join(__dirname, '../../app/dll'),
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../../app/dll', '[name]-mainfest.json'),
            name: '[name]'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css/,
                loaders: ['style', 'css']
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=1024&name=static/dll/img/[hash:8].[name].[ext]'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url?limit=1024&name=static/dll/font/[hash:8].[name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};
//# sourceMappingURL=webpack.dll.config.js.map