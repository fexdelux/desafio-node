/**
  Ferramenta para mapear os dados do request e Post
*/
class Mapper {
  constructor(){  }

  validEstruture(ref,obj){
    return new Promise((resolve,reject) => {
      if(typeof obj !== "Object"){
        reject({message:'Não é um objeto valido para verificação'});
      }
      let r = Object.keys(ref);
      let error = new Array();
      Object.keys(obj).foreach( (value) => {
          if(r.indexOf(value) > -1 ){
            error.push(value);
          }
      });
      if(error.length > 0 ){
        reject({message:'Estrutura de dados inválida',fields:error});
      }
      resolve();
    });
  }

  map(ref, obj){
    let factory = (o) => {
      let r = {};
      Object.keys(ref).forEach((value) => {
        r[value] = ref[value].field == null ? o[value]: o[ref[value].field];
      });
      return r;

    }
    if(Array.isArray(obj)){
      let result = new Array();
      obj.forEach(item => {
        result.push(factory(item));
      });
      return result;
    }else{
      return factory(obj);
    }
  }

  translate(ref, obj){
    let factory = (o) => {
      let r = {};
      Object.keys(ref).forEach((value) => {
        let f = ref[value].field == null ? value: ref[value].field;
        r[f] =  obj[f];
      });
    };
    if(Array.isArray(obj)){
      let result = new Array();
      obj.forEach(item => {
        result.push(factory(item));
      });
      return result;
    }else{
      return factory(obj);
    }
  }
}

module.exports = Mapper;
