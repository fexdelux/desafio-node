/***************************************
  Router File
  Description:

*****************************************/

const Controller = require(`${__dirmodules}/contato/contato.controller`);

module.exports = (server) => {
  const controller = new Controller();
  server.get('/',(req,res,next) => {
    controller.getList(req,res,next);
  });
  server.post('/',(req,res,next) => {
    controller.save(req,res,next);
  });
  server.get('/:idContato',(req,res,next) => {
    controller.get(req,res,next);
  });
  server.put('/:idContato',(req,res,next) => {
    controller.update(req,res,next);
  });
  server.del('/:idContato',(req,res,next) => {
    controller.delete(req,res,next);
  });
}
