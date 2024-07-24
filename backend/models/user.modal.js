// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  designation: { type: String, required: true },
  department: { type: String, required: true },
  state: { type: String },
  district: { type: String },
  taluka: { type: String },
  pinCode: { type: String },
  postingPlace: { type: String },
  zone: { type: String },
  division: { type: String },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String  }, // Add photo field
});

module.exports = mongoose.model('User', UserSchema);
