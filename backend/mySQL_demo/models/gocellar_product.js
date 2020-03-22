/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_product', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    saled_quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    volume: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    productName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    original_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sale_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    package: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sub_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    update_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    video_url: {
      type: DataTypes.STRING(1100),
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    vintage: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sight_score: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    nose_score: {
      type: DataTypes.INTEGER(7),
      allowNull: true
    },
    palate_score: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    threshold: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    alchohols: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    standard_drink: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gocellar_food_pairing_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'gocellar_food_pairing',
        key: 'id'
      }
    },
    winemaker: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    brand_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_brand',
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
    },
    GrapeType_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    creator_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updator_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_product'
  });
};
