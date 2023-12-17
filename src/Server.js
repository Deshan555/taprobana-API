const express = require('express');
//const { jsonParser } = require('./middleware/middleware');
const bodyParser = require('body-parser');
const endPoints = require('./routes/Routes');
//const cors = require('cors');

const server = express();
const port = 3000;

server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({ extended: true }));

server.use('/thaprobane/core/v01', endPoints);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


/*
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// POST endpoint
app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    console.log('Received data:', receivedData);
    res.status(200).json({ message: 'Data received successfully', data: receivedData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

 */