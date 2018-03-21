/**
  Entidade contato
*/
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contato', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nome_contato'
    },
    canal: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'canal_contato'
    },
    valor: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'valor_canal_contato'
    },
    obs: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'observacao'
    }
  });
};
