/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_category_coupon', {
    coupon_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_coupon',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_category',
        key: 'id'
      }
    }
  }, {
    tableName: 'gocellar_category_coupon'
  });
};
