/**
Classe modelo para contato
*/
const connection = require(`${__dircore}/connection`);
const ContatoEntity = connection.import(`${__dirmodules}/contato/entity/contato`);
class ContatoModel{

  constructor(){

  }
  validate(){
    if(this.nome === ''){
      //throw new DesafioException(400,'O id nome pode esta vazio');
    }
    if(this.canal === ''){
      //throw new DesafioException(400,'O canal não pode esta vazio');
    }
    if(this.valor === ''){
      //throw new DesafioException(400,'O valor do canal não pode esta vazio');
    }
  }
}

module.exports = ContatoModel;
