const mongoose = require('mongoose');  // Import mongoose
const { Schema } = mongoose;  // Destructure Schema from mongoose

// Define the schema
const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

module.exports = { HoldingsSchema };
