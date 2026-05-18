import mongoose from 'mongoose';

const IndustrySchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  tagline: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  heroImage: {
    type: String,
    required: true
  },
  painPoints: {
    type: [String],
    default: []
  },
  solutions: {
    type: [String],
    default: []
  },
  relatedProducts: {
    type: [String],
    default: []
  },
  accentColor: {
    type: String,
    default: '#00C4B4' // Default teal accent color
  }
});

export default mongoose.model('Industry', IndustrySchema);
