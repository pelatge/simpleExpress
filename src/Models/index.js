import mongoose from 'mongoose';
import User from './User.model.js';
import Role from './Role.model.js';

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = User;
db.role = Role;

db.ROLES = ["user", "admin", "moderator"];

export default db;