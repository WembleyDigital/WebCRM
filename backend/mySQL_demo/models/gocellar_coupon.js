/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_coupon', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expire_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expire_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    send_end_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    send_start_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_coupon_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sender_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_coupon'
  });
};
