import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MONGO SETUP

const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => async () => {
//     app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
//   })
//   .catch((error) => console.log(`${error} did not connect`));

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

connectDB();

app.listen(PORT, () => console.log( `Server running on port: ${PORT}`));