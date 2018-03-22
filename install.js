/**
Rotina de instalação do sistema
*/
const inquirer = require('inquirer');
const keygen = require('password-generator');
const fs = require('fs');
const perguntas = [
  {
    type: 'input',
    name: 'host',
    message: 'Qual o domínio do serviço ?',
    default: 'localhost'
  },
  {
    type: 'input',
    name: 'port',
    message: 'Qual a porta que vai rodar o serviço ?',
    default: 3100
  }
];

genfile = (param) => {
  let data = fs.readFileSync('./config/system-example.js', "utf8");
    let modify = data.replace(/3100/, param.port);
    modify = modify.replace(/localhost/,param.host);
    modify = modify.replace(/<tokenKey>/,keygen(48,false));
    modify = modify.replace(/<pwdKey>/,keygen(48,false));


    fs.writeFile('./config/system.js',modify,'utf-8', (err) => {
      if(!err){
        console.log('Arquivo de configurações gerado com sucesso.');
      }else{
        throw new Error(err);
        process.exit(1);
      }
    });
};

inquirer.prompt(perguntas).then(result => {
  genfile(result);
}).catch(err => {
  console.error('Problemas com a instalação:',err.message);
  process.exit(1);
});
