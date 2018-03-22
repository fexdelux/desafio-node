/**
  Classe de validação dos dados no request
*/
const Mapper = require(`${__dircore}/mapper`);
const Contato = require(`${__dirname}/contato.json`);
const ContatoCreate = require(`${__dirname}/contato-create.json`);
const ContatoUpdate = require(`${__dirname}/contato-update.json`);

class ContatoMapper extends Mapper{
  constructor(){ super()}

  validateID(id){
    return !id &&  typeof id === "number" ;
  }

  validateCreateData(data){
    return this.validEstruture(ContatoCreate, data).catch( err => {
      return new Error(err);
    });
  }
  validateUpdateData(data){
    return this.validEstruture(ContatoUpdate, data).catch( err => {
      return new Error(err);
    });
  }
  mapContato(data){
    return this.map(Contato,data);
  }
  translateContato(data){
    return this.translate(Contato,data);
  }
}

module.exports = ContatoMapper;
