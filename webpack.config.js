var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var fableUtils = require("fable-utils");

function resolve(filePath) {
  return path.join(__dirname, filePath)
}

var babelOptions = fableUtils.resolveBabelOptions({
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      },
      "modules": false
    }]
  ]
});

var isProduction = process.argv.indexOf("-p") >= 0;
console.log("Bundling for " + (isProduction ? "production" : "development") + "...");

module.exports = {
  devtool: isProduction ? undefined : "source-map",
  entry: "./src/App.fsproj",
  output: {
    filename: "[name]/bundle.js",
    path: resolve('public'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      "node_modules", resolve("node_modules")
    ]
  },
  node: {
    fs: 'empty'
  },
  externals: {
    "PIXI": "PIXI"
  },
  devServer: {
    contentBase: resolve('public'),
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.fs(x|proj)?$/,
        use: {
          loader: "fable-loader",
          options: {
            babel: babelOptions,
            define: isProduction ? [] : ["DEBUG"]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        },
      }
    ]
  }
};
