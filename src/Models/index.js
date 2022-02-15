import dbConfig  from "../config/db.common.js";
import  mongoose from "mongoose";
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db;