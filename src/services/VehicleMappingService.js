const VehicleMappingsModel = require('../models/VehicalMappings');
const { successResponse, errorResponse } = require('../utils/responseUtils');

const VehicleMappingsController = {
    getAllVehicleMappings: async (req, res) => {
        try {
            const results = await VehicleMappingsModel.getAllVehicleMappings();
            if(results.length === 0) return errorResponse(res, 'No vehicleMappings found', 404);
            successResponse(res, 'VehicleMappings retrieved successfully', results)
        } catch (error) {
            console.error('Error getting vehicleMappings:', error);
            errorResponse(res, 'Error Occurred while fetching vehicleMappings : '+error);
        }
    },
    addVehicleMappings: async (req, res) => {
        const { VehicleMappingID, VehicleID, DriverID, FactoryID } = req.body;

        if (!VehicleMappingID || !VehicleID || !DriverID || !FactoryID) {
            return errorResponse(res, 'VehicleMappingID, VehicleID, DriverID and FactoryID are required fields', 400);
        }
        try {
            const result = await VehicleMappingsModel.addVehicleMappings(VehicleMappingID, VehicleID, DriverID, FactoryID);
            successResponse(res, 'VehicleMappings added successfully', result);
        } catch (error) {
            console.error('Error adding vehicleMappings:', error);
            errorResponse(res, 'Error Occurred while adding vehicleMappings : '+error);
        }
    },
    getVehicleMappingsByID: async (req, res) => {
        const {VehicleMappingID} = req.params;
        try {
            const results = await VehicleMappingsModel.getVehicleMappingsByID(VehicleMappingID);
            if (results.length === 0) return errorResponse(res, 'VehicleMappings not found', 404);
            successResponse(res, 'VehicleMappings retrieved successfully', results);
        } catch (error) {
            console.error('Error getting vehicleMappings by ID:', error);
            errorResponse(res, 'Error Occurred while fetching vehicleMappings by ID : '+error);
        }

    },
    updateVehicleMappings: async (req, res) => {
        const {VehicleMappingID} = req.params;
        const {VehicleID, DriverID, FactoryID} = req.body;
        try {
            const result = await VehicleMappingsModel.updateVehicleMappings(VehicleMappingID, VehicleID, DriverID, FactoryID);
            successResponse(res, 'VehicleMappings updated successfully', result);
        } catch (error) {
            console.error('Error updating vehicleMappings:', error);
            errorResponse(res, 'Error Occurred while updating vehicleMappings : '+error);
        }
    },
    deleteVehicleMappings: async (req, res) => {
        const {VehicleMappingID} = req.params;
        try {
            await VehicleMappingsModel.deleteVehicleMappings(VehicleMappingID);
            successResponse(res, 'VehicleMappings deleted successfully', null);
        } catch (error) {
            console.error('Error deleting vehicleMappings:', error);
            errorResponse(res, 'Error Occurred while deleting vehicleMappings : ' + error);
        }
    }
};

module.exports = VehicleMappingsController;
