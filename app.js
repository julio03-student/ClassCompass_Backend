const express = require("express");
const cors = require("cors");
const app = express();

const buildingRoutes = require("./routes/buildings");
const floorRoutes = require("./routes/floors");
const classroomRoutes = require("./routes/classrooms");
const classificationRoutes = require("./routes/classifications");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/buildings", buildingRoutes);
app.use("/api/floors", floorRoutes);
app.use("/api/classrooms", classroomRoutes);
app.use("/api/classifications", classificationRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
