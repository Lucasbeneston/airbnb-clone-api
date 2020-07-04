// Imports
const express = require('express');
const usersCtrl = require('./routes/usersCtrl');
const placesCtrl = require('./routes/placesCtrl');

// Router
exports.router = (() => {
  const apiRouter = express.Router();

  // Users routes
  apiRouter.route('/signup').post(usersCtrl.register);
  apiRouter.route('/signin').post(usersCtrl.login);

  // Places routes
  apiRouter.post('/places', placesCtrl.addPlaces);
  // apiRouter.get('/places', placesCtrl.getInfoPlace);

  return apiRouter;
})();
