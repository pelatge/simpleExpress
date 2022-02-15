import dbConfig "../config/db.common.js";
import  mongoose "mongoose";
import 
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db;