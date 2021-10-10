const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: "source-map",
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './docs/assets/scripts')
    },
    mode: 'development',
}
