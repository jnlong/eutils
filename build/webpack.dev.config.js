const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    mode: 'production',
    // 入口
    entry: {
        main: './examples/main',
    },
    // 输出
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader?browsers=last 7 versions'
            ]
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(rootPath, 'examples/dist/index.html'),
            template: path.join(rootPath, 'examples/index.html')
        }),
    ]
}

module.exports = config
