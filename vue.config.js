/*
 * @Author: Caven
 * @Date: 2018-12-15 00:33:19
 * @Last Modified by: Caven
 * @Last Modified time: 2019-08-25 21:52:33
 */
const path = require('path')
const webpack = require('webpack')
const cesiumBuild = './node_modules/cesium/Build/Cesium'
const CopywebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  configureWebpack: {
    module: {
      unknownContextCritical: false
    },
    performance: {
      hints: false
    }
  },
  chainWebpack: config => {
    config.resolve.extensions.add('.js').add('.vue')
    config.resolve.alias.set('cesium', 'cesium/Source')
    config
      .plugin('copy')
      .use(CopywebpackPlugin, [
        [
          { from: path.join(cesiumBuild, 'Workers'), to: 'Workers' },
          { from: path.join(cesiumBuild, 'Assets'), to: 'Assets' },
          { from: path.join(cesiumBuild, 'Widgets'), to: 'Widgets' },
          { from: path.join(cesiumBuild, 'ThirdParty'), to: 'ThirdParty' }
        ]
      ])
    config.plugin('define').use(webpack.DefinePlugin, [{ CESIUM_BASE_URL: JSON.stringify('') }])
  }
}
