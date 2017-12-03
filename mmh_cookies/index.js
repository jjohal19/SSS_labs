var Hapi = require('hapi');
var Boom = require('boom');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.state('session', {
    path: '/',
    encoding: 'base64json',
    ttl: 10,
    domain: 'localhost',
    isSameSite: false,
    isSecure: false,
    isHttpOnly: false
});

server.route({
    path: '/set-cookie',
    method: 'GET',
    handler: (req, res) => {
        return res({
            message : 'success'
        }).state('session', { key : 'makemehapi' });
    },
    config: {
        state: {
            parse: true,
            failAction: 'log'
        }
    }
});

server.route({
    path: '/check-cookie',
    method: 'GET',
    handler: (req, res) => {
        var session = req.state.session;
        var rslt;

        if (session) {
            rslt = { user : 'hapi' };
        } else {
            rslt = Boom.unauthorized('Missing authentication');
        }

        res(rslt);
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
