import mongoose from 'mongoose';

const connectDB = async () => {
  const urlDB = process.env.MONGO_URL;

  try {
    const connect = await mongoose.connect(urlDB, {
      useUniFiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;
