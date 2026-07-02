const express = require("express");
const router = express.Router();
const schedulerController = require("../controllers/schedule_controller");
router.get("/",schedulerController.home);
module.exports = router