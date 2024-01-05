const logger = require('../config/logger');
const { query } = require('../config/database');

const WeatherZoneModel = {
    getAllWeatherZone: async () => {
        try {
            return await query('SELECT * FROM WeatherInfo');
        } catch (error) {
            logger.error('Error getting WeatherInfo:', error);
        }
    },
    addWeatherZone: async (WeatherConID, WeatherDate, Temperature, Humidity, WindSpeed, Rainfall, ZoneID) => {
        try {
            return await query('INSERT INTO WeatherInfo (WeatherConID, WeatherDate, Temperature, Humidity, WindSpeed, Rainfall, ZoneID) VALUES (?, ?, ?, ?, ?, ?, ?)', [WeatherConID, WeatherDate, Temperature, Humidity, WindSpeed, Rainfall, ZoneID]);
        } catch (error) {
            logger.error('Error adding WeatherInfo:', error);
        }
    },
    getWeatherZoneByID: async (WeatherConID) => {
        try {
            return await query('SELECT * FROM WeatherInfo WHERE WeatherConID = ?', [WeatherConID]);
        } catch (error) {
            logger.error('Error getting WeatherInfo by ID:', error);
        }
    },
    updateWeatherZone: async (WeatherConID, WeatherDate, Temperature, Humidity, WindSpeed, Rainfall, ZoneID) => {
        try {
            return await query('UPDATE WeatherInfo SET WeatherDate = ?, Temperature = ?, Humidity = ?, WindSpeed = ?, Rainfall = ?, ZoneID = ? WHERE WeatherConID = ?', [WeatherDate, Temperature, Humidity, WindSpeed, Rainfall, ZoneID, WeatherConID]);
        } catch (error) {
            logger.error('Error updating WeatherInfo:', error);
        }
    },
    deleteWeatherZone: async (WeatherConID) => {
        try {
            return await query('DELETE FROM WeatherInfo WHERE WeatherConID = ?', [WeatherConID]);
        } catch (error) {
            logger.error('Error deleting WeatherInfo:', error);
        }
    }
};
