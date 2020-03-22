/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    creat_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(255),
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
    briefDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accessToken: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    refreshToken: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    awardCreditId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gocellar_awardCredit',
        key: 'id'
      }
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'gocellar_user'
  });
};
