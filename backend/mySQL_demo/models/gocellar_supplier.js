/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_supplier', {
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    permissionId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_winery_info',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gocellar_winery_info_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'gocellar_supplier'
  });
};
