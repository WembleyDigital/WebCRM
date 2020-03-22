/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_task', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    createTime: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taskDetail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    creator: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_task'
  });
};
