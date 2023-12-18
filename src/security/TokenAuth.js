import jwt from "jsonwebtoken";
const { successResponse, errorResponse } = require('../utils/responseUtils');

const tokenAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null)
        return errorResponse(res, 'Access Token is required', 401);
    if (token === undefined)
        return errorResponse(res, 'Access Token is required', 401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return errorResponse(res, 'Invalid Access Token, Or Access Token Has Been Changed By SomeOne', 403);
        req.user = user;
        next();
    });
}
export default tokenAuth;