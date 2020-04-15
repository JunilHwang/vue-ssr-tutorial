const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const isSSR = process.env.NODE_ENV === 'ssrProduction'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  productionSourceMap: false,
  outputDir: './resources',
  assetsDir: 'static',
  indexPath: 'dist/index.hbs',
  pages: {
    index: {
      entry: `front-end/main${isSSR ? '-ssr' : ''}.ts`,
      template: `resources/${isDev ? 'stub' : 'template' }/index.html`,
    },
  },

  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, './front-end'))
    // config.entry('app').clear().add(`./front-end/main${ isSSR ? '-ssr' : '' }.ts`).end()

    if (isSSR) {
      config.target('node');
      config.optimization.delete('splitChunks');
      config.output.libraryTarget('commonjs2')
      config.plugin('ssr').use(VueSSRServerPlugin).end();
    }
  },
}