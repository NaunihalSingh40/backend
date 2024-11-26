const express = require('express');
const { addHoliday , getHolidays} = require('../controllers/holidaysController');
const router = express.Router();

router.post('/addHoliday', addHoliday);

router.get('/getAllHolidays', getHolidays);

module.exports = router;