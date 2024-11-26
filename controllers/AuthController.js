const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const MASTER_SECURITY_KEY = process.env.MASTER_SECURITY_KEY || "USP2025";

const signup = async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exist", success: false });
    }
    const userModel = new UserModel({ name, email, password, userType });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({
      message: "Signup successful",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errorMsg = "Authentication Failed";
    if (!user) {
      return res.status(403).json({
        message: errorMsg,
        success: false,
      });
    }
    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      return res.status(403).json({
        message: errorMsg,
        success: false,
      });
    }
    const jwtToken = jwt.sign(
        {email:user.email, _id: user._id, userType: user.userType, name: user.name},
        process.env.jwt_secret,
        { expiresIn: "24h" }
    )

    res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      email: user.email,
      name : user.name,
      userType: user.userType,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
    console.log(error);
  }
};

const resetPassword = async (req, res) => {
  const { email, securityKey, newPassword } = req.body;

  if (!email || !securityKey || !newPassword) {
    return res.status(400).json({ message: "Missing required fields.", success: false });
  }

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found.", success: false });
    }

    // Validate security key
    if ( securityKey !== MASTER_SECURITY_KEY) {
      return res.status(403).json({ message: "Invalid security key.", success: false });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successfully.", success: true });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      success: false,
    });
    console.log(error);
  }
};


module.exports = {
  signup,
  login,
  resetPassword
};
