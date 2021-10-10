const path = require('path')
const webpack = require('webpack')

// Plugins.
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    devtool: "source-map",
    entry: {
        './assets/scripts/index': './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, './docs')
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin({verbose: true}),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            //favicon: path.resolve(__dirname, 'src/images/png/logo.png'),
            filename: 'index.html',
            inject: true,
            inlineSource: '.css$',
            //template: path.resolve(__dirname, 'src/html/index.html'),
            title: 'Nammy'
        }),
    ]
}
