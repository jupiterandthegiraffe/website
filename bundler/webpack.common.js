const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../js/three.js'),
    output:
    {
        hashFunction: 'xxhash64',
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            }
        ]
    }
}
