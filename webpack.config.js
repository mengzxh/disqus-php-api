const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer'); 
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'disqus-api.js'       
    },

    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    use:[ 'css-loader','sass-loader','postcss-loader'],
                    fallback: 'style-loader',
                }),
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ]
            }
        }),
        new ExtractTextPlugin("disqus-api.css"),
    ],
};
