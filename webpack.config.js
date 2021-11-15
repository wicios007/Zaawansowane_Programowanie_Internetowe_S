var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var bodyParser = require('body-parser');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {app:"./src/index.ts"},
    output: {
        path: path.join(__dirname,"./build/"),
        filename: "bundle.js"
    },
    watch:true,
    resolve:{
        extensions: [".js",".ts"]
    },
    module:{
        rules:[
            {test:/\.ts$/, loader:"ts-loader"}
        ]
    },
    devServer: {
        static: path.join(__dirname, './build/'),
        port: 9000,
        onBeforeSetupMiddleware: function (devServer) {
            let i = 0;
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            devServer.app.use(bodyParser.json());

            devServer.app.all('/proceed', bodyParser.json(), (req, res) => {
                res.send(req.body);
            });

            devServer.app.all('/error', (req, res) => {
                res.statusCode = 404;
                res.send();
            });

            devServer.app.all('/error1', bodyParser.json(), (req, res) => {
                i++;
                if (i % 3 == 0)
                    res.statusCode = 200;
                else
                    res.statusCode = 500;
                res.send(req.body);
            });
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            hash:true,
            title:"Nasza pierwsza aplikacja typescript",
            myPageHeader: 'Nasza pierwsza aplikacja typescript',
            template: './build/index.html',
            chunks: ['vendor','shared','app'],
            path: path.join(__dirname, "./build/"),
            filename:'index.html' 
        })
    ]
}