const express = require("express");

const router = express.Router();

const notificationController = require("../controllers/notification_controller");

router.get("/", notificationController.home);

module.exports = router;