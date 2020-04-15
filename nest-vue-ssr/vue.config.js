module.exports = {
  pages: {
    index: {
      entry: 'front-end/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }
}