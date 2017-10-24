const url= require('url');
const http = require('http');

function utime (time){
    return {unixtime: time.getTime()};
}

function parsetime (time) {
    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

const server = http.createServer(function(request, response){
    const URL = url.parse(request.url, true);
    const date = new Date(URL.query.iso);
    let final;
    if(/^\/api\/parsetime/.test(request.url))
    {
        final = parsetime(date);
    }
    else if (/^\/api\/unixtime/.test(request.url)){
        final = utime(date);
    }
    if(final){
        response.writeHead(200,{'Content-Type': 'application/json'});
        response.end(JSON.stringify(final));
        
    }
    else{
        response.writeHead(404, 'Error');
        response.end();
    }
});
server.listen(Number(process.argv[2]));