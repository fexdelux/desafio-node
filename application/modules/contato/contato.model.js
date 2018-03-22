/***************************************
  Model File
  Description:

*****************************************/
const connection = require(`${__dircore}/connection`);
const ContatoEntity = connection.import(`${__dirmodules}/contato/entity/contato`);
class ContatoModel{

  constructor(){
    ContatoEntity.sync();
  }
    get(id){
      return new Promise ((resolve,reject) => {
        ContatoEntity.findById(id).then( contato => {
          resolve(contato);
        }).catch( err => {
          serverLog.error('Recuperando informação',err);
          reject(err);
        })
      });
    }
    getList(page, size){
      size = size || 10;
      page = page || 1;

      return new Promise ((resolve,reject) => {
        ContatoEntity.findAndCountAll().then( result => {
          let pageSize = Math.ceil(result.count / size);
          let offset = size * (page - 1);
          ContatoEntity.findAll({
            limit : size,
            offset: offset
          }).then( contatos => {
            resolve({result:contatos,count:result.count, pages: pageSize});
          }).catch( err => {
            serverLog.error('Recuperando informação',err);
            reject(err);
          })
        })
      });
    }
    save(data){
      return new Promise ((resolve,reject) => {
        console.log(data);
        ContatoEntity.upsert(data).then( contato => {
          resolve(contato);
        }).catch( err => {
          serverLog.error('Gravando a informação',err);
          reject(err);
        })

      });
    }
    delete(id){
      return new Promise ((resolve,reject) => {
        ContatoEntity.delete(id).then( contato => {
          resolve(contato);
        }).catch( err => {
          serverLog.error('Remoção da informação',err);
          reject(err);
        })
      });
    }
}
module.exports = ContatoModel;
