const Client = require('../models/clients.model');

const addClient = async (req, res) => {
  try {
    const { companyName, clientId, contactPerson, email, mobile, status } = req.body;

    const newClient = new Client({
      companyName,
      clientId,
      contactPerson,
      email,
      mobile,
      status,
    });

    await newClient.save();

    res.status(201).json({
      success: true,
      message: 'Client added successfully',
      client: newClient,
    });
  } catch (error) {
    console.error('Error adding client:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Could not add client.',
      error: error.message,
    });
  }
};

const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();

    res.status(200).json({
      success: true,
      message: 'Clients retrieved successfully',
      clients: clients,
    });
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Could not retrieve clients.',
      error: error.message,
    });
  }
};

module.exports = {
  addClient,
  getAllClients,
};
