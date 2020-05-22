const path = require('path')

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      less: {
        jaascriptEnabled: true,
      },
    },
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : 'http://192.168.1.106:8000',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/GlobalVariable.less')],
    },
  },
  devServer: {
    proxy: 'http://localhost:7300/mock/5ec721b5e5045c0026a808c7/blog/'
  }
}
