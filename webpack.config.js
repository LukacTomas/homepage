const path = require("path");

module.exports = {
  devServer: {
    static: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
};
