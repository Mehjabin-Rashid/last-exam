const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email:{type:String, unique: true, required:true, lowercase:true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    phone: {type:String},
    password: {type:String}
}, 
{timestamps: true, versionKey: false})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;
