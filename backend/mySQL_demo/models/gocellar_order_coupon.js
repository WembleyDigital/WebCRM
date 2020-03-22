/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_order_coupon', {
    coupon_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_coupon',
        key: 'id'
      }
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'gocellar_order',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'gocellar_user',
        key: 'id'
      }
    }
  }, {
    tableName: 'gocellar_order_coupon'
  });
};
