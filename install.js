/**
Rotina de instalação do sistema
*/
const inquirer = require('inquirer');
const fs = require('fs');
const perguntas = [
  {
    type: 'input',
    name: 'port',
    message: 'informe a porta para o serviço',
    default: 3100
  }
];

genfile = (param) => {
  let data = fs.readFileSync('./config/system-example.js', "utf8");
    let modify = data.replace(/3100/, `${param.port}`);
    console.log(modify);
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
