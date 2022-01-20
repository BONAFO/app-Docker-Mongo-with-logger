require('dotenv').config();
const mongoose = require('mongoose');
const userSchema = require('./usuarios.model');

try {
    const conectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/monguillo';
    mongoose.connect(conectionString);
    console.log('Monguillo online!!');
} catch (e) {
    console.log('Monguillo a caido!!');
}

const User = mongoose.model('users', userSchema);


module.exports = {
    mongoose,
    User
};

