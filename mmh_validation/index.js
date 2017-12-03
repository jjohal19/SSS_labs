var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/chickens/{breed}',
    method: 'GET',
    config: {
        handler: (req, res) => {
            res('You asked for the chicken ' + req.params.breed);
        },
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});