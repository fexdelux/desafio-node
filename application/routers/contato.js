/***************************************
  Router File
  Description:

*****************************************/

const Controller = require(`${__dirmodules}/contato/contato.controller`);

module.exports = (server) => {
  const controller = new Controller();
  server.get('/',(req,res) => {
    controler.getList(req,res);
  });
  server.post('/',(req,res) => {
    controler.save(req,res);
  });
  server.get('/{idContato}',(req,res) => {
    controler.get(req,res);
  });
  server.put('/{idContato}',(req,res) => {
    controler.update(req,res);
  });
  server.del('/{idContato}',(req,res) => {
    controler.delete(req,res);
  });
}
