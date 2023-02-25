const { Router } = require('express');
const participanteController = require('../controllers/participanteController');

const routes = Router();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Participante Amigo Secreto.",
      description: "API Participante Information",
      contact: {
        name: "Prof. H1 Developer"
      },
      servers: ["http://localhost:3333"]
    }
  },
  apis: ["./src/routes/routes.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));  

/**
 * @swagger
 * definitions:
 *   participante:
 *     properties:
 *       _id  :
 *           type: string
 *       nome:
 *         type: string
 *       cpf:
 *         type: string
 *       email:
 *         type: string     
 *       senha:
 *         type: string
 */
 /**
 * @swagger
 * /participante/{id}:
 *   get:
 *     tags:
 *       - participante
 *     description: Retorna os dados de um participante
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Participante id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Participante encontrado
 *         schema:
 *           $ref: '#/definitions/participante'
 */
routes.get('/participante/:id', participanteController.getById);
/**
* @swagger
 * /participante:
 *   post:
 *     tags:
 *       - participante
 *     description: Cria um novo participante
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: participante
 *         description: participante object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/participante'
 *     responses:
 *       200:
 *         description: Participante criado
 */
routes.post('/participante', participanteController.create);
/**
* @swagger 
* /participante:
*   put:
*     tags:
*       - participante
*     description: edita novo participante
*     produces:
*       - application/json
*     parameters:
*       - name: participante
*         description: participante object
*         in: body
*         required: true
*         schema:
*           $ref: '#/definitions/participante'
*     responses:
*       200:
*         description: Participante atualizado
*/
routes.put('/participante', participanteController.edit);
/**
 * @swagger
* /participante/{id}:
*   delete:
*     tags:
*       - participante
*     description: remove um participante
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: Participante id
*         in: path
*         required: true
*         type: string
*     responses:
*       200:
*         description: Participante removido
*/
routes.delete('/participante/:id', participanteController.delete);

module.exports = routes;