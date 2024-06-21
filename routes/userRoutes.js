// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { checkUser } = require('../middleware/authMiddleware');

router.get('/profile', checkUser, userController.getProfile);
router.put('/profile', checkUser, userController.updateProfile);

module.exports = router;
