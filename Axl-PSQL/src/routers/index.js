const express = require('express'); 

const personsRouter = require('./usuarios.routers');
const platilloRouter = require('./platillo.routers');
const categoriaRouter = require('./categoria.routers');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/usuarios', personsRouter);
  router.use('/platillo', platilloRouter);
  router.use('/categoria', categoriaRouter);
}

module.exports = routerApi;