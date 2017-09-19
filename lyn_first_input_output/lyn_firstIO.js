var fs = require('fs')
var l=fs.readFileSync(process.argv[2]).toString().split('\n').length - 1
console.log(l)