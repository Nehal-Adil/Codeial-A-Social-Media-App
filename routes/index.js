//this will not create new instance, the same instance from entry point will be passed
const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

router.get("/", homeController.home);

module.exports = router;
