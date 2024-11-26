const Leave = require("../models/leaves");

// Add a new leave
const addLeave = async (req, res) => {
    console.log("Incoming request data:", req.body); // Log request data
    try {
      const newLeave = new Leave(req.body);
      const savedLeave = await newLeave.save();
      console.log("Saved leave data:", savedLeave); // Log saved data
      res.status(201).json({
        message: "Leave added successfully",
        leave: savedLeave,
      });
    } catch (error) {
      console.error("Error adding leave:", error); // Log error
      res.status(500).json({
        message: "Error adding leave",
        error: error.message,
      });
    }
  };

// Update an existing leave
const updateLeave = async (req, res) => {
  try {
    const updatedLeave = await Leave.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLeave) {
      return res.status(404).json({ message: "Leave not found" });
    }
    res.status(200).json({
      message: "Leave updated successfully",
      leave: updatedLeave,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating leave",
      error: error.message,
    });
  }
};

// Fetch all leaves
const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching leaves",
      error: error.message,
    });
  }
};

module.exports = {
  addLeave,
  updateLeave,
  getLeaves,
};
