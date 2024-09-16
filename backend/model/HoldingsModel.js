const mongoose = require('mongoose');  // Import full mongoose module
const { HoldingsSchema } = require('../schemas/HoldingSchema');  // Import the schema

// Register the model
const HoldingsModel = mongoose.model('holding', HoldingsSchema);

module.exports = { HoldingsModel };
