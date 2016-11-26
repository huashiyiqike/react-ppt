import * as webpack from 'webpack'
import * as path from 'path';
var LiveReloadPlugin = require('webpack-livereload-plugin');

const webpackConfig = {

    entry: [
        './lib/app/index.js'
    ],
    devtool: 'eval',

    output: {
        path: path.join(__dirname, "../../app/"),
        publicPath: './',
        filename: 'bundle.js'

    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                loaders: ['html-path-loader']
            }, {
                test: /\.(less)/,
                exclude: [/node_modules/],
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(css)/,
                loaders: ['style', 'css']
            }, {
                test: /\.(png|jpg|gif)$/,
                loaders: ['url-loader?limit=3000&name=img/[name].[hash:5].[ext]']
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)/,
                loaders: ['url?limit=3000&name=font/[name].[hash:5].[ext]']
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.md$/,
                loader: 'text-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.NoErrorsPlugin(),
         new LiveReloadPlugin()
    ]

}

export default webpackConfig