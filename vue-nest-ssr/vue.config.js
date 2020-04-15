const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = {
  outputDir: './static',
  chainWebpack: config => {
    const isSSR = process.env.NODE_ENV === 'ssrProduction'
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