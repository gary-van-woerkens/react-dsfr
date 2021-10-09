const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    // "@storybook/preset-scss",
    "@storybook/addon-essentials"
  ],
  extensions: [".scss"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src'),
    });
    return config;
  },
}
