const http = require('http')
const fs = require('fs')

const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(process.argv[3]).pipe(response)
})

server.listen(Number(process.argv[2]))