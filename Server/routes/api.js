const express = require('express');
const router = express.Router();
const BlogController = require('../Controller/BlogController.js');
const ServiceController = require('../Controller/ServiceController.js');
const UserController = require('../Controller/UserController.js');
const TeamController = require('../Controller/TeamController.js');
const AuthController = require('../Controller/authController.js');

// Users

router.post("/UserRegistration",UserController.UserRegistration);
router.post("/UserLogIn",UserController.UserLogIn);
router.get("/UserLogOut",AuthController,UserController.UserLogOut);

// Blog

router.post("/CreateBlog",BlogController.CreateBlog);
router.get("/GetBlog",BlogController.GetBlog);
router.put("/UpdateBlog",BlogController.UpdateBlog);
router.delete("/DeleteBlog",BlogController.DeleteBlog);

// Service

router.post("/CreateBDServices",ServiceController.CreateBDServices);
router.get("/GetBDServices",ServiceController.GetBDService);
router.put("/UpdateBDService",ServiceController.UpdateBDService);
router.delete("/DeleteBDService",ServiceController.DeleteBDService);

// Team

router.post("/CreateTeamService",TeamController.CreateTeamService);
router.get("/GetTeamService",TeamController.GetTeamService);
router.put("/UpdateTeamService",TeamController.UpdateTeamService);
router.delete("/DeleteTeamService",TeamController.DeleteTeamService);

module.exports = router;