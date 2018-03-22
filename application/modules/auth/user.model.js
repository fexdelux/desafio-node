
/***************************************
  Model File
  Description:

*****************************************/
const connection = require(`${__dircore}/connection`);
const UserEntity = connection.import(`${__dirmodules}/auth/entity/user`);
class UserModel{

  constructor(){
    UserEntity.sync();
  }
    get(id){
      return new Promise ((resolve,reject) => {
        UserEntity.findById(id).then( user => {
          resolve(user);
        }).catch( err => {
          reject(err);
        });
      });
    }
    save(data){
      return new Promise ((resolve,reject) => {
        UserEntity.upsert({}).then( user => {
          resolve(user);
        }).catch( err => {
          reject(err)
        })
      });
    }
    delete(id){
      return new Promise ((resolve,reject) => {
        UserEntity.delete(id).then( result => {
          resolve(result);
        }).catch( err => {
          reject(err);
        });
      });
    }
}
module.exports = UserModel;
