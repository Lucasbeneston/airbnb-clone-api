// Imports
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const models = require('../models');

// Routes
module.exports = {
  register: (req, res) => {
    // Params
    const { firstName, lastName, email, password } = req.body;

    if (email == null || firstName == null || lastName == null || password == null) {
      return res.status(400).json({ error: 'paramètre manquant' });
    }
    // Verification pseudo length, firtName,lastName,email, password

    models.Users.findOne({
      attributes: ['email'],
      where: { email: email },
    })
      .then((userFound) => {
        if (!userFound) {
          bcrypt.hash(password, 5, function (err, bcryptedPassword) {
            var newUser = models.Users.create({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: bcryptedPassword,
            })
              .then(function (newUsers) {
                return res.status(201).json({
                  userId: newUsers.id,
                });
              })
              .catch(function (err) {
                return res.status(500).json({ error: "Ne peut pas ajouter d'utilisateur" });
              });
          });
        } else {
          return res.status(409).json({ error: 'Déjà loggé' });
        }
      })
      .catch((err) => {
        return res.status(500).json({ error: "Impossible de vérifier l'utilisateur" });
      });
  },

  login: (req, res) => {},
};
