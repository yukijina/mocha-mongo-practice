const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a user schema
const UserSchema = new Schema({
  name: String
})

// Create a user model
const User = mongoose.model('user', UserSchema);

module.exports = User;



