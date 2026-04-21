const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema(
  {
    nome: {type: String, required: true},
    tipo: {type: String },
    raca: {type: String },
    poder: {type: String },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Hero', heroSchema);