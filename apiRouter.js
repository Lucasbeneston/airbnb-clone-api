// Imports
const express = require('express');
const usersCtrl = require('./routes/usersCtrl');

// Router
exports.router = (() => {
  const apiRouter = express.Router();

  // Users routes
  apiRouter.route('/signup').post(usersCtrl.register);
  apiRouter.route('/login').post(usersCtrl.login);

  return apiRouter;
})();
