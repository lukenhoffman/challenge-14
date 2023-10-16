const { response } = require('express');

// Middleware to check if user is logged in
const authentication = (req, res, next) => {
    // Check if the user is logged in
    if (!req.session.user_id) {
        // If not, redirect to login page
        res.redirect('/login');
    } else {
        // If yes, proceed to the next middleware/route handler
        next();
    }
};

module.exports = authentication;
