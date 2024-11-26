const express = require('express');
const { addEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.post('/employees', addEmployee);

module.exports = router;