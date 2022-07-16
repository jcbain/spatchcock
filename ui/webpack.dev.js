const { merge } = require("webpack-merge");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const sharedConfig = require("./webpack.shared");

module.exports = merge(sharedConfig, {
  mode: "development",
  devServer: {
    client: { overlay: false },
    hot: true,
  },
  plugins: [new ReactRefreshPlugin()],
});
