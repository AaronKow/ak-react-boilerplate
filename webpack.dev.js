/*----------------------------------------------*\
  # 1. Required modules
\*----------------------------------------------*/
var path = require('path'),
    webpack = require('webpack'),
    HTMLWebpackPlugin = require('html-webpack-plugin');



/*----------------------------------------------*\
  # 2. Config Variables
\*----------------------------------------------*/
/* ENTRY FILES */
const entry = './example/assets/js/script.js',


    /* PLUGINS List */
    plugins = [
        // for node_env
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),

        // for html
        new HTMLWebpackPlugin({
            template: './example/assets/html/index.html' // input html
        })
    ];




/*----------------------------------------------*\
  # 3. Configurations
\*----------------------------------------------*/
module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    resolve: {
        alias: {
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    output: {
        path: path.join(__dirname, 'example'),
        publicPath: './',
        filename: 'script.js',
        chunkFilename: '[name].js'
    }
}
