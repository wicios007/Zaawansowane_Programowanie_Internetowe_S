var htmlWebpackplugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {app: './src/index.ts'}, 
    output:{
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    watch:true,
    resolve: { extensions: ['.js', '.ts']},
    devServer: {
        static: path.join(__dirname, './build'),
        port: 9000
    },
    module:{
        rules:[
            { test : /\.ts$/, loader: 'ts-loader'}
        ]
    },
    plugins : [
        new htmlWebpackplugin({
            hash: true,
            title: 'Nasza pierwsza aplikacja typescript',
            myPageHeader: 'Nasza pierwsza aplikacja typescript',
            template: './build/index.html',
            path: path.join(__dirname, './build'),
            filename: 'index.html'
        })
    ]
}