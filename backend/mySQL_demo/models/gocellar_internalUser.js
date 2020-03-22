/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_internalUser', {
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    permissionId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_internalUser'
  });
};
