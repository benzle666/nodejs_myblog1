const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/myblog1_dev');
        console.log('Connect success!');
    } catch (error) {
        console.log('Connect failed!');
    }
}

module.exports = { connect };
