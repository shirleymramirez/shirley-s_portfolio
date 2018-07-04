const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
    entry: path.join(__dirname, "./src"),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    stats: 'errors-only',
    

    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
                // include: path.resolve('/src')
            },
            {
                test: /\.css$/,
                // include: __dirname + '/src',
                use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",   
                            // loader: ExtractTextPlugin.extract("css-loader"), 
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: "[name]_[local]_[hash:base64]",
                                sourceMap: true,
                                minimize: true,
                                // styles: {
                                //     'materialize': true,
                                // },
                             },
                        },
                    ],
                },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'file-loader' 
            },
            {
                test: /\.gif/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }
        
        ]
    },

    plugins: [
        new HtmlWebPackPlugin(
            {
                template:"./src/index.html",
                $: "jquery",
                jQuery: "jquery",
                'window.$': 'jquery',
                'window.jquery': 'jquery'
            }
        ),
        // new ExtractTextPlugin("styles.css")
    ],

    resolve: {
         alias: {
            materializecss: 'node-modules/materialize-css/dist/css/materialize.min.css',
            materialize: 'node-modules/materialize-css/dist/js/materialize.min.js',
            jquery:'node-modules/jquery/dist/jquery.min.js'
         }
     }

};