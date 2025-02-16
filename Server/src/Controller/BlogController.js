const { CreateBlogService, GetBlogService, UpdateBlogService, DeleteBlogService } = require('../Service/BlogService');

const CreateBlog = async (req, res) => {
    let result = await CreateBlogService(req);
    return res.json(result);
}


const GetBlog = async (req, res) => {
    let result = await GetBlogService(req);
    return res.json(result);
}


const UpdateBlog = async (req, res) => {
    let result = await UpdateBlogService(req);
    return res.json(result);
}


const DeleteBlog = async (req, res) => {
    let result = await deleteBlogService(req);
    return res.json(result);
}