const { Router } = require('express');

const listaDesejoController = require('../controllers/listaDesejoController');

const routes = Router();

routes.get('/listadesejo/grupo/:idGrupo/byParticipante/:idParticipante', listaDesejoController.getById);
routes.post('/listadesejo', listaDesejoController.create);
routes.post('/listadesejo/addItem', listaDesejoController.addItem);
routes.delete('/listadesejo/grupo/:idGrupo/participante/:idParticipante/item/:item', listaDesejoController.delItem);


module.exports = routes;