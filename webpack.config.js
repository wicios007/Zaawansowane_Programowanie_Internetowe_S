var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry:{
        app: './src/index.ts'
    },
    output:{
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    resolve: {extensions: ['.js', '.ts']},
    devServer:{
        static: path.join(__dirname, './build/'),
        port:9000   
    },  
    module:{
        rules:[
            {
                test:/\
            }
        ]
    }

}