const authModel = require('../models/Auth');
const { successResponse, errorResponse } = require('../utils/responseUtils');

const AuthControl = {
    authCustomer: async (req, res) => {
        const {CustomerEmail, Password} = req.body;
        try {
            const results = await authModel.authCustomer(CustomerEmail, Password);
            if(results.length === 0) return errorResponse(res, 'Invalid Credentials', 401);
            successResponse(res, 'Customer authenticated successfully', results)
        } catch (error) {
            console.error('Error authenticating customer:', error);
            errorResponse(res, 'Error Occurred while authenticating customer : '+error);
        }
    },
    authEmployee: async (req, res) => {
        const {Email, Password} = req.body;
        try {
            const results = await authModel.authEmployee(Email, Password);
            if(results.length === 0) return errorResponse(res, 'Invalid Credentials', 401);
            successResponse(res, 'Employee authenticated successfully', results)
        } catch (error) {
            console.error('Error authenticating employee:', error);
            errorResponse(res, 'Error Occurred while authenticating employee : '+error);
        }
    }
}

module.exports = AuthControl;