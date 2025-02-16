import axios from 'axios';
import erroe from 'eslint-plugin-react/lib/util/error.js';

const baseURL = 'http://localhost:5024/api';

class APIRequest {

    // User API Requests
    async UserRegistration(reqBody) {
        let result = await axios.post(`${baseURL}/user/UserRegistration`, reqBody, { withCredentials: true});

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

}

/*
     async UserLogin(reqBody) {
    let result = await axios.post(`${baseURL}/user/Login`, reqBody, { withCredentials: true });

    if (result.data.status === "Success") {
        SuccessMessage(result.data.message)
        return true
    }
    else {
        ErrorMessage(result.data.message)
        return false
    }
}

    async LogoutUser() {
    let result = await axios.get(`${baseURL}/user/Logout`, { withCredentials: true });

    if (result.data.status === "Success") {
        SuccessMessage(result.data.message)
        return true
    }
    else {
        ErrorMessage(result.data.message)
        return false
    }
}


  // Blog API Requests
    async CreateBlog(reqBody) {
    let result = await axios.post(`${baseURL}/blog/CreateBlog`, reqBody, { withCredentials: true });

    if (result.data.status === "Success") {
        SuccessMessage(result.data.message)
        return true
    }
    else {
        ErrorMessage(result.data.message)
        return false
    }
}

     async GetBlog() {
    let result = await axios.get(`${baseURL}/blog/GetBlog`);

    if (result.data.status === "Success") {
        return result.data.data
    }else{
        ErrorMessage(result.data.message)
        return false;
    }
}

    async UpdateBlog(reqBody) {
    try{
        let result = await axios.put(`${baseURL}/blog/UpdateBlog`, reqBody, { withCredentials: true });

        if (result.data.status === "Success") {
            SuccessMessage(result.data.message)
            return true
        }else {
            ErrorMessage(result.data.message)
            return false
        }
    }catch(e){
        ErrorMessage("Something went wrong while updating the blog.");
        console.error("Update Blog API Error:", error);
        return false;
    }
}

    async DeleteBlog(reqBody) {
        let IsConfirm = await DeleteAlert()
        if (IsConfirm){
        let result = await axios.delete(`${baseURL}/DeleteBlog/`+ id)
            console.log(result)
            if (result.data.status === "Success"){
                return result
            }
            else{
                ErrorMessage(result.data.message)
                return false
            }

        }
}

    // Service API Requests
    async CreateBDServices(reqBody) {
    let result = await axios.post(`${baseURL}/service/CreateService`, reqBody, { withCredentials: true });

    if (result.data.status === "Success") {
        SuccessMessage(result.data.message)
        return true
    }
    else {
        ErrorMessage(result.data.message)
        return false
    }
}

    async GetBDServices() {
    let result = await axios.get(`${baseURL}/service/GetService`);

    if (result.data.status === "Success") {
        return result.data.data
    }else{
        ErrorMessage(result.data.message)
        return false;
    }
}

    async UpdateBDService(reqBody) {
    try{
        let result = await axios.put(`${baseURL}/service/UpdateService`, reqBody, { withCredentials: true });

        if (result.data.status === "Success") {
            SuccessMessage(result.data.message)
            return true
        }else {
            ErrorMessage(result.data.message)
            return false
        }
    }catch(e){
        ErrorMessage("Something went wrong while updating the service.");
        console.error("Update Service API Error:", error);
        return false;
    }
}

    async DeleteBDService(reqBody) {
        let IsConfirm = await DeleteAlert()
        if (IsConfirm){
        let result = await axios.delete(`${baseURL}/DeleteService/`+ id)
            console.log(result)
            if (result.data.status === "Success"){
                return result
            }
            else{
                ErrorMessage(result.data.message)
                return false
            }

        }
}

    // Team API Requests
    async CreateTeamService(reqBody) {
    let result = await axios.post(`${baseURL}/team/CreateTeam`, reqBody, { withCredentials: true });

    if (result.data.status === "Success") {
        SuccessMessage(result.data.message)
        return true
    }
    else {
        ErrorMessage(result.data.message)
        return false
    }
}

    async GetTeamService() {
    let result = await axios.get(`${baseURL}/team/GetTeam`);

    if (result.data.status === "Success") {
        return result.data.data
    }else{
        ErrorMessage(result.data.message)
        return false;
    }
}

    async UpdateTeamService(reqBody) {
    try{
        let result = await axios.put(`${baseURL}/team/UpdateTeam`, reqBody, { withCredentials: true });

        if (result.data.status === "Success") {
            SuccessMessage(result.data.message)
            return true
        }else{
            ErrorMessage(result.data.message)
            return false
        }
    }catch(e){
        ErrorMessage("Something went wrong while updating the team.");
        console.error("Update Team API Error:", error);
        return false;
    }
}

    async DeleteTeamService(reqBody) {
        let IsConfirm = await DeleteAlert()
        if (IsConfirm){
        let result = await axios.delete(`${baseURL}/DeleteTeam/`+ id)
            console.log(result)
            if (result.data.status === "Success"){
                return result
            }
            else{
                ErrorMessage(result.data.message)
                return false
            }

        }
}


export const { UserRegistration, UserLogin, LogoutUser, CreateBlog, GetBlog, UpdateBlog, DeleteBlog, CreateService, GetService, UpdateService, DeleteService, CreateTeamService, GetTeamService, UpdateTeamService, DeleteTeamService } = new APIRequest();
*/