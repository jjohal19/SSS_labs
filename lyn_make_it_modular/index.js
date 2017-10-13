const filterfile = require('./modularfile.js')
const d = process.argv[2]
const f = process.argv[3]
filterfile(d, f,function(err, list){
    if (err){
        return console.error('Error: ', err)
    }
    list.forEach(function(file){
        console.log(file)
    })
})