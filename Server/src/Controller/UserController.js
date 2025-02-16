const {UserRegistrationService, UserLogInService, UserLogOutService} = require ("../Service/UsersService.js");



// Registration Service
const UserRegistration = async (req, res) => {
  const result = await UserRegistrationService(req);
  return res.json(result);
}


// LogIn service
const UserLogIn = async (req, res) => {
  const result = await UserLogInService(req, res);
  return res.json(result)
}


// LogOut service
const UserLogOut = async (req, res) => {
  const result = await UserLogOutService(req, res);
  return res.json(result);
}
