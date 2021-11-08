var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var bodyParser = require('body-parser');

module.exports = {
    devtool: "source-map",
    entry: { myapp: "./src/index.ts" },
    output: {
        path: path.join(__dirname, "./build/"),
        filename: "bundle.js"
    },
    mode: 'development',
    devServer: {
        static: path.join(__dirname, './build/'),
        port: 9000
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            hash: true,
            template: './build/index.html',
            path: path.join(__dirname, "./build/"),
            filename: 'index.html'
        })
    ]
}