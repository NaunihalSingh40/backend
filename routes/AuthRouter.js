const { signup, login, resetPassword } = require('../controllers/AuthController');
const { signupValidation, loginValidation, validateResetPassword } = require('../middlewares/AuthValidation');

const router = require('express').Router();

router.post('/signup', signupValidation, signup)
router.post('/login', loginValidation, login)
router.post("/resetPassword", validateResetPassword, resetPassword);

module.exports = router;