// models/Holiday.js
const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    holidayId: { type: String },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    region: { type: String, required: true },
    description: { type: String },
});

const Holiday = mongoose.model('Holiday', holidaySchema);

module.exports = Holiday;
