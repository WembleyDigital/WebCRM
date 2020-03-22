/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_category_porduct', {
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_category',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_product',
        key: 'id'
      }
    }
  }, {
    tableName: 'gocellar_category_porduct'
  });
};
