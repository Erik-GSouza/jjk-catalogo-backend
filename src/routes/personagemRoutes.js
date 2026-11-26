const express = require('express');
const controller = require('../controllers/personagemController');

const router = express.Router();


router.post('/', controller.cadastrar);
router.get('/', controller.listar);
router.put('/:id', controller.editar);
router.delete('/:id', controller.excluir);

module.exports = router;