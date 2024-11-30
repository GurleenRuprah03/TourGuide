const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: { type: String, required: true },
   email: { type: String, unique: true, required: true },
   password: { type: String, required: true },
   isGuide: { type: Boolean, default: false }, // Distinguish between customers and guides
   bio: String, // Optional for guides
   experience: Number, // Optional for guides
});

module.exports = mongoose.model('User', userSchema);
