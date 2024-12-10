const { getClassroomByName } = require("../controllers/classroomController");

// Simulación de dependencias externas
jest.mock("../models/classroomModel", () => [
  { id: 1, name: "Aula 101", floorId: 1, classificationId: 1 },
  { id: 2, name: "Aula 102", floorId: 1, classificationId: 2 },
]);
jest.mock("../models/classificationModel", () => [
  { id: 1, type: "Teórica" },
  { id: 2, type: "Práctica" },
]);
jest.mock("../models/floorModel", () => [
  { id: 1, name: "Primer piso" },
]);

describe("getClassroomByName", () => {
  it("UC001: Debería devolver el aula con detalles completos", () => {
    const req = { params: { name: "Aula 101" } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    getClassroomByName(req, res);

    expect(res.json).toHaveBeenCalledWith({
      id: 1,
      name: "Aula 101",
      floorId: 1,
      classificationId: 1,
      classificationName: "Teórica",
      floorName: "Primer piso",
    });
  });

  it("UC002: Debería devolver un error 404 si el aula no existe", () => {
    const req = { params: { name: "Aula 999" } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    getClassroomByName(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Aula no encontrada" });
  });
});
