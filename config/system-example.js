/**
 * Arquivo de exemplo para configurações do sistema
 */
module.exports = {
  service:{
    host: 'localhost',
    port: 3100,
    production: false
  },
  security:{
    pwdKey:'<pwdKey>',
    tokenKey: '<tokenKey>'
  },
  database: {
    path: "./database.sqlite"
  }
}
