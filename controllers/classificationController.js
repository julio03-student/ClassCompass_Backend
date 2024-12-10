const classifications = require("../models/classificationModel");

const getClassifications = (req, res) => {
  res.json(classifications);
};

module.exports = { getClassifications };
