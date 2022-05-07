const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId,ref:"user",required:true},
  nome: { type: String, required: true },
  url:  { type: String, required: true },
  });
  
  const rNmCharacters = mongoose.model('rmCharacter', characterSchema);
  
  module.exports = rNmCharacters;  
