const mongoose = require('mongoose');

const listaDesejoSchema = new mongoose.Schema({    
    _idParticipante : String,
    _idGrupo        : String,
    itensDesejo : [String]
});

module.exports = mongoose.model('Lista',listaDesejoSchema);