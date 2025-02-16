const BlogModel = require('../Model/BlogModel');

const CreateBlogService = async (req)=>{
    try{
        let reqBody = req.body;
        let result = await BlogModel.create(reqBody);
        return {status:"success", message: "Blog Created Successfully", data: result}
    }catch(e){
        return {status:"fail", message: "Error in CreateBlogService"}
    }
}


const GetBlogService = async (req)=>{
    try{
        let result = await BlogModel.find();
        return {status:"success", message: "Get Blog Successfully", data: result}
    }catch(e){
        return {status:"fail", message: "Error in GetBlogService"}
    }
}


const UpdateBlogService = async (req)=>{
    try{
        let id = req.params.id;
        let reqBody = req.body;
        let result = await BlogModel.updateOne({_id: id}, reqBody);
        return {status:"success", message: "Blog Updated Successfully", data: result}
        }catch(e){
        return {status:"fail", message: "Error in UpdateBlogService"}
        }
}


const DeleteBlogService = async (req)=>{
    try{
        let id = req.params.id;
        let result = await BlogModel.deleteOne({_id: id});
        return {status:"success", message: "Blog Deleted Successfully", data: result}
    }catch(e){
        return {status:"fail", message: "Error in DeleteBlogService"}
    }
}


module.exports = {
    CreateBlogService,
    GetBlogService,
    UpdateBlogService,
    DeleteBlogService
}