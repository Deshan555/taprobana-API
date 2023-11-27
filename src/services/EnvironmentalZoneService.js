const EnvironmentalZoneModel = require('../models/EnvironmentalZone');
const { successResponse, errorResponse } = require('../utils/responseUtils');

const EnvironmentalZoneController = {
    getAllEnvironmentalZone: async (req, res) => {
        try {
            const results = await EnvironmentalZoneModel.getAllEnvironmentalZone();
            if (results.length === 0) return errorResponse(res, 'No environmentalZone found', 404);
            successResponse(res, 'EnvironmentalZone retrieved successfully', results)
        } catch (error) {
            console.error('Error getting environmentalZone:', error);
            errorResponse(res, 'Error Occurred while fetching environmentalZone : ' + error);
        }
    },
    addEnvironmentalZone: async (req, res) => {
        const {EnvironmentalZoneID, EnvironmentalZoneName, EnvironmentalZoneDescription} = req.body;

        if (!EnvironmentalZoneID || !EnvironmentalZoneName || !EnvironmentalZoneDescription) {
            return errorResponse(res, 'EnvironmentalZoneID, EnvironmentalZoneName and EnvironmentalZoneDescription are required fields', 400);
        }
        try {
            const result = await EnvironmentalZoneModel.addEnvironmentalZone(EnvironmentalZoneID, EnvironmentalZoneName, EnvironmentalZoneDescription);
            successResponse(res, 'EnvironmentalZone added successfully', result);
        } catch (error) {
            console.error('Error adding environmentalZone:', error);
            errorResponse(res, 'Error Occurred while adding environmentalZone : ' + error);
        }
    },
    updateEnvironmentalZone: async (req, res) => {
        const {EnvironmentalZoneID} = req.params;
        const {EnvironmentalZoneName, EnvironmentalZoneDescription} = req.body;
        try {
            const result = await EnvironmentalZoneModel.updateEnvironmentalZone(EnvironmentalZoneID, EnvironmentalZoneName, EnvironmentalZoneDescription);
            successResponse(res, 'EnvironmentalZone updated successfully', result);
        } catch (error) {
            console.error('Error updating environmentalZone:', error);
            errorResponse(res, 'Error Occurred while updating environmentalZone : ' + error);
        }
    },
    deleteEnvironmentalZone: async (req, res) => {
        const {EnvironmentalZoneID} = req.params;
        try {
            await EnvironmentalZoneModel.deleteEnvironmentalZone(EnvironmentalZoneID);
            successResponse(res, 'EnvironmentalZone deleted successfully', null);
        } catch (error) {
            console.error('Error deleting environmentalZone:', error);
            errorResponse(res, 'Error Occurred while deleting environmentalZone : ' + error);
        }
    },
    getAllEnvironmentalZoneByID: async (req, res) => {
        const {EnvironmentalZoneID} = req.params;
        try {
            const results = await EnvironmentalZoneModel.getEnvironmentalZoneByID(EnvironmentalZoneID);
            if (results.length === 0) return errorResponse(res, 'EnvironmentalZone not found', 404);
            successResponse(res, 'EnvironmentalZone retrieved successfully', results);
        } catch (error) {
            console.error('Error getting environmentalZone by ID:', error);
            errorResponse(res, 'Error Occurred while fetching environmentalZone by ID : ' + error);
        }
    }
};

module.exports = EnvironmentalZoneController;