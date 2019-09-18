const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 去掉 console.log
      {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      }
      //GZIP压缩return
      {
        plugins: [
          new CompressionWebpackPlugin({
            test: /\.(js|css)(\?.*)?$/i,
            //需要压缩的文件正则threshold: 10240,
            //文件大小大于这个值时启用压缩
            deleteOriginalAssets: false
            //压缩后保留原文件
          })
        ];
      }
    }
  }
};
