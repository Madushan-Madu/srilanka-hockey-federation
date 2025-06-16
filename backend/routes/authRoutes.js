const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser); // Typically for initial admin setup, might be removed later
router.post('/login', loginUser);

module.exports = router;