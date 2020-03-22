/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_order', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    receive_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    confirmed_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    shipping_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    complete_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    invocie_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ship_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    update_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gocellar_supplier_userId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    buyer_ship_info_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_ship_info',
        key: 'id'
      }
    },
    supplier_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'gocellar_supplier',
        key: 'userId'
      }
    },
    paymentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'gocellar_order_payment',
        key: 'id'
      }
    },
    gocellar_buyer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'gocellar_buyer',
        key: 'id'
      }
    }
  }, {
    tableName: 'gocellar_order'
  });
};
