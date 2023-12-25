require('dotenv').config();
const authModel = require('../models/Auth');
const customerModel = require('../models/Customers');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const { successResponse, errorResponse } = require('../utils/responseUtils');
const jwt = require('jsonwebtoken');
const bcrypt = require('../utils/bcrypt');

const AuthControl = {
    authCustomer: async (req, res) => {
        const {customerEmail, password} = req.body;
        try {
            const results = await customerModel.getCustomerByEmail(customerEmail);
            let passwordFromDataBase = '';
            if(results.length === 0)
                return errorResponse(res, 'Can Not Find Customer With Given Email Address', 404);
            else
                passwordFromDataBase = results[0].Password;
                const passwordMatch = await bcrypt.comparePassword(password, passwordFromDataBase);
                if(passwordMatch === false)
                    return errorResponse(res, 'Invalid Credentials, Wrong Password', 401);
                else
                    jwt.sign({results}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
                        if(err) return errorResponse(res, 'Error Occurred while generating access token : '+err);
                        successResponse(res, 'Customer authenticated successfully', token)
                    });
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