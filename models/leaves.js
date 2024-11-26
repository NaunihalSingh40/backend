const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  leaveType: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  days: { type: Number, required: true },
  reason: { type: String, required: true },
  status: { type: String, default: "New", required: true },
});

module.exports = mongoose.model('Leave', LeaveSchema);