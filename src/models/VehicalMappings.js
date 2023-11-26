const { query } = require('../config/database');

// VehicleMappingsModel is an object that contains functions
const VehicleMappingsModel = {
    getAllVehicleMappings: async () => {
        try {
            const results = await query('SELECT * FROM VehicleMappings');
            return results;
        } catch (error) {
            throw error;
        }
    },
    addVehicleMappings: async (VehicleID, VehicleNumber, VehicleType, VolumeCapacity, WeightCapacity, FactoryID, DriverID, RouteID) => {
        try {
            const results = await query('INSERT INTO VehicleMappings (VehicleID, VehicleNumber, VehicleType, VolumeCapacity, WeightCapacity, FactoryID, DriverID, RouteID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [VehicleID, VehicleNumber, VehicleType, VolumeCapacity, WeightCapacity, FactoryID, DriverID, RouteID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    getVehicleMappingsByID: async (VehicleID) => {
        try {
            const results = await query('SELECT * FROM VehicleMappings WHERE VehicleID = ?', [VehicleID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    updateVehicleMappings: async (VehicleID, VehicleNumber, VehicleType, VolumeCapacity, WeightCapacity, FactoryID, DriverID, RouteID) => {
        try {
            const results = await query('UPDATE VehicleMappings SET VehicleNumber = ?, VehicleType = ?, VolumeCapacity = ?, WeightCapacity = ?, FactoryID = ?, DriverID = ?, RouteID = ? WHERE VehicleID = ?', [VehicleNumber, VehicleType, VolumeCapacity, WeightCapacity, FactoryID, DriverID, RouteID, VehicleID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    deleteVehicleMappings: async (VehicleID) => {
        try {
            const results = await query('DELETE FROM VehicleMappings WHERE VehicleID = ?', [VehicleID]);
            return results;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = VehicleMappingsModel;