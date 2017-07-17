const path = require("path");
const webpack = require('webpack');
const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'build');

//entry - src path, output - dest path
const webpackConfig = {
    entry: {
        app: sourcePath + '/index.js'
    },
    output: {
        path: buildPath,
        filename: 'build.js'
    },
    module: {
      rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: 'url-loader',
            options: {
                limit: 200000,
            },
        },
        {
            test: /\.html$/,
            use: "html-loader"
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: "babel-loader"
        },
      ],
    },
    devServer: { // configure our development server, this will allow us to host the files we are working on.
      hot: true,
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      stats: 'errors-only',
      historyApiFallback: true,
      overlay: {
          errors: true,
          warnings: true,
      },
    },
    plugins: [  // This Plugin will enable us to use Hot Reloading
      new webpack.HotModuleReplacementPlugin(),
    ],
  }

  module.exports = function(){ // export our configuration so webpack can import it.
    return webpackConfig;
  }
