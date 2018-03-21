const restify = require('restify');
const consign = require('consign');

global.__dirmodules = `${__dirname}/modules`;
global.__dirconfig = `${__dirname}/../config`;
global.__dircore = `${__dirname}/core`;

const config = require(`${__dirconfig}/system`);
const corsOptions = {
  origins: [`http://localhost:${config.service.port}`, 'http://devtest.com'],
  allowHeaders: ['Authorization'],
  exposeHeaders: ['API-Token-Expiry']
}
const cors = require('restify-cors-middleware')(corsOptions);
const server = restify.createServer({
  name: 'desafio-meta',
  version: '1.0.0'
});

server.use(cors.actual);
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({
  maxBodySize: 0,
  mapParams: true,
  overrideParams: false,
  rejectUnknown: true
}));
server.use(restify.plugins.jsonp());

consign({cwd: 'application', locale: 'pt-br', extensions: [ '.js' ]})
	.include('routers')
	.into(server);

server.on('restifyError', function(req, res, err, callback) {
    res.status(500).json({status: err, message:'error'});
    return callback();
});

module.exports = server;
