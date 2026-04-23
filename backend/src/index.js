import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/UserRout.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
app.use(cors({
  origin: [
    "https://testuser-theta.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000"
  ],
  credentials: true
}))

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


mongoose.connect(MONGO_URL).catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
});

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log(`MongoDB connected successfully`);
    
});

connection.on('error', (error) => {
    console.error("MongoDB error:", error.message);
});

app.use("/api/v1/users" , userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});