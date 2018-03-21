/***************************************
  Controller File
  Description:

*****************************************/
const Model = require(`${__dirname}/contato.model`);

class ContatoController{
  constructor(){
    this.model = new Model();
  }
  get(req,res){

  }
  getList(req,res){

  }
  save(req,res){

  }
  delete(req,res){

  }
}
module.exports = ContatoController;
