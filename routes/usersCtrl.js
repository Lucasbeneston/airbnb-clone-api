// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');

// Routes

// Routes
module.exports = {
  register: (req, res) => {
    // Params
    const { firstName, lastName, email, password } = req.body;

    if (email == null || firstName == null || lastName == null || password == null) {
      res.status(400).json({ error: 'Paramètre manquant' });
    }
    // Verification pseudo length, firstName,lastName,email, password

    models.Users.findOne({
      attributes: ['email'],
      where: { email },
    })
      .then((userFound) => {
        if (!userFound) {
          bcrypt.hash(password, 5, (err, bcryptedPassword) => {
            const newUsers = models.Users.create({
              firstName,
              lastName,
              email,
              password: bcryptedPassword,
            })
              .then((newUsers) => {
                return res.status(201).json({
                  userId: newUsers.id,
                  firstName: newUsers.firstName,
                  lastName: newUsers.lastName,
                  email: newUsers.email,
                  password: newUsers.password,
                  // Renvoyer role (string), first_name (string), last_name (string), email (string) et password (string)
                });
              })
              .catch((err) => {
                return res.status(500).json({ error: "Ne peut pas ajouter d'utilisateur" });
              });
          });
        } else {
          res
            .status(409)
            .json({ error: 'Un utilisateur utilisant cette adresse email est déjà enregistré' });
        }
      })
      .catch((err) => {
        return res.status(500).json({ error: "Impossible de vérifier l'utilisateur" });
      });
  },

  login: (req, res) => {
    const { email, password } = req.body;

    if (email == null || password == null) {
      return res.status(400).json({ error: " S'il y a une erreur dans l'input" });
    }

    models.Users.findOne({
      where: { email },
    })
      .then((userFound) => {
        if (userFound) {
          bcrypt.compare(password, userFound.password, (errBycrypt, resBycrypt) => {
            if (resBycrypt) {
              return res.status(200).json({
                userId: userFound.id,
                token: jwtUtils.generateTokenForUser(userFound),
              });
            } else {
              return res.status(403).json({ error: 'invalid password' });
            }
          });
        } else {
          return res.status(404).json({ error: 'user not exsist in DB' });
        }
      })
      .catch(function (err) {
        res.status(500).json({ error: 'cannot fetch user' });
      });
  },
};
