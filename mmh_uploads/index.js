var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
  port: Number(process.argv[2] || 8080),
  host: 'localhost'
});

server.route({
    path: '/upload',
  method: 'POST',
  config: {
    handler: (req, res) => {
      var body = '';

      req.payload.file.on('data', (data) => {
        body += data;
      });

      req.payload.file.on('end', () => {
        var rslt = {
          description: req.payload.description,
          file: {
            data: body,
            filename: req.payload.file.hapi.filename,
            headers: req.payload.file.hapi.headers
          }
        };

        res(JSON.stringify(rslt));
      });
    },
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});