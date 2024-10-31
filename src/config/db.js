const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Test')
        .then(() => {
            console.log("connected to mongodb")
        })
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDb;