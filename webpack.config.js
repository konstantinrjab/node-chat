'use strict';

const {VueLoaderPlugin} = require('vue-loader');
let nodeExternals = require('webpack-node-externals');

const frontend = {
    mode: 'development',
    entry: [
        './resources/app.js'
    ],
    watch: true,
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
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

const backend = {
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()],
    // externals: ['uws'],
    entry: [
        './app/main.js'
    ],
    devtool: 'source-map',
    output: {
        filename: 'server.js'
    }
};

module.exports = [
    Object.assign({}, frontend),
    Object.assign({}, backend)
];
