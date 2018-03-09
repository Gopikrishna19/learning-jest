const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'sourcemap',
    entry: './src',
    output: {
        path: `${__dirname}/dist`,
        filename: 'learning-jest.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /.s?css$/,
                exclude: /node_modules/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html'
        })
    ]
};
