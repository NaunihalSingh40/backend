const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    companyName: {
      type: String,
    },
    clientId: {
      type: String,

    },
    contactPerson: {
      type: String,

    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
