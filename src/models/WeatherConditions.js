const logger = require('../config/logger');
const { query } = require('../config/database');

const WeatherZoneModel = {
    getAllWeatherZone: async () => {
        try {
            return await query('SELECT * FROM weatherinfo');
        } catch (error) {
            logger.error('Error getting WeatherInfo:', error);
        }
    },
    addWeatherZone: async (WeatherConID, WeatherDate, Temperature, Humidity, WindSpeed, Rainfall, ZoneID) => {
        try {
            return await query('INSERT INTO weatherinfo (WeatherConID, WeatherDate, Temperature, Humidity, WindSpeed, Rainfall, ZoneID) VALUES (?, ?, ?, ?, ?, ?, ?)', [WeatherConID, WeatherDate, Temperature, Humidity, WindSpeed, Rainfall, ZoneID]);
        } catch (error) {
            logger.error('Error adding WeatherInfo:', error);
        }
    },
    getWeatherZoneByID: async (WeatherConID) => {
        try {
            return await query('SELECT * FROM weatherinfo WHERE WeatherConID = ?', [WeatherConID]);
        } catch (error) {
            logger.error('Error getting WeatherInfo by ID:', error);
        }
    },
    getWeatherZoneDataByDate: async (WeatherDate) => {
        try {
            return await query('SELECT * FROM weatherinfo WHERE WeatherDate = ?', [WeatherDate]);
        } catch (error) {
            logger.error('Error getting WeatherInfo by Date:', error);
        }
    },
    getDataByZoneID: async (ZoneID) => {
        try {
            return await query('SELECT * FROM weatherinfo WHERE ZoneID = ?', [ZoneID]);
        } catch (error) {
            logger.error('Error getting WeatherInfo by ZoneID:', error);
        }
    },
    getDataByTimeGivenPeriod: async (StartDate, EndDate, ZoneID) => {
        try {
            return await query('SELECT * FROM weatherinfo WHERE WeatherDate BETWEEN ? AND ? AND ZoneID = ?', [StartDate, EndDate, ZoneID]);
        } catch (error) {
            logger.error('Error getting WeatherInfo by ZoneID:', error);
        }
    }
};

module.exports = WeatherZoneModel;
