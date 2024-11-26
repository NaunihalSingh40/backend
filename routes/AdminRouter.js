const { addLeave, updateLeave, getLeaves } = require('../controllers/AdminController');

const router = require('express').Router();

router.post('/leaves/add', addLeave);
router.put("/leaves/:id", updateLeave);
router.get("/leaves", getLeaves);

module.exports = router;