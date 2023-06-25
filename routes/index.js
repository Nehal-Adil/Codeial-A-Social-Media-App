//this will not create new instance, the same instance from entry point will be passed
const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

// for home page
router.get("/", homeController.home);

//any request comes with users it requires users service
router.use("/users", require("./users"));

router.use("/posts", require("./posts"));

//for any further routes, access from here
//router.use('/routerName', require('./routerFile'));

module.exports = router;
