const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.entry('app').clear().add('./frontend/main.ts').end()
    config.resolve.alias.set('@', path.join(__dirname, './frontend'))
  }
}