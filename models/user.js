const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true, 
    },
    userType:{
        type:String,
        required:true,
        enum:["Admin","Sub Admin","Employee"], 
    }
});

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;