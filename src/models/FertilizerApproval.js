const { Logger } = require('sequelize/lib/utils/logger');
const { query } = require('../config/database');
const logger = require('../config/logger');

const FertilizerApprovalModal = {
    getAllFertilizerRelatedRecords: async () => {
        try {
            return await query('SELECT * FROM fertilizerapproval');
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.getAllFertilizerRelatedRecords', error);
            throw error;
        }
    },
    placeFertilizerOrder: async (FertilizerID, FieldID, OrderQuentity, OrderDate, RequestedDeadLine, CustomerOrderStatus, ApprovalStatus, ApprovedQuantity, ApprovedBy, PaymentStatus, Remarks, ApproveDate, SupposedDeliveryDate, IsDelivered) => {
        try {
            return await query('INSERT INTO fertilizerapproval (FertilizerID, FieldID, OrderQuentity, OrderDate, RequestedDeadLine, CustomerOrderStatus, ApprovalStatus, ApprovedQuantity, ApprovedBy, PaymentStatus, Remarks, ApproveDate, SupposedDeliveryDate, IsDelivered) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [FertilizerID, FieldID, OrderQuentity, OrderDate, RequestedDeadLine, CustomerOrderStatus, ApprovalStatus, ApprovedQuantity, ApprovedBy, PaymentStatus, Remarks, ApproveDate, SupposedDeliveryDate, IsDelivered]);
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.placeFertilizerOrder', error);
            throw error;
        }
    },
    updateOrderByCustomers: async (ORDER_ID, OrderQuentity, RequestedDeadLine, CustomerOrderStatus) => {
        try {
            return await query('UPDATE fertilizerapproval SET OrderQuentity = ?, RequestedDeadLine = ?, CustomerOrderStatus = ? WHERE ORDER_ID = ?', [OrderQuentity, RequestedDeadLine, CustomerOrderStatus, ORDER_ID]);
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.updateOrderByCustomers', error);
            throw error;
        }
    },
    getFertilizerApprovalByID: async (ORDER_ID) => {
        try {
            return await query('SELECT * FROM fertilizerapproval WHERE ORDER_ID = ?', [ORDER_ID]);
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.getFertilizerApprovalByID', error);
            throw error;
        }
    },
    adminApprovalOrder: async (ORDER_ID, ApprovalStatus, ApprovedQuantity, ApprovedBy, PaymentStatus, Remarks, ApproveDate, SupposedDeliveryDate, IsDelivered) => {
        try {
            return await query('UPDATE fertilizerapproval SET ApprovalStatus = ?, ApprovedQuantity = ?, ApprovedBy = ?, PaymentStatus = ?, Remarks = ?, ApproveDate = ?, SupposedDeliveryDate = ?, IsDelivered = ? WHERE ORDER_ID = ?', 
            [ApprovalStatus, ApprovedQuantity, ApprovedBy, PaymentStatus, Remarks, ApproveDate, SupposedDeliveryDate, IsDelivered, ORDER_ID]);
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.adminApprovalOrder', error);
            throw error;
        }
    },
    changeDeliverStaus: async (ORDER_ID, IsDelivered) => {
        try {
            return await query('UPDATE fertilizerapproval SET IsDelivered = ? WHERE ORDER_ID = ?', [IsDelivered, ORDER_ID]);
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.changeDeliverStaus', error);
            throw error;
        }
    },
    rejectFertilizerOrder: async (ORDER_ID) => {
        try {
            return await query('UPDATE fertilizerapproval SET ApprovalStatus = ? WHERE ORDER_ID = ?', ['REJECTED', ORDER_ID]);
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.rejectFertilizerOrder', error);
            throw error;
        }
    },
    deleteFertilizerApproval: async (ORDER_ID) => {
        try {
            return await query('DELETE FROM fertilizerapproval WHERE ORDER_ID = ?', [ORDER_ID]);
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.deleteFertilizerApproval', error);
            throw error;
        }
    },
    getOrderByGivenByFertilizerID: async (FertilizerID) => {
        try {
            return await query('SELECT * FROM fertilizerapproval WHERE FertilizerID = ?', [FertilizerID]);
        } catch (error) {
            logger.error('Error in FertilizerApprovalModal.getOrderByGivenByFertilizerID', error);
            throw error;
        }
    }
}

module.exports =  FertilizerApprovalModal;