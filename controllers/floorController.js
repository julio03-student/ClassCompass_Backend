const floors = require("../models/floorModel");

const getFloors = (req, res) => {
  res.json(floors);
};

const getFloorsByBuilding = (req, res) => {
  const { buildingId } = req.params;
  const result = floors.filter((f) => f.buildingId === parseInt(buildingId));
  res.json(result);
};

module.exports = { getFloors, getFloorsByBuilding };
