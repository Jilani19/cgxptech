import mongoose from 'mongoose';

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    trim: true
  },
  name: {
    type: String,
    trim: true,
    default: ''
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Subscriber', SubscriberSchema);
