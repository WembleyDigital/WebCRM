/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gocellar_winery_info', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    wineryName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    postCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    establishedTime: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    websiteUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wineProduction: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plantArea: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    haveCellarDoor: {
      type: "BINARY(1)",
      allowNull: true
    },
    cellarDoorOpeningHours: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    businessHours: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ownerName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wineMakerName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ABN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobilePhone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    insuranceProvided: {
      type: "BINARY(1)",
      allowNull: true
    },
    wineryImage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    logoImage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    otherDocsImage: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'gocellar_winery_info'
  });
};
