/***************************************
  Controller File
  Description:

*****************************************/
const errors = require('restify-errors');
const Mapper = require(`${__dirname}/mapper/contato.mapper`);
const Model = require(`${__dirname}/contato.model`);

class ContatoController{
  constructor(){
    this.model = new Model();
    this.mapper = new Mapper();
  }
  get(req,res,next){
    if(this.mapper.validateID(req.path.idContato)){
      next(new errors.BadRequestError('ID do contato invalido.'))
    }
    this.model.get(id).then( contatos => {
      contatos.result = this.mapper.mapContato(contatos.result);
      res.json(contatos);
    });
  }
  getList(req,res,next){
    let page = req.query.page;
    let size = req.query.size;
    this.model.getList(page,size).then( contatos => {
      res.json(this.mapper.mapContato(contato));
    }).catch( err => {
      next(new errors.InternalServerError(err.message));
    });
  }
  save(req,res,next){
    let data = req.body;
    if(req.params.id){
      data.id = req.params.id;
      this.mapper.validateUpdateData(data).then( () => {
        this.model.save(data).then( contato => {
          res.status(201).json(this.mapper.mapContato(contato));
        }).catch(err => {
          serverLog.error(err.message,err);
          next(new errors.InternalServerError(err));
        })
      }).catch( err => {
        serverLog.error(err.message,err);
        next(new errors.BadRequestError(err));
      });
    }else{
      this.mapper.validateCreateData(data).then( () => {
        this.model.save(data).then( contato => {
          console.log( contato);
          res.status(201);
          res.json({message:'Salvo com sucesso'});
        }).catch(err => {
          next(new errors.InternalServerError(err));
        })
      }).catch( err => {
        next(new errors.BadRequestError(err));
      });
    }
  }
}
module.exports = ContatoController;
