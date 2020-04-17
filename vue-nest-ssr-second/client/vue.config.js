const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const isSSR = process.env.NODE_ENV === 'ssr'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  productionSourceMap: false,
  outputDir: '../resources',
  assetsDir: 'static',
  indexPath: 'templates/dist/index.hbs',
  pages: {
    index: {
      entry: `src/main${isSSR ? '-ssr' : ''}.ts`,
      template: isDev
                ? 'public/index.html' // serve 실행 시
                : '../resources/templates/index.html' // 빌드 실행 시
    }
  },

  chainWebpack: config => {
    if (isSSR) {
      config.target('node')
      config.optimization.delete('splitChunks')
      config.output.libraryTarget('commonjs2')
      config.plugin('ssr').use(VueSSRServerPlugin).end()
    }
  }
}