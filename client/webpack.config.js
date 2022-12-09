const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: { extensions: ['.js', '.jsx', '.css'] },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]'
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [`${__dirname}/src/scss`],
                            data: `@import 'variables';`
                        }
                    }
                ]
            },
            {
                test: /\.(svg|jpg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            }
        ]
    },
    Plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        overlay: true,
        open: true
    },
}