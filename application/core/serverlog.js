/**
  Classe para encapsular os log da aplicação com intuito para facilidar o monitoramento.
*/

const config = require(`${__dirconfig}/system`);
class ServerLog{
  constructor(){}

  log(message){
    console.log(message);
  }
  error(message,err){
    console.error(message,err);
  }
  debug(message){
    console.log('::DEBUG:: ' + message);
  }
}

module.exports = new ServerLog();
