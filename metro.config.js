// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
config.transformer = {
  // `require.context` support
  unstable_allowRequireContext: true,
};

module.exports = config;
