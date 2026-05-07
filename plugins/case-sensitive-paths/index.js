const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = function caseSensitivePathsPlugin() {
  return {
    name: 'case-sensitive-paths-plugin',

    configureWebpack() {
      return {
        plugins: [new CaseSensitivePathsPlugin()],
      };
    },
  };
};