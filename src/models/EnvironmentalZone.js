const { query } = require('../config/database');

// EnvironmentalZoneModel is an object that contains functions
const EnvironmentalZoneModel = {
    getAllEnvironmentalZone: async () => {
        try {
            const results = await query('SELECT * FROM EnvironmentalZone');
            return results;
        } catch (error) {
            throw error;
        }
    },
    addEnvironmentalZone: async (ZoneID, ZoneName, Temperature, Humidity, Rainfall, WindSpeed, FieldID) => {
        try {
            const results = await query('INSERT INTO EnvironmentalZone (ZoneID, ZoneName, Temperature, Humidity, Rainfall, WindSpeed, FieldID) VALUES (?, ?, ?, ?, ?, ?, ?)', [ZoneID, ZoneName, Temperature, Humidity, Rainfall, WindSpeed, FieldID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    getEnvironmentalZoneByID: async (ZoneID) => {
        try {
            const results = await query('SELECT * FROM EnvironmentalZone WHERE ZoneID = ?', [ZoneID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    updateEnvironmentalZone: async (ZoneID, ZoneName, Temperature, Humidity, Rainfall, WindSpeed, FieldID) => {
        try {
            const results = await query('UPDATE EnvironmentalZone SET ZoneName = ?, Temperature = ?, Humidity = ?, Rainfall = ?, WindSpeed = ?, FieldID = ? WHERE ZoneID = ?', [ZoneName, Temperature, Humidity, Rainfall, WindSpeed, FieldID, ZoneID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    deleteEnvironmentalZone: async (ZoneID) => {
        try {
            const results = await query('DELETE FROM EnvironmentalZone WHERE ZoneID = ?', [ZoneID]);
            return results;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = EnvironmentalZoneModel;