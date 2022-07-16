const presets = [
  "@babel/preset-env",
  // Enable development transform of React with new automatic runtime
  [
    "@babel/preset-react",
    { development: !api.env("production"), runtime: "automatic" },
  ],
];

const plugins = ["babel-plugin-styled-components"];

module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets,
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(!api.env("production") && { plugins: ["react-refresh/babel"] }),
    plugins,
  };
};
