const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    client: { overlay: false },
    hot: true,
  },
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: path.join(__dirname, "src"),
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
  ].filter(Boolean),
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
