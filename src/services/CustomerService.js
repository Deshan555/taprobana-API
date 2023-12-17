const CustomerModel = require('../models/Customers');
const { successResponse, errorResponse } = require('../utils/responseUtils');
const {hashPassword} = require('../utils/bcrypt');

const CustomerController = {
    getAllCustomers: async (req, res) => {
        try {
            const results = await CustomerModel.getAllCustomers();
            if(results.length === 0) return errorResponse(res, 'No customers found', 404);
            successResponse(res, 'Customers retrieved successfully', results)
        } catch (error) {
            console.error('Error getting customers:', error);
            errorResponse(res, 'Error Occurred while fetching customers : '+error);
        }
    },
    addCustomer: async (req, res) => {
        const { CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, CustomerPassword, FactoryID } = req.body;

        if (!CustomerName || !CustomerMobile || !CustomerAddress || !CustomerEmail || !CustomerType || !CustomerPassword || !FactoryID) {
            return errorResponse(res, 'CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, Password oF Customer and FactoryID are required fields', 400);
        }
        try {
            const CustomerID = Math.floor(Math.random() * 1000000000);
            const RegistrationDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const hashedPassword = await hashPassword(CustomerPassword);
            const result = await CustomerModel.addCustomer(CustomerID, CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, RegistrationDate, hashedPassword, FactoryID);
            successResponse(res, 'Customer added successfully', result);
        } catch (error) {
            console.error('Error adding customer:', error);
            errorResponse(res, 'Error Occurred while adding customer : '+error);
        }
    },
    getCustomerByID: async (req, res) => {
        const {CustomerID} = req.params;
        try {
            const results = await CustomerModel.getCustomerByID(CustomerID);
            if (results.length === 0) return errorResponse(res, 'Customer not found', 404);
            successResponse(res, 'Customer retrieved successfully', results);
        } catch (error) {
            console.error('Error getting customer by ID:', error);
            errorResponse(res, 'Error Occurred while fetching customer by ID : '+error);
        }

    },
    updateCustomer: async (req, res) => {
        const {CustomerID} = req.params;
        const {
            CustomerName,
            CustomerMobile,
            CustomerAddress,
            CustomerEmail,
            CustomerType,
            RegistrationDate,
            TeaLeavesProvided,
            FactoryID
        } = req.body;
        try {
            const result = await CustomerModel.updateCustomer(CustomerID, CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, RegistrationDate, TeaLeavesProvided, FactoryID);
            successResponse(res, 'Customer updated successfully', result);
        } catch (error) {
            console.error('Error updating customer:', error);
            errorResponse(res, 'Error Occurred while updating customer : ' + error);
        }
    },
    deleteCustomer: async (req, res) => {
        const {CustomerID} = req.params;
        try {
            await CustomerModel.deleteCustomer(CustomerID);
            successResponse(res, 'Customer deleted successfully', null);
        } catch (error) {
            console.error('Error deleting customer:', error);
            errorResponse(res, 'Error Occurred while deleting customer : ' + error);
        }
    }
};

module.exports = CustomerController;