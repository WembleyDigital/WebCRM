/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_ship_info', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ship_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'gocellar_address',
        key: 'id'
      }
    }
  }, {
    tableName: 'gocellar_ship_info'
  });
};
