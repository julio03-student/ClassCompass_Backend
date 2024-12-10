const classrooms = require("../models/classroomModel");

const getClassrooms = (req, res) => {
  res.json(classrooms);
};

const getClassroomsByFloor = (req, res) => {
  const { floorId } = req.params;
  const result = classrooms.filter((c) => c.floorId === parseInt(floorId));
  res.json(result);
};

module.exports = { getClassrooms, getClassroomsByFloor };
