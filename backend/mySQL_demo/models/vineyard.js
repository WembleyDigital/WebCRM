/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vineyard', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Company type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Established: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Company Name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Winery Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Winery Address Line 1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Winery Address Line 2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Winery City: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Winery State: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Winery Post Code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Winery Country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Sales Range: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Winery, Cellar Door or Vineyard: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Hours: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Address Line 1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Address Line 2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door City: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door State: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Postcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Telephone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cellar Door Fax: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Telephone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Fax: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Facebook: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Twitter: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GI Subregion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'vineyard'
  });
};
