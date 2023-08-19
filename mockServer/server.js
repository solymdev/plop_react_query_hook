const jsonServer = require('json-server')
const routes = require('./data/routes')
let server = jsonServer.create()
const router = jsonServer.router(require('./dbLoader.js')())
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(
  jsonServer.rewriter({
    ...routes,
  }),
)
server.use(router)
server.listen(
  {
    host: 'localhost',
    port: 3004,
  },
  function () {
    console.log('JSON Server is running on http://localhost:3004')
  },
)
