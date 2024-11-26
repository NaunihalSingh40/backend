const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Admin Protected Routes (all routes starting with `/admin`)
router.use('/admin', authMiddleware(['Admin']));
router.get('/admin', (req, res) => {
    res.send('Welcome Admin');
});
router.get('/admin/someSubRoute', (req, res) => {
    res.send('Admin sub route');
});

// Sub-Admin Protected Routes (all routes starting with `/subAdmin`)
router.use('/subAdmin', authMiddleware(['Admin', 'Sub Admin']));
router.get('/subAdmin', (req, res) => {
    res.send('Welcome Sub-Admin');
});
router.get('/subAdmin/anotherRoute', (req, res) => {
    res.send('Sub Admin route');
});

// Employee Protected Routes (all routes starting with `/employee`)
router.use('/employee', authMiddleware(['Admin', 'Sub Admin', 'Employee']));
router.get('/employee', (req, res) => {
    res.send('Welcome Employee');
});
router.get('/employee/specificRoute', (req, res) => {
    res.send('Employee specific route');
});

module.exports = router;
