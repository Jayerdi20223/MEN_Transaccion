const express = require("express");
const candidatoSchema = require("../models/candidato");

const router = express.Router();

// create candidato
router.post("/candidatos", (req, res) => {
  const candidato = candidatoSchema(req.body);
  candidato
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all candidatos
router.get("/candidatos", (req, res) => {
  candidatoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a candidato
router.get("/candidatos/:id", (req, res) => {
  const { id } = req.params;
  candidatoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a candidato
router.delete("/candidatos/:id", (req, res) => {
  const { id } = req.params;
  candidatoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a candidato
router.put("/candidatos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellidos, edad, email, fecha_nac, telefono } = req.body;
  candidatoSchema
    .updateOne({ _id: id }, { $set: { nombre, apellidos, edad, email, fecha_nac, telefono } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
