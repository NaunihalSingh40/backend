const express = require('express');
const bodyParser = require('body-parser');
const AuthRouter = require('./routes/AuthRouter');
const AdminRouter = require('./routes/AdminRouter');
const cors = require('cors');
const RoleRouter = require('./routes/RoleRouter');
const employeeRouter = require('./routes/employeeRoutes')
const app = express();
require('dotenv').config();
// require('./models/db');
const connectDB = require('./models/db')
const jwt = require('jsonwebtoken')
const PORT = process.env.port || 8080;

connectDB();
app.get('/ping', (req, res) => {
    res.send('PONG');
})


app.use(async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (token) {
        const decoded = jwt.verify(token, process.env.jwt_secret);
        req.user = decoded;
    }
    next();
})
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/api', RoleRouter);
app.use('/admin', AdminRouter);
app.use('/api/employee', employeeRouter)
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port `);
})