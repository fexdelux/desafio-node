/**
  Entidade contato
*/
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'canal_contato'
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'valor_canal_contato'
    }
  });
};
