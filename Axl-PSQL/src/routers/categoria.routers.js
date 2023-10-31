const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoria.controller');

router
    .get('/lista', categoriaController.get )
    .get('/:id', categoriaController.getById )
    .post('/', categoriaController.create )
    .put('/:id', categoriaController.update )
    .delete('/:id', categoriaController._delete );

module.exports = router;