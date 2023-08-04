const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./index.js",
    module: {
        rules: [
            { test: /\.scss$/, use: ["style-loader", "scss-loader"] },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "static", to: "static" }], //сохраняет все статичные файлы
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
};
