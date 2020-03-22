/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_order_payment', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cancel_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    payment: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    payment_gateway_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_order_payment'
  });
};
