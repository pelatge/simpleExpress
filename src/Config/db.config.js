import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {Initial} from './../Utils/index.js'
dotenv.config()

// connect ke database mongoDB
export default function mongoServer(){

mongoose.connect(process.env.MONGODB_URL,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
Initial();
 
}
