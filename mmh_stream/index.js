let fs = require('fs');
let Hapi = require('hapi');
let Path = require('path');
let Rot13 = require('rot13-transform');

let server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    config: {
        handler: (req, res) => {
            let thisfile = fs.createReadStream(Path.join(__dirname, 'input.txt'));
            res(thisfile.pipe(Rot13()));
        }
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});