
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // publicPath:"website",
  // productionSourceMap: false,
  chainWebpack: (config) => {
    const imagesRule = config.module.rule("images");
    imagesRule
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 600 }));
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: { drop_console: true },
            mangle: true, // Note `mangle.properties` is `false` by default.
            module: false,
            output: { comments: false },
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
          },
        }),
      ],
    },
  },
};
