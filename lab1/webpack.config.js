var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {extensions : ['.js', '.ts']},
    devServer: {
        static: path.join(__dirname, './dist/'),
        port: 9000
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'},
            
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            hash: true,
            title: "lab1",
            template: './dist/index.html',
            path: path.join(__dirname, './dist/'),
            filename: 'index.html'
        })
    ]
}