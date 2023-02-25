const Lista = require('../models/listDesejo');

module.exports = {
  async create(listDesejo) {
    try {
      let { _idParticipante, _idGrupo, itensDesejo } = listDesejo;
      const novaLista = await Lista.create({
        _idParticipante,
        _idGrupo,
        itensDesejo
      });
      return novaLista;
    } catch (err) {
      console.log("Erro " + err);
      return null;
    }
  },
  async edit(listDesejo) {
    try {
      let { _id, _idParticipante, _idGrupo, itensDesejo } = listDesejo;
      const listaAtualizada = await Lista.updateOne(
        { _id },
        { $set: { _idParticipante, _idGrupo, itensDesejo } }
      );
      return listaAtualizada;
    } catch (err) {
      console.log("Erro " + err);
      return null;
    }
  },
  async getById(_id) {
    try {
      const lista = await Lista.findById(_id);
      return lista;
    } catch (err) {
      console.log("Erro " + err);
      return null;
    }
  },
  async delete(_id) {
    try {
      const result = await Lista.deleteOne({ _id: _id });
      return result;
    } catch (err) {
      console.log("Erro " + err);
      return null;
    }
  },
  async addItem(_id, item) {
    try {
      const lista = await Lista.findById(_id);
      lista.itensDesejo.push(item);
      const listaAtualizada = await lista.save();
      return listaAtualizada;
    } catch (err) {
      console.log("Erro " + err);
      return null;
    }
  }
};
