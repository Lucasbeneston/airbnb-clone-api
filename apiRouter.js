// Imports
const express = require('express');
const usersCtrl = require('./routes/usersCtrl');
// const { register } = require('./routes/usersCtrl');

// Router
exports.router = (function () {
  const apiRouter = express.Router();

  // Users routes
  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login/').post(usersCtrl.login);

  // Route principale /api
  apiRouter.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  // Récupérer register
  apiRouter.route('/users/register/').get(usersCtrl.register);

  // Gestion des cas d'erreur
  apiRouter.get('*', (req, res) => {
    res.status(404).send('erreurs 404');
  });

  return apiRouter;
})();
