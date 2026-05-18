import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: ''
  },
  linkedIn: {
    type: String,
    default: ''
  }
});

export default mongoose.model('Team', TeamSchema);
