const express = require('express');
const router = express.Router();
const BlogController = require('../Controllers/BlogController');
const ServiceController = require('../Controllers/serviceController');
const UserController = require('../Controllers/userController');
const TeamController = require('../Controllers/teamController');
const AuthController = require('../Controllers/authController');

// Users

router.post("/UserRegistration",UserController.UserRegistration);
router.post("/UserLogIn",UserController.UserLogIn);
router.get("/UserLogOut",AuthController,UserController.UserLogOut);

// Blog

router.post("/CreateBlog",BlogController.createBlog);
router.get("/GetBlog",BlogController.GtBlog);
router.put("/UpdateBlog",BlogController.UpdateBlog);
router.delete("/DeleteBlog",BlogController.DeleteBlog);

// Service

router.post("/CreateBDServices",ServiceController.CreateBDServices);
router.get("GetBDServices",ServiceController.GetBDService);
router.put("/UpdateBDService",ServiceController.UpdateBDService);
router.delete("/DeleteBDService",ServiceController.DeleteBDService);

// Team

router.post("/CreateTeamService",TeamController.CreateTeamService);
router.get("/GetTeamService",TeamController.GetTeamService);
router.put("/UpdateTeamService",TeamController.UpdateTeamService);
router.delete("/DeleteTeamService",TeamController.DeleteTeamService);

module.exports = router;