//var webpack = require('webpack');

module.exports = {
  entry: './www/static/js/app.js',
  output: {
    filename: 'app.dev.js',
    path: './www/static/js/',
    publicPath: '/static/js/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    proxy: {
      "*": "http://127.0.0.1:8360",
    }
  }
}
