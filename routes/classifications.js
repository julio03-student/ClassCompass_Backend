const express = require("express");
const router = express.Router();
const classificationController = require("../controllers/classificationController");

router.get("/", classificationController.getClassifications);

module.exports = router;
