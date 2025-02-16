const TeamModel = require('../Model/TeamModel');

const CreateTeamService = async (req) => {
    try{
        let reqBody = req.body;
        let result = await TeamModel.create(reqBody);
        return {status: "success", message: "Team created successfully", data: result};
    }catch(e){
        return {status: "fail", message: "Error in CreateTeamService"};
    }
}


const GetTeamService = async (req) => {
    try{
        let result = await TeamModel.find();
        return {status: "success", message: "Team fetched successfully", data: result};
    }catch(e){
        return {status: "fail", message: "Error in GetTeamService"};
    }
}

const UpdateTeamService = async (req) => {
    try{
        let id = req.params.id;
        let reqBody = req.body;
        let result = await TeamModel.updateOne({_id: id}, reqBody);
        return {status: "success", message: "Team updated successfully", data: result};
    }catch(e){
        return {status: "fail", message: "Error in UpdateTeamService"};
    }
}


const DeleteTeamService = async (req) => {
    try{
        let id = req.params.id;
        let result = await TeamModel.deleteOne({_id: id});
        return {status: "success", message: "Team deleted successfully", data: result};
    }catch(e){
        return {status: "fail", message: "Error in DeleteTeamService"};
    }
}


module.exports = {
    CreateTeamService,
    GetTeamService,
    UpdateTeamService,
    DeleteTeamService
};