const jwt = require("jsonwebtoken");

const authMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Access token is missing' });
        }

        try {
            const decoded = jwt.verify(token, process.env.jwt_secret);
            req.user = decoded;

            // Check if the user role is allowed
            if (!allowedRoles.includes(req.user.userType)) {
                return res.status(403).json({ message: 'Access denied' });
            }

            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    };
};

module.exports = authMiddleware;
