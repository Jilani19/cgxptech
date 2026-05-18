import mongoose from 'mongoose';

const StatSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  value: {
    type: String,
    required: true,
    trim: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Stat', StatSchema);
