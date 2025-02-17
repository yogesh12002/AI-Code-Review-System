// Importing the Express framework
const express = require('express'); 

// Importing the AI controller which handles the logic for AI-related routes
const aiController = require("../controllers/ai.controller");

// Creating a new router instance using Express
const router = express.Router();

// Defining a POST route for "/get-review" that calls the getReview function from the AI controller
router.post("/get-review", aiController.getReview);

// Exporting the router to be used in other parts of the application
module.exports = router;
