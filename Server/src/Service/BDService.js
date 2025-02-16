const BDService = require('../Model/BDService');

const CreateBDService = async (req) => {
    try{
        let reqBody = req.body;
        let result = await BDService.create(reqBody);
        return {status: "success", message: "BDService created", data: result}
    }catch(e){
        return {status: "fail", message: "BDService not created", error: e}
    }
}


const GetBDService = async (req) => {
    try{
        let result = await BDService.find();
        return {status: "success", message: "BDService found", data: result}
    }catch(e){
        return {status: "fail", message: "BDService not found", error: e}
    }
}


const UpdateBDService = async (req) => {
    try{
        let id = req.params.id;
        let reqBody = req.body;
        let result = await BDService.updateOne({_id: id}, reqBody);
        return {status: "success", message: "BDService updated", data: result}
    }catch(e){
        return {status: "fail", message: "BDService not updated", error: e}
    }
}


const DeleteBDService = async (req) => {
    try{
        let id = req.params.id;
        let result = await BDService.deleteOne({_id: id});
        return {status: "success", message: "BDService deleted", data: result}
    }catch(e){
        return {status: "fail", message: "BDService not deleted", error: e}
    }
}


module.exports = {
    CreateBDService,
    GetBDService,
    UpdateBDService,
    DeleteBDService
}