const proxyList = require('./proxies/index')

module.exports = {
  async rewrites() {
    return proxyList
  },
}