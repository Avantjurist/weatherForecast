const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './App',

    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'built'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    mode: 'none',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: 'typed-css-modules-loader',
                        options: {
                            camelCase: true,
                            outDir: './built/css-modules'
                        },
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: "index.html"
        })
    ],

    watch: true
};