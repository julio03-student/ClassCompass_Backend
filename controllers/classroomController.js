const classrooms = require("../models/classroomModel");
const classifications = require("../models/classificationModel");
const floors = require("../models/floorModel");

const getClassrooms = (req, res) => {
  res.json(classrooms);
};

const getClassroomsByFloor = (req, res) => {
  const { floorId } = req.params;
  const result = classrooms.filter((c) => c.floorId === parseInt(floorId));
  res.json(result);
};

const getClassroomByName = (req, res) => {
  const { name } = req.params;
  const classroom = classrooms.find((c) => c.name === name);

  if (classroom) {
    const classification = classifications.find((a) => a.id === classroom.classificationId);
    const floor = floors.find((f) => f.id === classroom.floorId);
    res.json({
      ...classroom,
      classificationName: classification ? classification.type : "Clasificación desconocida",
      floorName: floor ? floor.name : "Piso desconocido",
    });
  } else {
    res.status(404).json({ error: "Aula no encontrada" });
  }
};
module.exports = { getClassrooms, getClassroomsByFloor, getClassroomByName };
