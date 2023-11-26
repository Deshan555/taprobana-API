const { query } = require('../config/database');

// FieldInfoModel is an object that contains functions
const FieldInfoModel = {
    getAllFieldInfo: async () => {
        try {
            return await query('SELECT * FROM FieldInfo');
        } catch (error) {
            throw error;
        }
    },
    addFieldInfo: async (FieldID, FieldName, FieldSize, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, RouteID, OwnerID, ZoneID) => {
        try {
            return await query('INSERT INTO FieldInfo (FieldID, FieldName, FieldSize, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, RouteID, OwnerID, ZoneID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [FieldID, FieldName, FieldSize, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, RouteID, OwnerID, ZoneID]);
        } catch (error) {
            throw error;
        }
    },
    getFieldInfoByID: async (FieldID) => {
        try {
            return await query('SELECT * FROM FieldInfo WHERE FieldID = ?', [FieldID]);
        } catch (error) {
            throw error;
        }
    },
    updateFieldInfo: async (FieldID, FieldName, FieldSize, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, RouteID, OwnerID, ZoneID) => {
        try {
            return await query('UPDATE FieldInfo SET FieldName = ?, FieldSize = ?, FieldAddress = ?, TeaType = ?, BaseLocation = ?, BaseElevation = ?, SoilType = ?, Attitude = ?, Longitude = ?, RouteID = ?, OwnerID = ?, ZoneID = ? WHERE FieldID = ?', [FieldName, FieldSize, FieldAddress, TeaType, BaseLocation, BaseElevation, SoilType, Attitude, Longitude, RouteID, OwnerID, ZoneID, FieldID]);
        } catch (error) {
            throw error;
        }
    },
    deleteFieldInfo: async (FieldID) => {
        try {
            return await query('DELETE FROM FieldInfo WHERE FieldID = ?', [FieldID]);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = FieldInfoModel;