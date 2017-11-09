var Hapi = require('hapi');
var Path = require('path');
var Inert = require('inert');

var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: __dirname
            }
        }
    }
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Inert, (err) => {
    if (err) throw err;
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: Path.join(__dirname, 'index.html')
    }
});

     server.start(function () {
        console.log('Server running at:', server.info.uri);
    });