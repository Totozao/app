const webpack = require('@nativescript/webpack')
const { resolve } = require('path')

module.exports = env => {
  webpack.init(env)

  // alias tns-core-modules -> @nativescript/core
  webpack.chainWebpack(config => {
    config.resolve.alias.set('tns-core-modules', '@nativescript/core')
  })

  return webpack.resolveConfig()
}