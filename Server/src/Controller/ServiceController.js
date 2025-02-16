const {CreateBDService, GetBDService, UpdateBDService, DeleteBDService} = require ("../Service/BDService.js");

const CreateServiceController = async (req, res) => {
    let result = await CreateBDService(req);
    return res.json(result);
}


const GetServiceController = async (req, res) => {
    let result = await GetBDService(req);
    return res.json(result);
}


const UpdateServiceController = async (req, res) => {
    let result = await UpdateBDService(req);
    return res.json(result);
}


const DeleteServiceController = async (req, res) => {
    let result = await DeleteBDService(req);
    return res.json(result);
}
