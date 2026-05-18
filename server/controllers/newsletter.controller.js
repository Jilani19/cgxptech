import Subscriber from '../models/Subscriber.js';

export const subscribeNewsletter = async (req, res) => {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email address is required' });
  }

  try {
    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(200).json({ message: 'You are already subscribed to the cGxP Tech Intelligence Newsletter!' });
    }

    const subscriber = new Subscriber({ email, name });
    await subscriber.save();

    res.status(201).json({
      message: 'Subscription successful! Welcome to the cGxP Tech Intelligence Newsletter.',
      subscriber
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing subscription', error: error.message });
  }
};
