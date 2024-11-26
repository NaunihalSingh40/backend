const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    profilePicture: {
        type: String
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    department: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    employmentType: {
        type: String,
        enum: ['Full-Time', 'Part-Time', 'Contract', 'Intern'],
        required: true,
    },
    employeeStatus: { ///////////////////////////////////////////////////
        type: String,
        enum: ['Active', 'Inactive', 'On Leave', 'Terminated'],
        default: 'Active',
    },
    dateOfJoining: {
        type: Date,
        required: true,
    },
    baseSalary: {
        type: Number,
        required: true,
    },
    bonuses: {
        type: Number,
        default: 0,
    },
    allowances: {
        type: Number,
        default: 0,
    },
    accountNumber: { ////////////////////////////////////////////////////////
        type: String,
    },
    bankName: { ////////////////////////////////////////////////////////
        type: String,
    },
    ifscCode: { ////////////////////////////////////////////////////////
        type: String,
    },
    panNumber: { ////////////////////////////////////////////////////////
        type: String,
    },
    taxSlabs: { ////////////////////////////////////////////////////////
        type: String,
    },

    permanentAddress: {
        type: String,
    },
    currentAddress: {
        type: String,
    },

    emergencyName: {
        type: String,
    },
    emergencyRelationship: {
        type: String,
    },
    emergencyPhoneNumber: {
        type: String,
    },
    alternateNumber: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);