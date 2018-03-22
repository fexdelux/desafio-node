/***************************************
  Router File
  Description:

*****************************************/
const Controller = require(`${__dirmodules}/auth/auth.controller`);

module.exports = (server) => {
  const controller = new Controller();
  server.get('/v1/',(req,res) => {
    controller.get(req,res);
  });
  server.post('/v1/',(req,res) => {
    controller.save(req,res);
  });
  server.put('/v1/',(req,res) => {
    controller.save(req,res);
  });
  server.del('/v1/',(req,res) => {
    controller.delete(req,res);
  });
}
