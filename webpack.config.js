const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "index.js",
  output: {
    path: __dirname + "/dist",
    filename: "app.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
