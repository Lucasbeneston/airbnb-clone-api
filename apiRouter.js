// Imports
const express = require('express');
const usersCtrl = require('./routes/usersCtrl');
// const placeCtrl = require('./routes/placeCtrl');
// const { register } = require('./routes/usersCtrl');

// Router
exports.router = (function () {
  const apiRouter = express.Router();

  // Users routes
  apiRouter.route('/signup').post(usersCtrl.register);
  apiRouter.route('/signin').post(usersCtrl.login);

  // apiRouter.route('/place').post(placeCtrl.addPlace);

  return apiRouter;
})();
