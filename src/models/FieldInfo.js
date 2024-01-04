const { query } = require('../config/database');
const { logger } = require('../config/logger');

// FieldInfoModel is an object that contains functions
const FieldInfoModel = {
    getAllFieldInfo: async () => {
        try {
            return await query('SELECT * FROM FieldInfo');
        } catch (error) {
            logger.error('Error getting fieldInfos:', error);
        }
    },
    addFieldInfo: async (FieldID, FieldName, FieldSize, FieldType, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, FieldRegistrationDate, RouteID, OwnerID, ZoneID, FactoryID) => {
        try {
           return await query('INSERT INTO FieldInfo (FieldID, FieldName, FieldSize, FieldType, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, FieldRegistrationDate, RouteID, OwnerID, ZoneID, FactoryID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
               [FieldID, FieldName, FieldSize, FieldType, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, FieldRegistrationDate, RouteID, OwnerID, ZoneID, FactoryID]);
        } catch (error) {
            logger.error('Error adding fieldInfo:', error);
        }
    },
    getFieldInfoByID: async (FieldID) => {
        try {
            return await query('SELECT * FROM FieldInfo WHERE FieldID = ?', [FieldID]);
        } catch (error) {
            logger.error('Error getting fieldInfo by ID:', error);
        }
    },
    getFieldsByZoneID: async (ZoneID) => {
        try {
            return await query('SELECT * FROM FieldInfo WHERE ZoneID = ?', [ZoneID]);
        } catch (error) {
            logger.error('Error getting fieldInfo by ZoneID:', error);
        }
    },
    getFieldsByFactoryID: async (FactoryID) => {
        try {
            return await query('SELECT * FROM FieldInfo WHERE FactoryID = ?', [FactoryID]);
        } catch (error) {
            logger.error('Error getting fieldInfo by FactoryID:', error);
        }
    },
    getFieldsByRouteID: async (RouteID) => {
        try {
            return await query('SELECT * FROM FieldInfo WHERE RouteID = ?', [RouteID]);
        } catch (error) {
            logger.error('Error getting fieldInfo by RouteID:', error);
        }
    },
    updateFieldInfo: async (FieldID,  FieldSize, FieldType, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, RouteID, OwnerID, ZoneID, FactoryID) => {
        try {
            return await query('UPDATE FieldInfo SET FieldSize = ?, FieldType = ?, FieldAddress = ?, TeaType = ?, BaseLocation = ?, BaseElevation = ?, SoilType = ?, Attitude = ?, Longitude = ?, RouteID = ?, OwnerID = ?, ZoneID = ?, FactoryID = ? WHERE FieldID = ?',
                [FieldSize, FieldType, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, RouteID, OwnerID, ZoneID, FactoryID, FieldID]);
        } catch (error) {
            logger.error('Error updating fieldInfo:', error);
        }
    },
    deleteFieldInfo: async (FieldID) => {
        try {
            return await query('DELETE FROM FieldInfo WHERE FieldID = ?', [FieldID]);
        } catch (error) {
            logger.error('Error deleting fieldInfo:', error);
        }
    }
};

module.exports = FieldInfoModel;