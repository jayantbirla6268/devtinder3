 

  const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    emailid:{
        type:String,
        required:true,
        
        match:/.+@.+\..+/,
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
