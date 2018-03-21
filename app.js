const config = require('./config/system.js');
const server = require('./application/server');

server.listen(config.service.port, () => {

  console.log('%s Desafio Meta API \nServer listening on port %s', server.name, server.url);
});
