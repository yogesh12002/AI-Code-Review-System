// Importing the AI service which contains the logic for processing AI-related tasks
const aiService = require("../services/ai.service");

// Exporting the getReview function as a module
module.exports.getReview = async (req, res) => {

    // Extracting the 'code' property from the request body
    const code = req.body.code;

    // Checking if 'code' is provided in the request
    if (!code) {
        return res.status(400).send("Prompt is required"); // Returning a 400 Bad Request error if 'code' is missing
    }

    // Calling the AI service with the provided 'code' and waiting for the response
    const response = await aiService(code);

    // Sending the AI-generated response back to the client
    res.send(response);
};
