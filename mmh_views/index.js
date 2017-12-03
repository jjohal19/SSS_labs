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
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});
server.route({path: '/', method:'GET', handler: {view: 'index.html'}});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});