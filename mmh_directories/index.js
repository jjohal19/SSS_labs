let Hapi = require('hapi');
let Path = require('path');
let Inert = require('inert');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Inert, (err) => {
    if (err) throw err;
});

server.route({
    path: '/foo/bar/baz/{name}',
    method: 'GET',
    handler: {
        directory:{
            path: Path.join(__dirname, 'public')
     }
    }
});

     server.start(function () {
        console.log('Server running at:', server.info.uri);
    });