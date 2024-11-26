const Holiday = require('../models/holidays.model');

exports.getHolidays = async (req, res) => {
  try {
    const holidays = await Holiday.find(); 
    res.json(holidays); 
  } catch (error) {
    console.error('Error fetching holidays:', error);
    res.status(500).json({ message: 'Server error. Could not fetch holidays.' });
  }
}

exports.addHoliday = async (req, res) => {
  const { holidayId, name, date, region, description } = req.body;

  if (!name || !date || !region) {
    return res.status(400).json({ message: 'Holiday name, date, and region are required.' });
  }

  try {
    const newHoliday = new Holiday({ holidayId, name, date, region, description });

    await newHoliday.save();
    res.status(201).json(newHoliday);
  } catch (error) {
    console.error('Error creating holiday:', error);
    res.status(500).json({ message: 'Server error. Could not create holiday.' });
  }
}
