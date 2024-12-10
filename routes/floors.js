const express = require("express");
const router = express.Router();
const floorController = require("../controllers/floorController");

router.get("/", floorController.getFloors);
router.get("/building/:buildingId", floorController.getFloorsByBuilding);

module.exports = router;
