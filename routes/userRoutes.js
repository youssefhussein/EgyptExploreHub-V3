// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/authMiddleware');

router.get('/profile', isAuthenticated, userController.getProfile);
router.put('/profile', isAuthenticated, userController.updateProfile);

module.exports = router;
