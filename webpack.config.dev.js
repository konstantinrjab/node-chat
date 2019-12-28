'use strict';

const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: [
        './resources/app.js'
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    output: {
        path: __dirname + "/public/assets/js",
        filename: "main.js"
    },
    node: {
        fs: 'empty'
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
};
