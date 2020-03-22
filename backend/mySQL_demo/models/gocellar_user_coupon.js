/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_user_coupon', {
    quantiy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    coupon_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_user_coupon'
  });
};
