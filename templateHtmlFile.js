const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateHtmlFile = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
    }),
    new HtmlWebpackPlugin({
        filename: "signin.html",
        template: path.resolve(__dirname, './src/pages/signin.html'),
    }),
]
module.exports = templateHtmlFile;