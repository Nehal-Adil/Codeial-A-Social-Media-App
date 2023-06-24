//this will not create new instance, the same instance from entry point will be passed
const express = require("express");

const router = express.Router();

console.log("Router Loaded");

module.exports = router;
