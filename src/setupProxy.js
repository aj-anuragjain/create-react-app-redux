const proxy = require('http-proxy-middleware')

module.exports = function proxyCreator(app) {
  app.use(proxy('/test/api', {target: 'http://localhost:5000/'}))
}
