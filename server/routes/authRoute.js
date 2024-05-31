const express = require('express');
const authCotroller = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authCotroller.signup);
router.post('/login', authCotroller.login);