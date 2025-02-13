const path = require("path");
const slsw = require("serverless-webpack");

const entries = {};

Object.keys(slsw.lib.entries).forEach(
  key => (entries[key] = [slsw.lib.entries[key]])
);

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: entries,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  },
  target: "node",
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  }
};
