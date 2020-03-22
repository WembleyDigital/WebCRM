/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_address', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    addressAlias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    post_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receiver: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_city',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_country',
        key: 'id'
      }
    },
    state_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_state',
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
    tableName: 'gocellar_address'
  });
};
