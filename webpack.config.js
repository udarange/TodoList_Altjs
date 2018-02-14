/*
 * (C) Copyright 2010-2018 hSenid Mobile Solutions (Pvt) Limited.
 * All Rights Reserved.
 *
 * These materials are unpublished, proprietary, confidential source code of
 * hSenid Mobile Solutions (Pvt) Limited and constitute a TRADE SECRET
 * of hSenid Mobile Solutions (Pvt) Limited.
 *
 * hSenid Mobile Solutions (Pvt) Limited retains all title to and intellectual
 * property rights in these materials.
 */

var path = require("path");
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                // test: /\.jsx?$/,
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}