// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');

// Routes

module.exports = {
  register(req, res) {
    // Params
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    if (email == null || firstName == null || lastName == null || password == null) {
      return res.status(400).json({ error: 'paramètre manquant' });
    }
    // verification pseudo length, firtName,lastName,email, password

    models.Users.findOne({
      attributes: ['email'],
      where: { email },
    })
      .then(function (userFound) {
        if (!userFound) {
          bcrypt.hash(password, 5, function (err, bcryptedPassword) {
            const newUser = models.Users.create({
              firstName,
              lastName,
              email,
              password: bcryptedPassword,
            })
              .then(function (newUser) {
                return res.status(201).json({
                  userId: newUser.id,
                });
              })
              .catch(function (err) {
                return res.status(500).json({ error: "Ne peut pas ajouter d'utilisateur" });
              });
          });
        } else {
          return res.status(409).json({ error: "l'utilisateur n'existe pas" });
        }
      })
      .catch(function (err) {
        return res.status(500).json({ error: "Impossible de vérifier l'utilisateur" });
      });
  },
  login(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    if (email == null || password == null {
      return res.status(400).json({})
    })
  },
};
