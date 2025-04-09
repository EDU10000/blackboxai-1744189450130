const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  interests: {
    type: [String],
    default: []
  },
  volunteerHours: {
    type: Number,
    default: 0
  },
  badges: [{
    name: String,
    earned: Boolean,
    dateEarned: Date
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
