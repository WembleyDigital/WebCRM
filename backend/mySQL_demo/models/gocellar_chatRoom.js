/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_chatRoom', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    createTIme: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    creatorMsg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    receiverMsg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    creator: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    receiver: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_chatRoom'
  });
};
