const Joi = require('joi');

const signupValidation = (req,res,next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(18).required(),
        userType: Joi.string().required(),
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message: "bad request", error})
    }
    next();
}


const loginValidation = (req,res,next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(18).required(),
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message: "bad request", error})
    }
    next();
}

const validateResetPassword = (req, res, next) => {
    const { email, securityKey, newPassword } = req.body;
    if (!email || !securityKey || !newPassword) {
    return res.status(400).json({ message: "Missing email or security key.", success: false });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation,
    validateResetPassword,
    
}