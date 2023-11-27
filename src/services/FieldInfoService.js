const FieldInfoModel = require('../models/FieldInfo');
const { successResponse, errorResponse } = require('../utils/responseUtils');

const FieldInfoController = {
    getAllFieldInfos: async (req, res) => {
        try {
            const results = await FieldInfoModel.getAllFieldInfo();
            if(results.length === 0) return errorResponse(res, 'No fieldInfos found', 404);
            successResponse(res, 'FieldInfos retrieved successfully', results)
        } catch (error) {
            console.error('Error getting fieldInfos:', error);
            errorResponse(res, 'Error Occurred while fetching fieldInfos : '+error);
        }
    },
    addFieldInfo: async (req, res) => {
        const { FieldID, FieldName, FieldLocation, FieldSize, FieldType, FieldStatus, FieldOwner, FieldOwnerContact, FieldOwnerAddress, FieldOwnerEmail, FieldOwnerType, FieldOwnerRegistrationDate, FactoryID } = req.body;

        if (!FieldID || !FieldName || !FieldLocation || !FieldSize || !FieldType || !FieldStatus || !FieldOwner || !FieldOwnerContact || !FieldOwnerAddress || !FieldOwnerEmail || !FieldOwnerType || !FieldOwnerRegistrationDate || !FactoryID) {
            return errorResponse(res, 'FieldID, FieldName, FieldLocation, FieldSize, FieldType, FieldStatus, FieldOwner, FieldOwnerContact, FieldOwnerAddress, FieldOwnerEmail, FieldOwnerType, FieldOwnerRegistrationDate and FactoryID are required fields', 400);
        }
        try {
            const result = await FieldInfoModel.addFieldInfo(FieldID, FieldName, FieldLocation, FieldSize, FieldType, FieldStatus, FieldOwner, FieldOwnerContact, FieldOwnerAddress, FieldOwnerEmail, FieldOwnerType, FieldOwnerRegistrationDate, FactoryID);
            successResponse(res, 'FieldInfo added successfully', result);
        } catch (error) {
            console.error('Error adding fieldInfo:', error);
            errorResponse(res, 'Error Occurred while adding fieldInfo : '+error);
        }
    },
    getFieldInfoByID: async (req, res) => {
        const {FieldID} = req.params;
        try {
            const results = await FieldInfoModel.getFieldInfoByID(FieldID);
            if (results.length === 0) return errorResponse(res, 'FieldInfo not found', 404);
            successResponse(res, 'FieldInfo retrieved successfully', results);
        } catch (error) {
            console.error('Error getting fieldInfo by ID:', error);
            errorResponse(res, 'Error Occurred while fetching fieldInfo by ID : ' + error);
        }
    },
    updateFieldInfo: async (req, res) => {
        const {FieldID} = req.params;
        const {
            FieldName,
            FieldLocation,
            FieldSize,
            FieldType,
            FieldStatus,
            FieldOwner,
            FieldOwnerContact,
            FieldOwnerAddress,
            FieldOwnerEmail,
            FieldOwnerType,
            FieldOwnerRegistrationDate,
            FactoryID
        } = req.body;
        try {
            const result = await FieldInfoModel.updateFieldInfo(FieldID, FieldName, FieldLocation, FieldSize, FieldType, FieldStatus, FieldOwner, FieldOwnerContact, FieldOwnerAddress, FieldOwnerEmail, FieldOwnerType, FieldOwnerRegistrationDate, FactoryID);
            successResponse(res, 'FieldInfo updated successfully', result);
        } catch (error) {
            console.error('Error updating fieldInfo:', error);
            errorResponse(res, 'Error Occurred while updating fieldInfo : '+error);
        }
    },
    deleteFieldInfo: async (req, res) => {
        const {FieldID} = req.params;
        try {
            await FieldInfoModel.deleteFieldInfo(FieldID);
            successResponse(res, 'FieldInfo deleted successfully', null);
        } catch (error) {
            console.error('Error deleting fieldInfo:', error);
            errorResponse(res, 'Error Occurred while deleting fieldInfo : '+error);
        }
    }
};

module.exports = FieldInfoController;
