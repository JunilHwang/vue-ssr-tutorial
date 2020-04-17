const path = require('path')

module.exports = {
  outputDir: '../resources',
  assetsDir: 'static',
  indexPath: 'templates/dist/index.hbs',
  pages: {
    index: {
      entry: 'src/main.ts'
    }
  },

  webpackChain: config => {

  }
}