const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true,
                            styles: {
                                'materialize': true,
                            },
                        }
                    }
                ]
            },
            
                { 
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
                },
                { 
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                    loader: 'file-loader' 
                }
            // }
        ]
    },
    // plugins: [htmlWebpackPlugin]
    plugins: [
        new HtmlWebPackPlugin(
            {
                template:"./src/index.html", 
                $: "jquery",
                jQuery: "jquery"
            }
        )
    ],

};