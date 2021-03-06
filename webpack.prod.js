
/*----------------------------------------------*\
  # 1. Required modules
\*----------------------------------------------*/
var path = require('path'),
    webpack = require('webpack');



/*----------------------------------------------*\
  # 2. Config Variables
\*----------------------------------------------*/
/* ENTRY FILES */
const entry = './src/index.js',
      libraryName = 'pr-calendar',


/* PLUGINS List */
plugins = [
    // for node_env
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
];


// for js
if (process.env.NODE_ENV === "production") {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    );
}


/*----------------------------------------------*\
  # 3. Configurations
\*----------------------------------------------*/
module.exports = {
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
        path: path.join(__dirname, 'dist'),
        publicPath: './',
        filename: process.env.NODE_ENV === "production" ? libraryName + '.min.js' : libraryName + '.js',
        chunkFilename: process.env.NODE_ENV === "production" ? '[name].min.js' : '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
}
