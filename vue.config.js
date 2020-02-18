// Application Webpack || Configuration
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


// Application Module || Env
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const dev = "\'https://dev.APP_NAME.com\'";
const prod = "\'https://www.APP_NAME.com\'";
const stage = "\'https://stage.APP_NAME.com\'";
const local = "\'http://localhost:3000\'";


// Application Module || Export
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  publicPath: '/',
  lintOnSave: true,
  filenameHashing: false,
  assetsDir: 'build',
  outputDir: 'client-production',
  css: {
    sourceMap: true,
  },
  pages: {
    index: {
      entry: 'client-apps/primary.js',
      template: 'index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    performance: {
      maxAssetSize: 500000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client-apps/'),
        src: path.resolve(__dirname, 'client-apps/'),
        '@static': path.resolve(__dirname, 'client-assets/'),
        '@styles': path.resolve(__dirname, './client-apps/vue-environment/'),
        '@template': path.resolve(__dirname, './client-assets/client-styles/'),
        // Make sure for IDE that webpack is set to node_modules\@vue\cli-service\webpack.config.js [CTRL + ALT + S]
      },
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'client-assets' },
      ]),
    ],
  },
};

// Application Module || Export Append
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
module.exports.configureWebpack.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      VUE_APP_Build: `${process.env['SERVER']}`,
      VUE_APP_Server: eval(process.env['SERVER']),
      VUE_APP_Version: JSON.stringify(require('./package.json').version),
    },
  }),
);
