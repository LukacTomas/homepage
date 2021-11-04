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
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: "style-loader" },
          // [css-loader](/loaders/css-loader)
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          // [sass-loader](/loaders/sass-loader)
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
};
