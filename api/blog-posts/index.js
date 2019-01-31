const { readdirSync } = require('fs')
const { join } = require('path')

const posts = readdirSync(join(__dirname, '../../pages/blog'))
  .filter(file => !['.DS_Store', 'index.js'].includes(file))
  .map(file => require(`../../pages/blog/${file}/meta.js`))

const handler = (req, res) => {
  /** @todo add pagination, filter, etc. using `req` */

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(posts))
}

module.exports = handler

if (!process.env.NOW_REGION) {
  require('http')
    .createServer(handler)
    .listen(3001)
}
