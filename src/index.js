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
//import serverNgrok from './Utils/index.js';
import mongoServer from './Config/db.config.js'
import dotenv from 'dotenv'
dotenv.config()

export default function server(){
//cors
var corsOptions = {
  origin: "http://localhost:3000"
};
// connect ke database mongoDB
 mongoServer()

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
app.listen(process.env.PORT,()=> console.log('Server Running at port:',process.env.PORT));

}