/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vineyard', {
		id: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true
		},
		Company_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Established: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CompanyName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		WineryAddress: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		WineryAddressLine_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		WineryAddressLine_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		WineryCity: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		WineryState: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		WineryPostCode: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		WineryCountry: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorSalesRange: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		WineryCellarDoororVineyard: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorHours: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorAddress: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorAddressLine_1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorAddressLine_2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorCity: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorState: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorPostcode: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorCountry: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorTelephone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorFax: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		CellarDoorEmail: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Telephone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Fax: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Website: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Facebook: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Twitter: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'vineyard'
	});
};
