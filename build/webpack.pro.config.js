const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
    mode: 'production',
    entry: {
        eutils: path.resolve(rootPath, 'src/index.js'),
        // index: path.resolve(__dirname, '../src/style/index.js')
    },
    output: {
        filename: `[name].min.js`,
        path: path.resolve(rootPath, 'dist'),
        library: `${pkg.name}`,
        libraryTarget: "umd"
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
    ]
}

module.exports = config
