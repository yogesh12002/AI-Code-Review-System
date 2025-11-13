// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the Express app from the src/app.js file
const app = require('./src/app');


// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
