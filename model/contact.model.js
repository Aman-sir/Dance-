
const mongoose = require("mongoose");

let Contactschema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    goal: String,
    date: { type: String, default: Date }
}, { timestamps: true });

const Contact = mongoose.models?.Contact || mongoose.model('Contact', Contactschema);

module.exports = Contact;
