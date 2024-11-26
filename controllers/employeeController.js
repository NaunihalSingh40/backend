const Employee = require('../models/employee.model');


exports.addEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully', data: newEmployee });
  } catch (error) {
    console.log(error)
    res.status(405).json({ message: 'Error adding employee', error: error.message });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    // Fetch all employees from the database
    const employees = await Employee.find();

    if (!employees) {
      return res.status(404).json({ message: 'No employees found' });
    }

    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};