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
}
