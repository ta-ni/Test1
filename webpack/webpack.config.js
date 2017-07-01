const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
    return {
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        output: {
            filename: '[name].[hash].js',
            path: path.join(__dirname, '../build/'),
        },

        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                    },
                },
            ],
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: Infinity,
                filename: '[name].[hash].js',
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../src/index.html'),
                filename: 'index.html',
                inject: 'body',
            }),
        ],
    };
};