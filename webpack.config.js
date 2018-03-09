const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
                loader: 'babel-loader?sourceMap'
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
