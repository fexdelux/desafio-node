/***************************************
  Controller File
  Description:

*****************************************/
const UserModel = require(`${__dirname}/user.model`);

class AuthController{
  constructor(){
    this.userModel = new UserModel();
  }
  get(req,res){

  }
  save(req,res){

  }
  delete(req,res){

  }
}
module.exports = AuthController;
