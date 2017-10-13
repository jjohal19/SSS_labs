const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, serverdata) {
    if (err) {
      return console.error('Error: ',err)
    }
    serverdata = serverdata.toString()
    console.log(serverdata.length)
    console.log(serverdata)
  }))
})