const mongoose = require("mongoose");

const candidatoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
      type: String,
      required: true,
  },
  edad: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  fecha_nac:{
    type: Date,
    default: Date.now(),
    required: false
  },
  telefono: {
    type: Number,
    required: true
  },

});

module.exports = mongoose.model('Candidato', candidatoSchema);