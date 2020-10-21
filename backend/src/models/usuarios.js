const { Schema, model } = require ('mongoose');

const usuarioSchema = new Schema({
  login : {
    type : String,
    required : true,
  },
  senha : {
    type : String,
    required : true,
  },
  nome : {
    type : String,
    required : true,
  }
}, {
  timestamps: true,
});

module.exports = model('usuario', usuarioSchema);