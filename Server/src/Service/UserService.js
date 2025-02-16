const UserModel = require('../Model/UserModel');
const {EncodeToken} = require('../Utility/tokenUtility.js');

const UserRegistrationService = async (req) => {
    try{
        let reqBody = req.body;
        let result = await UserModel.create(reqBody);
        if(result){
            let token = EncodeToken(result);
            return {status: "success", message: "Registration successful", token: token};
        }
    }catch(e){
        return {status: "fail", message: "Registration failed"};
    }
}


const UserLogInService = async (req, res) => {
    try{
        const user = await UserModel.findOne({email: req.body.email});
        if(!user)return({message: 'Invalid credentials'});

        const isMatch = await user.matchPassword(password);
        if (!isMatch)({ message: 'Invalid credentials' });
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return({ message: 'Login successful', user });
    }catch(e){
        return {status: "fail", message: "LogIn failed"};
    }
}


const UserLogOutService = async (req) => {
    try{
        res.clearCookie('token');
        return {status: "success", message: "LogOut successful"};
    }catch(e){
        return {status: "fail", message: "LogOut failed"};
    }
}


module.exports = {
    UserRegistrationService, 
    UserLogInService, 
    UserLogOutService
};