/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_environment', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    app_version: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    crypto_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'gocellar_environment'
  });
};
