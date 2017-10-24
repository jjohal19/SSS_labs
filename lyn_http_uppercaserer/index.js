const http = require('http');
const t2m = require('through2-map')

const server = http.createServer(function(request, response) 
{
    if(request.method !== 'POST')
    {
        return response.end('Message\n');
        
    }
    request.pipe(t2m(function(data)
    {
        return data.toString().toUpperCase();
    }))
    .pipe(response);
});
server.listen(Number(process.argv[2]));