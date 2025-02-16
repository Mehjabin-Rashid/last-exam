const {CreateTeamService, DeleteTeamService, GetTeamService, UpdateTeamService} = require ("../Service/TeamService.js");


const CreateTeamController = async (req, res) => {
    let result = await CreateTeamService(req);
    return res.json(result);
}


const GetTeamController = async (req, res) => {
    let result = await GetTeamService(req);
    return res.json(result);
}


const UpdateTeamController = async (req, res) => {
    let result = await UpdateTeamService(req);
    return res.json(result);
}


const DeleteTeamController = async (req, res) => {
    let result = await DeleteTeamService(req);
    return res.json(result);
}
