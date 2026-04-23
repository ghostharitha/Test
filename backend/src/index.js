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
app.use(cors())

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;


mongoose.connect(MONGO_URL);

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log(`Mongodb connect successfully`);
    
});

app.use("/api/v1/users" , userRoutes);

app.listen(PORT, () => {
    console.log(`Servet is rumming on port ${PORT}`);
    
});