const fs = require('fs')
const express = require('express');
const router = express.Router();
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(`${__dirname}/../templates/index.html`, 'utf-8')
})

/* GET users listing. */
router.get('*', async (req, res) => {
  const html = await renderer.renderToString(
    new Vue({
      data: {
        url: req.originalUrl
      },
      template: `<div>The visited URL is: {{ url }}</div>`
    })
  )
  res.end(html)
});

module.exports = router;
