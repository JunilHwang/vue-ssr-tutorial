const express = require('express');
const router = express.Router();
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

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
  res.end(`<!DOCTYPE html>
<html lang="en">
  <head><title>Hello</title></head>
  <body>${html}</body>
</html>`)
});

module.exports = router;
