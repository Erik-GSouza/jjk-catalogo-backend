const mongoose = require('mongoose');


const personagemSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true,
    trim: true
  },

  descricao: {
    type: String,
    trim: true,
    default: ''
  }

}, {
  collection: 'personagens'
});

module.exports = mongoose.model('Personagem', personagemSchema);