/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_state', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'gocellar_state'
  });
};
