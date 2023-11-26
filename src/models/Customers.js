const { query } = require('../config/database');

// CustomerModel is an object that contains functions
const CustomerModel = {
    getAllCustomers: async () => {
        try {
            const results = await query('SELECT * FROM Customers');
            return results;
        } catch (error) {
            throw error;
        }
    },
    addCustomer: async (CustomerID, CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, RegistrationDate, TeaLeavesProvided, FactoryID) => {
        try {
            const results = await query('INSERT INTO Customers (CustomerID, CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, RegistrationDate, TeaLeavesProvided, FactoryID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [CustomerID, CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, RegistrationDate, TeaLeavesProvided, FactoryID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    getCustomerByID: async (CustomerID) => {
        try {
            const results = await query('SELECT * FROM Customers WHERE CustomerID = ?', [CustomerID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    updateCustomer: async (CustomerID, CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, RegistrationDate, TeaLeavesProvided, FactoryID) => {
        try {
            const results = await query('UPDATE Customers SET CustomerName = ?, CustomerMobile = ?, CustomerAddress = ?, CustomerEmail = ?, CustomerType = ?, RegistrationDate = ?, TeaLeavesProvided = ?, FactoryID = ? WHERE CustomerID = ?', [CustomerName, CustomerMobile, CustomerAddress, CustomerEmail, CustomerType, RegistrationDate, TeaLeavesProvided, FactoryID, CustomerID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    deleteCustomer: async (CustomerID) => {
        try {
            const results = await query('DELETE FROM Customers WHERE CustomerID = ?', [CustomerID]);
            return results;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CustomerModel;