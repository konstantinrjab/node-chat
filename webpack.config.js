'use strict';

const {VueLoaderPlugin} = require('vue-loader');
var nodeExternals = require('webpack-node-externals');

// module.exports = {
//     mode: 'development',
//     entry: [
//         './resources/app.js',
//         './app/main.js'
//     ],
//     watch: true,
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 use: 'vue-loader'
//             }
//         ]
//     },
//     output: {
//         path: __dirname + "/public/assets/js",
//         filename: "main.js"
//     },
//     devtool: 'source-map',
//     plugins: [
//         new VueLoaderPlugin()
//     ]
// };

const common = {
    module: {
        loaders: [ /* common loaders */]
    },
    plugins: [ /* common plugins */],
    resolve: {
        extensions: ['', '.js', '.jsx'] // common extensions
    }
    // other plugins, postcss config etc. common for frontend and backend
};

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
