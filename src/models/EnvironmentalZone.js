const { query } = require('../config/database');
const logger = require("../config/logger");

const EnvironmentalZoneModel = {
    getAllEnvironmentalZone: async () => {
        try {
            return await query('SELECT * FROM EnvironmentalZone');
        } catch (error) {
            logger.error('Error getting EnvironmentalZone:', error);
        }
    },
    addEnvironmentalZone: async (EnvironmentalZoneID, EnvironmentalZoneName, BaseLocation) => {
        try {
            return await query('INSERT INTO EnvironmentalZone (EnvironmentalZoneID, EnvironmentalZoneName, BaseLocation) VALUES (?, ?, ?)', [EnvironmentalZoneID, EnvironmentalZoneName, BaseLocation]);
        } catch (error) {
            logger.error('Error adding EnvironmentalZone:', error);
        }
    },
    getEnvironmentalZoneByID: async (EnvironmentalZoneID) => {
        try {
            return await query('SELECT * FROM EnvironmentalZone WHERE EnvironmentalZoneID = ?', [EnvironmentalZoneID]);
        } catch (error) {
            logger.error('Error getting EnvironmentalZone by ID:', error);
        }
    },
    updateEnvironmentalZone: async (EnvironmentalZoneID, EnvironmentalZoneName, BaseLocation) => {
        try {
            return await query('UPDATE EnvironmentalZone SET EnvironmentalZoneName = ? , BaseLocation = ? WHERE EnvironmentalZoneID = ?', [EnvironmentalZoneName, BaseLocation, EnvironmentalZoneID]);
        } catch (error) {
            logger.error('Error updating EnvironmentalZone:', error);
        }
    },
    deleteEnvironmentalZone: async (EnvironmentalZoneID) => {
        try {
            return await query('DELETE FROM EnvironmentalZone WHERE EnvironmentalZoneID = ?', [EnvironmentalZoneID]);
        } catch (error) {
            logger.error('Error deleting EnvironmentalZone:', error);
        }
    }
};

module.exports = EnvironmentalZoneModel;