/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_advertisement', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    create_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    link_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maximum_population: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    startPeriod: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    endPeriod: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'gocellar_advertisement'
  });
};
