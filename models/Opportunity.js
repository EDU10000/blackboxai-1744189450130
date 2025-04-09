const mongoose = require('mongoose');

const OpportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['environment', 'hunger', 'education', 'animals', 'social']
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  skillsRequired: {
    type: [String],
    default: []
  },
  virtual: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Opportunity', OpportunitySchema);
