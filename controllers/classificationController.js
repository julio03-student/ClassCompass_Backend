const classifications = require("../models/classificationModel");

const getClassifications = (req, res) => {
  res.json(classifications);
};

const getClassificationById = (req, res) => {
  const { id } = req.params;
  const classification = classifications.find((c) => c.id === parseInt(id));

  if (classification) {
    res.json(classification);
  } else {
    res.status(404).json({ error: "Clasificación no encontrada" });
  }
}

module.exports = { getClassifications, getClassificationById };
