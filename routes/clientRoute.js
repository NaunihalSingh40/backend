const express = require('express');
const router = express.Router();
const { addClient, getAllClients } = require('../controllers/cleintController');

router.post('/addClient', addClient);
router.get('/allClients', getAllClients);

module.exports = router;
