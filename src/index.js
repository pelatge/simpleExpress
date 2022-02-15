import path from 'path'
//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import route from "./Routes/index.js";
//import cors
import cors from "cors";
// construct express function
const app = express();
import dotenv from 'dotenv'
dotenv.config()
//cors
var corsOptions = {
  origin: "http://localhost:3000"
};
// connect ke database mongoDB
 mongoose.connect(process.env.URL,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
 
// middleware 
app.use(cors(corsOptions));
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to simpleExpress application." });
});
// route product
app.use('/product',route);
 
// listening to port
app.listen('3000',()=> console.log('Server Running at port: 3000'));


