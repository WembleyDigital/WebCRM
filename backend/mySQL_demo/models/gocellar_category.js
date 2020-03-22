/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    categoryName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_category'
  });
};
