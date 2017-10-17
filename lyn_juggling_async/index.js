const http = require('http')
const bl = require('bl')

const serverresult =[]
let n = 0;

function httpGet (i){
    http.get(process.argv[2 + i], function(response){
        response.pipe(bl (function(err, data){
            if (err){
                return console.error('Error: ',err)
            }
            serverresult[i] = data.toString()
            n++
            if (n === 3){
                result()
            }
        }))
    })
}

for(let j=0; j < 3; j++){
    httpGet(j)
}

function result(){
    for(let j=0; j<3; j++){
        console.log(serverresult[j])
    }
}

