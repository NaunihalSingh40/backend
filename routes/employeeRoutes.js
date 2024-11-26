const express = require('express');
const { addEmployee , getAllEmployees} = require('../controllers/employeeController');
const router = express.Router();

router.post('/addEmployee', addEmployee);

router.get('/getAllEmployees', getAllEmployees);

module.exports = router;