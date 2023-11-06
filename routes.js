const express = require("express");
const router = express.Router();

const resumeController = require("./controllers/resume.controller");
const messageController = require("./controllers/message.controller");

router.post("/upload-resume", resumeController.uploadResume);
router.get("/fetch-resume", resumeController.fetchResume);

router.post("/send-message", messageController.sendMessage);
router.get("/view-messages", messageController.viewMessages);

module.exports = router;
