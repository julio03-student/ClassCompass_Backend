const buildings = require("../models/buildingModel");

const getBuildings = (req, res) => {
  res.json(buildings);
};

const getBuildingById = (req, res) => {
  const building = buildings.find((b) => b.id === parseInt(req.params.id));
  if (building) res.json(building);
  else res.status(404).json({ message: "Edificio no encontrado" });
};

module.exports = { getBuildings, getBuildingById };
