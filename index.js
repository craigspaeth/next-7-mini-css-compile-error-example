const http = require('http')
const next = require('next')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'

const startNextApp = async (dir, port) => {
  const app = next({ dev, dir })
  const handle = app.getRequestHandler()
  await app.prepare()
  const server = new http.Server((req, res) => {
    app.setAssetPrefix('')
    handle(req, res)
  })
  server.listen(port, err =>
    err ? console.error(err) : console.log(`Listening on ${port}`)
  )
}

;(async () => {
  await startNextApp(path.resolve(__dirname, 'app1'), 3000)
  await startNextApp(path.resolve(__dirname, 'app2'), 3001)
})()
