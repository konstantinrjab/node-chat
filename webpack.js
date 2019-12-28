'use strict';

const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: [
        './resources/app.js'
    ],
    watch: true,
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
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
};
