const express = require('express');
const router = express.Router(); 
const platilloController = require('../controllers/platillo.controller');

router
    .get('/lista', platilloController.get )
    .get('/:id', platilloController.getById )
    .post('/', platilloController.create )
    .put('/:id', platilloController.update )
    .delete('/:id', platilloController._delete );

module.exports = router;
