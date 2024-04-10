const logger = require('../config/logger');

const TemplateProvider = {
    generateRegistrationEmail: (username, email, password) => {
        const htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registration Successful</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #666;
                }
                .footer {
                    margin-top: 20px;
                    text-align: center;
                    color: #999;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Registration Successful</h1>
                <p>Hello ${username},</p>
                <p>Your registration was successful. Below are your login details:</p>
                <ul>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Password:</strong> ${password}</li>
                    <!-- Add any other details here -->
                </ul>
                <p>You can now login using the provided credentials.</p>
                <p>Thank you for registering with us.</p>
                <div class="footer">
                    <p>This is an automated message. Please do not reply.</p>
                </div>
            </div>
        </body>
        </html>
    `;
        logger.info('Registration email template generated');
        return htmlTemplate;
    },
    genarateRegisterCustomer: (username, email, password) => {
        const htmlTemplate = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Successful</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Registration Successful</h1>
        <p>Hello ${username},</p>
        <p>Your registration was successful. Below are your login details:</p>
        <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Password:</strong> ${password}</li>
            <!-- Add any other details here -->
        </ul>
        <p>You can now login using the provided credentials.</p>
        <p>Thank you for registering with us.</p>
        <div class="footer">
            <p>This is an automated message. Please do not reply.</p>
        </div>
    </div>
</body>
</html>
    `;
        logger.info('Registration email template generated');
        return htmlTemplate;

    },
    genrateProfileUpdateTemplate: (username, email) => {
        const htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Profile Update</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #666;
                }
                .footer {
                    margin-top: 20px;
                    text-align: center;
                    color: #999;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Profile Update</h1>
                <p>Hello ${username},</p>
                <p>Your profile has been updated successfully.</p>
                <ul>
                    <li><strong>Email:</strong> ${email}</li>
                    <!-- Add any other details here -->
                </ul>
                <p>Thank you for updating your profile with us.</p>
                <div class="footer">
                    <p>This is an automated message. Please do not reply.</p>
                </div>
            </div>
        </body>
        </html>
    `;
        logger.info('Profile update email template generated');
        return htmlTemplate;
    }
}

module.exports = TemplateProvider;