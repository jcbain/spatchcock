const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const sharedConfig = require("./webpack.shared");

module.exports = merge(sharedConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./build"), // we will build to `build` directory
    filename: "[contenthash].bundle.js", // bring back the contenthash
  },
  plugins: [
    new CleanWebpackPlugin(), // clean up stale or old builds
  ],
});
