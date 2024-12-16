const express = require('express')
const tenisController = require('../../controllers/tenisController')

const routes = express.Router();

routes.get('/', tenisController.getPartido)

routes.get('/all', tenisController.getPartidos)

routes.get('/finish', tenisController.getPartidosFinalizados)

routes.put('/', tenisController.putPartido)

module.exports = routes
