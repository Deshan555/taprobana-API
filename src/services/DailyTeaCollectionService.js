const DailyTeaCollectionModel = require('../models/DailyTeaCollection');
const FieldInfoModel = require('../models/FieldInfo');
const EmployeeModel = require('../models/Employees');
const { successResponse, errorResponse } = require('../utils/responseUtils');
const { logger } = require('../config/logger');
const { UUID } = require('sequelize');

const DailyTeaCollectionController = {
    getAllDailyTeaCollection: async (req, res) => {
        try {
            const results = await DailyTeaCollectionModel.getAllDailyTeaCollection();
            if(results.length === 0) return errorResponse(res, 'No dailyTeaCollection found', 404);
            successResponse(res, 'DailyTeaCollection retrieved successfully', results)
        } catch (error) {
            console.error('Error getting dailyTeaCollection:', error);
            errorResponse(res, 'Error Occurred while fetching dailyTeaCollection : '+error);
        }
    },
    getAllDataBetweenTwoDates : async (req, res) => {
        const {startDate, endDate} = req.body;
        try {
            const results = await DailyTeaCollectionModel.getAllDataBetweenTwoDates(startDate, endDate);
            if(results.length === 0) return errorResponse(res, 'No dailyTeaCollection found', 404);
            successResponse(res, 'DailyTeaCollection retrieved successfully', results)
        } catch (error) {
            console.error('Error getting dailyTeaCollection:', error);
            errorResponse(res, 'Error Occurred while fetching dailyTeaCollection : '+error);
        }
    },
    addDailyTeaCollection: async (req, res) => {
        const { DailyTeaCollectionID, TeaCollectionID, FactoryID, TeaCollectionDate, TeaCollectionTime, TeaCollectionQuantity, TeaCollectionDescription } = req.body;

        if (!DailyTeaCollectionID || !TeaCollectionID || !FactoryID || !TeaCollectionDate || !TeaCollectionTime || !TeaCollectionQuantity || !TeaCollectionDescription) {
            return errorResponse(res, 'DailyTeaCollectionID, TeaCollectionID, FactoryID, TeaCollectionDate, TeaCollectionTime, TeaCollectionQuantity and TeaCollectionDescription are required fields', 400);
        }
        try {
            const result = await DailyTeaCollectionModel.addDailyTeaCollection(DailyTeaCollectionID, TeaCollectionID, FactoryID, TeaCollectionDate, TeaCollectionTime, TeaCollectionQuantity, TeaCollectionDescription);
            successResponse(res, 'DailyTeaCollection added successfully', result);
        } catch (error) {
            console.error('Error adding dailyTeaCollection:', error);
            errorResponse(res, 'Error Occurred while adding dailyTeaCollection : '+error);
        }
    },
    addDataByAdminSideTeaCollection : async (req, res) => {
        const { collectionDate, teaWeightCollected, waterWeightCollected, actualTeaWeight, fieldID, remark, employeeID } = req.body;
        try {
            const collectionID = Math.floor(Math.random() * 90000) + 10000;
            const fieldInformations = await FieldInfoModel.getFieldInfoByID(fieldID);
            const BaseLatitude = fieldInformations[0].Attitude;
            const BaseLongitude = fieldInformations[0].Longitude;
            const RouteID = fieldInformations[0].RouteID;
            const CreationType = 'WEB-ADMIN';
            const result = await DailyTeaCollectionModel.adminCreationFieldRecord
            (collectionID, collectionDate, teaWeightCollected, waterWeightCollected, actualTeaWeight, BaseLongitude, BaseLatitude, RouteID, fieldID, employeeID, remark, CreationType);
            successResponse(res, 'DailyTeaCollection added successfully by admin', result);
        } catch (error) {
            console.error('Error adding dailyTeaCollection:', error);
            errorResponse(res, 'Error Occurred while adding dailyTeaCollection : '+error);
        }
    },
    addBulkRecordsImportFromAdmin : async (req, res) => {
        const failedList = [];
        try {
            const dataLength = req.body.length;
            const data = req.body;
            for (let i = 0; i < dataLength; i++) {
                const collectionID = Math.floor(Math.random() * 90000) + 10000;
                const fieldInformations = await FieldInfoModel.getFieldInfoByID(data[i].fieldID);
                const employeeInformartions = await EmployeeModel.getEmployeeByID(data[i].employeeID);
                if (fieldInformations.length === 0 || employeeInformartions.length === 0) {
                    failedList.push(data[i]);
                } else {
                    const BaseLatitude = fieldInformations[0].Attitude;
                    const BaseLongitude = fieldInformations[0].Longitude;
                    const RouteID = fieldInformations[0].RouteID;
                    const CreationType = 'WEB-ADMIN';
                    await DailyTeaCollectionModel.adminCreationFieldRecord
                        (collectionID, data[i]?.collectionDate, data[i]?.teaWeightCollected, data[i]?.waterWeightCollected, data[i]?.actualTeaWeight, BaseLongitude, BaseLatitude, RouteID, data[i]?.fieldID, data[i]?.employeeID, data[i]?.remark, CreationType);
                }
            }
            const response = {
                totalRecords : dataLength,
                successCount : dataLength - failedList.length,
                failedCount : failedList.length,
                failedList: failedList
            };
            successResponse(res, 'Bulk Processing Done Successfully', response);

        } catch (error) {
            console.error('Error adding dailyTeaCollection:', error);
            errorResponse(res, 'Error Occurred while adding dailyTeaCollection : ' + error);
        }
    },
    getDailyTeaCollectionByID: async (req, res) => {
        const {DailyTeaCollectionID} = req.params;
        try {
            const results = await DailyTeaCollectionModel.getDailyTeaCollectionByID(DailyTeaCollectionID);
            if (results.length === 0) return errorResponse(res, 'DailyTeaCollection not found', 404);
            else {
                const fieldInfo = await FieldInfoModel.getFieldInfoByID(results[0].FieldID);
                const employeeInfo = await EmployeeModel.getEmployeeByID(results[0].EmployeeID);
                const response = {
                    ... results[0],
                    ... fieldInfo[0],
                    ... employeeInfo[0]
                };
                successResponse(res, 'DailyTeaCollection retrieved successfully', response);
            }
        } catch (error) {
            console.error('Error getting dailyTeaCollection by ID:', error);
            errorResponse(res, 'Error Occurred while fetching dailyTeaCollection by ID : ' + error);
        }
    },
    updateDailyTeaCollection: async (req, res) => {
        const {DailyTeaCollectionID} = req.params;
        const {TeaCollectionID, FactoryID, TeaCollectionDate, TeaCollectionTime, TeaCollectionQuantity, TeaCollectionDescription} = req.body;
        try {
            const result = await DailyTeaCollectionModel.updateDailyTeaCollection(DailyTeaCollectionID, TeaCollectionID, FactoryID, TeaCollectionDate, TeaCollectionTime, TeaCollectionQuantity, TeaCollectionDescription);
            successResponse(res, 'DailyTeaCollection updated successfully', result);
        } catch (error) {
            console.error('Error updating dailyTeaCollection:', error);
            errorResponse(res, 'Error Occurred while updating dailyTeaCollection : '+error);
        }
    },
    deleteDailyTeaCollection: async (req, res) => {
        const {DailyTeaCollectionID} = req.params;
        try {
            await DailyTeaCollectionModel.deleteDailyTeaCollection(DailyTeaCollectionID);
            successResponse(res, 'DailyTeaCollection deleted successfully', null);
        } catch (error) {
            console.error('Error deleting dailyTeaCollection:', error);
            errorResponse(res, 'Error Occurred while deleting dailyTeaCollection : ' + error);
        }
    }
};

module.exports = DailyTeaCollectionController;