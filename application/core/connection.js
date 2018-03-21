/**
  Arquivo de configuração na conexão do banco de dados
*/
const Sequelize = require('sequelize');
const config = require(`${__dirname}/../../config/system`);
const connection = new Sequelize(`sqlite:${config.database.path}`,{logging: false});

module.exports = connection;
