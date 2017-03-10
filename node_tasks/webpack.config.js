const glob = require('glob');
const Util = require('./util');
const commonFileName = "app/assets/javascripts/application.js";
const webpack = require('webpack');

const entries = (() => {
    let ret= {};

    const files = glob.sync(Util.path.javascript, {
        ignore: Util.path.javascript_partial
    });

    files.forEach((filePath) => {
        const key = filePath.replace(/assets_src/, 'assets');
        ret[key] = filePath;
    });
    return ret;
})();

const getCommonChunksPlugin = () => {
    return new webpack.optimize.CommonsChunkPlugin({
        name: commonFileName,
        minChunks: 2
    })
};

const getPlugins = () => {
    if (process.env.NODE_ENV === 'production') {

        return [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            getCommonChunksPlugin()
        ]
    } else {
        return [
            getCommonChunksPlugin()
        ]
    }

};

module.exports = {
    entry: entries,
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": ["react", "es2015"],
                "plugins": []
            }
        }]
    },
    output: {
        filename: "[name]"
    },
    plugins: getPlugins()

};
