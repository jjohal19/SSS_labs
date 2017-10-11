const fs = require('fs');
const para = process.argv[2];
fs.readFile(para, function(err, data)
{
    if(err)
    {
        return console.log(err)
    }
    const dash =data.toString().split('\n').length - 1
    console.log(dash);
})