/***************************************
  Test Unit File
  Description:

*****************************************/
const expect = require('chai').expect;
const assert = require('chai').assert;
const fs = require('fs');
const connection = require(`${__dirname}/../../application/core/connection`);
const Contato = connection.import(`${__dirname}/../../application/modules/contato/entity/contato`);

describe('"Teste da entidade Contato"', () => {
  it('Criação da tabela', (done) => {
      Contato.sync().finally(done);

  });
  it('Teste de INSERT', (done) => {
     Contato.create({nome:'teste',canal:'Teste',valor:'99999999',obs:'mensagem de teste'}).then( result => {
      assert.isObject(result);
    }).finally(done);

  });
});
