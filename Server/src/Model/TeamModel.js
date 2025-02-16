const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
    name: {type:String},
    skills: {type:String},
    experience: {type:String},
    img:{type:String},
}, {timestamps: true, versionKey: false})

const TeamModel = mongoose.model("Team", TeamSchema);

module.exports = TeamModel;
