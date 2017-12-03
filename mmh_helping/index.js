let Hapi = require('hapi');
let Vision = require('vision');
let Path = require('path');

let server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Vision, (error) => {
    if (error) throw error;
});

server.views({
    path: Path.join(__dirname, 'templates'),
    engines: {
        html: require('handlebars')
    },
    helpersPath:  Path.join(__dirname, 'helpers')
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        view: 'template.html'
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});