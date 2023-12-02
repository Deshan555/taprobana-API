const RoleModel = require('../models/Roles');
const { successResponse, errorResponse } = require('../utils/responseUtils');

const RoleController = {
    getAllRoles: async (req, res) => {
        try {
            const results = await RoleModel.getAllRoles();
            if(results.length === 0) return errorResponse(res, 'No roles found', 404);
            successResponse(res, 'Roles retrieved successfully', results)
        } catch (error) {
            console.error('Error getting roles:', error);
            errorResponse(res, 'Error Occurred while fetching roles : '+error);
        }
    },
    addRole: async (req, res) => {
        const { RoleName, CreationDate, Description } = req.body;

        if (!RoleName || !CreationDate || !Description) {
            return errorResponse(res, 'RoleName, CreationDate and Description are required fields', 400);
        }
        try {
            const RoleID = Math.floor(Math.random() * (2 ** 10));
            const result = await RoleModel.addRole(RoleID, RoleName, CreationDate, Description);
            successResponse(res, 'Role added successfully', result);
        } catch (error) {
            console.error('Error adding role:', error);
            errorResponse(res, 'Error Occurred while adding role : '+error);
        }
    },
    getRoleByID: async (req, res) => {
        const {RoleID} = req.params;
        try {
            const results = await RoleModel.getRoleByID(RoleID);
            if (results.length === 0) return errorResponse(res, 'Role not found', 404);
            successResponse(res, 'Role retrieved successfully', results);
        } catch (error) {
            console.error('Error getting role by ID:', error);
            errorResponse(res, 'Error Occurred while fetching role by ID : ' + error);
        }
    },
    updateRole: async (req, res) => {
        const {RoleID} = req.params;
        const {RoleName, CreationDate, Description} = req.body;
        try {
            const result = await RoleModel.updateRole(RoleID, RoleName, CreationDate, Description);
            successResponse(res, 'Role updated successfully', result);
        } catch (error) {
            console.error('Error updating role:', error);
            errorResponse(res, 'Error Occurred while updating role : '+error);
        }
    },
    deleteRole: async (req, res) => {
        const {RoleID} = req.params;
        try {
            await RoleModel.deleteRole(RoleID);
            successResponse(res, 'Role deleted successfully', null);
        } catch (error) {
            console.error('Error deleting role:', error);
            errorResponse(res, 'Error Occurred while deleting role : ' + error);
        }
    }
}

module.exports = RoleController;