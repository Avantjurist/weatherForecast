const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './Index',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'built'),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        historyApiFallback: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://api.openweathermap.org',
        //         secure: false,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },//why i need use that?
    },

    mode: 'none',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }, {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: 'index.html',
        }),
    ],

    watch: true,
};
