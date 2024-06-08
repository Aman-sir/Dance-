const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    date: { type: String, default: Date }
}, { timestamps: true });

const UserModel = mongoose.models?.UserModel || mongoose.model('User', userSchema);

module.exports = UserModel;