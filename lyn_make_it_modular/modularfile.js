const fs = require("fs")
const path = require("path")
module.exports = function(d, f, callback)
{
    fs.readdir(d, function(err, list){
        if (err){
            return callback(err)
        }
        
        list = list.filter(function(file){
            return path.extname(file) === '.' +f
        })
        callback(null,list)
    })
}