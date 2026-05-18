import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cgxptech';
    console.log(`Connecting to MongoDB...`);
    const conn = await mongoose.connect(connStr);
    console.log(`MongoDB Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    // We won't exit the process immediately so that developers without a running local MongoDB 
    // can still start the server and view the static fallback values without complete application crashes.
  }
};

export default connectDB;
