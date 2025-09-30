const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
router.post('/', pedidoController.create);
router.get('/', pedidoController.getAll);
router.put('/:id', pedidoController.update);
router.delete('/:id', pedidoController.delete);
router.get('/ingresos-mensuales', pedidoController.getIngresosMensuales);
module.exports = router;
