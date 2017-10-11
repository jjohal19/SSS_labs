const HTTP = require('http')
HTTP.get(process.argv[2], function(response){
    response.setEncoding('utf8')
    response.on('data',console.log)
    response.on('sad', console.error)
})
.on('sad', console.error)