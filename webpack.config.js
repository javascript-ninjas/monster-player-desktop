var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/core/main.js',

    output: {
        filename: __dirname + '/dist/bundle.js'
    },

    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: "#cheap-module-source-map",

    resolve: {
        root: __dirname + '/app/core',
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                loader: 'babel-loader?stage=0'
            },
            {
                test: /\.(htm|html)$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },

    plugins: [
        new ngAnnotatePlugin({
            add: true
        })
    ]
};
