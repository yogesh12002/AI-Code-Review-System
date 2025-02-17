// Importing the Express framework
const express = require('express');

// Importing AI-related routes from the 'routes' folder
const aiRoutes = require('./routes/ai.routes');

// Importing the CORS middleware to allow cross-origin requests
const cors = require('cors');

// Creating an instance of the Express application
const app = express();

// Enabling CORS for handling cross-origin requests
app.use(cors());

// Enabling JSON parsing for incoming requests
app.use(express.json());

// Defining a simple GET route at the root ("/") that returns "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Mounting AI-related routes under the "/ai" endpoint
app.use('/ai', aiRoutes);

// Exporting the Express app to be used in other files (e.g., for starting the server)
module.exports = app;
