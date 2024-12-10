const express = require("express");
const router = express.Router();
const classroomController = require("../controllers/classroomController");

router.get("/", classroomController.getClassrooms);
router.get("/floor/:floorId", classroomController.getClassroomsByFloor);
router.get("/:name", classroomController.getClassroomByName);

module.exports = router;
