/**
 * 基础配置
 * */
var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin=require('vue-loader/lib/plugin')
process.env.projectName=process.env.projectName?process.env.projectName:'mobile';
var config = process.env.projectName === 'pc' ? require('./config/pc_index') : require('./config/mobile_index');
var utils = require('./config/utils');
var merge = require('webpack-merge');
var baseWebpackConfig={
  context: __dirname,
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          resolve('client')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        include: [resolve('client')],
        loader: 'babel-loader',
        query:{
          plugins:['istanbul']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js','.vue', '.json'],
    alias: {
      '@': path.resolve('client'),
      'vue': 'vue/dist/vue.js',
      'assets': path.resolve('client/assets'),
      'api': path.resolve('client/'+process.env.projectName+'/api'),
      'home': path.resolve('client/'+process.env.projectName+'/home'),
      'login': path.resolve('client/'+process.env.projectName+'/login'),
      'apiPc': path.resolve('client/pc/api'),
      'homePc': path.resolve('client/pc/home'),
      'loginPc': path.resolve('client/pc/login'),
    }
  },
  plugins:[
    new VueLoaderPlugin()
  ]
};

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(baseWebpackConfig,{
  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },
});
