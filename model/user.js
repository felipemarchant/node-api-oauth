const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

//Create Schema
const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{ 
        type: String,
        required: true
    }
});
//Create Model

const User = mongoose.model('user',userSchema);

//Export Schema
module.exports = User;