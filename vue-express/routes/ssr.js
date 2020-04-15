const fs = require('fs')
const express = require('express');
const router = express.Router();
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(`${__dirname}/../templates/index.html`, 'utf-8')
})

/* GET users listing. */
router.get('*', async (req, res) => {
  const app = new Vue({
    data: {
      url: req.originalUrl
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })
  const html = await renderer.renderToString(app, {
    title: 'this is ssr title'
  })
  res.end(html)
});

module.exports = router;
