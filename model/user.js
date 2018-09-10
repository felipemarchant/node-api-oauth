const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

userSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.password ,salt);
        this.password = passwordHash;
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const User = mongoose.model('user',userSchema);

//Export Schema
module.exports = User;