/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_buyer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    isVIP: {
      type: "BINARY(1)",
      allowNull: true
    }
  }, {
    tableName: 'gocellar_buyer'
  });
};
