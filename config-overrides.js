// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    config: path.resolve(__dirname, 'src/config'),
    pages: path.resolve(__dirname, 'src/pages'),
    routes: path.resolve(__dirname, 'src/routes'),
    services: path.resolve(__dirname, 'src/services'),
    styles: path.resolve(__dirname, 'src/styles'),
  }),
);
