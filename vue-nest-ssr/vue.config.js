const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const isSSR = process.env.NODE_ENV === 'ssrProduction'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  productionSourceMap: false,
  outputDir: './resources',
  assetsDir: 'static',
  // pages: {
  //   index: {
  //     entry: `front-end/main${isDev ? '' : '-ssr'}.ts`,
  //     template: isDev ? 'resources/stub/index.html' : 'resources/templates/index.hbs',
  //     filename: 'resources/templates/dist/index.hbs', // 빌드 후 템플릿 파일
  //     path: ['/*'] // dev 모드 프록시에 적용할 path
  //   },
  // },

  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, './front-end'))
    config.entry('app').clear().add(`./front-end/main${ isSSR ? '-ssr' : '' }.ts`).end()

    if (isSSR) {
      config.target('node');
      config.optimization.delete('splitChunks');
      config.output.libraryTarget('commonjs2')
      config.plugin('ssr').use(VueSSRServerPlugin).end();
    }
  },
}