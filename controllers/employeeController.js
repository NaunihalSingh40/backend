const Employee = require('../models/employee.model');


exports.addEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully', data: newEmployee });
  } catch (error) {
    res.status(400).json({ message: 'Error adding employee', error: error.message });
  }
};