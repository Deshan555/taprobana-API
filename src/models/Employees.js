const { query } = require('../config/database');

// EmployeeModel is an object that contains functions
const EmployeeModel = {
    getAllEmployees: async () => {
        try {
            const results = await query('SELECT * FROM Employees');
            return results;
        } catch (error) {
            throw error;
        }
    },
    // EmployeeID, EmployeeName, EmployeeMobile, EmployeeAddress, EmployeeEmail, EmployeeType, RegistrationDate, FactoryID, hashedPassword
    addEmployee: async (EmployeeID, EmployeeName, JoiningDate, Email, Mobile, Role, FactoryID, Password) => {
        try {
            const results = await query('INSERT INTO Employees (' +
                'EmployeeID, EmployeeName, JoiningDate, Email, Mobile, RoleID, FactoryID, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [EmployeeID, EmployeeName, JoiningDate, Email, Mobile, Role, FactoryID, Password]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    getEmployeeByEmail: async (Email) => {
        try {
            const results = await query('SELECT * FROM Employees WHERE Email = ?', [Email]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    getEmployeeByID: async (EmployeeID) => {
        try {
            const results = await query('SELECT * FROM Employees WHERE EmployeeID = ?', [EmployeeID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    updateEmployee: async (EmployeeID, EmployeeName, JoiningDate, Email, Mobile, Role, FactoryID) => {
        try {
            const results = await query('UPDATE Employees SET EmployeeName = ?, JoiningDate = ?, Email = ?, Mobile = ?, Role = ?, FactoryID = ? WHERE EmployeeID = ?', [EmployeeName, JoiningDate, Email, Mobile, Role, FactoryID, EmployeeID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    deleteEmployee: async (EmployeeID) => {
        try {
            const results = await query('DELETE FROM Employees WHERE EmployeeID = ?', [EmployeeID]);
            return results;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = EmployeeModel;