// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');

// Routes
module.exports = {
  register: (req, res) => {
    // Params
    const { firstName, lastName, email, password, role } = req.body;

    if (
      email == null ||
      firstName == null ||
      lastName == null ||
      password == null ||
      role == null
    ) {
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
              role,
            })
              .then((newUsers) => {
                return res.status(201).json({
                  role: newUsers.role,
                  userId: newUsers.id,
                  firstName: newUsers.firstName,
                  lastName: newUsers.lastName,
                  email: newUsers.email,
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
      return res.status(400).json({ error: 'Veuillez remplir tous les champs' });
    }

    // A FAIRE : vérifier mail (regex) & la longueur du password
    models.Users.findOne({
      where: { email },
    })
      .then((userFound) => {
        if (userFound) {
          bcrypt.compare(password, userFound.password, (errBycrypt, resBycrypt) => {
            if (resBycrypt) {
              return res.status(200).json({
                token: jwtUtils.generateTokenForUser(userFound),
                user: {
                  role: userFound.role,
                  firstName: userFound.firstName,
                  lastName: userFound.lastName,
                  email: userFound.email,
                },
              });
            } else {
              return res.status(403).json({ error: "Votre mot de passe n'est pas correct" });
            }
          });
        } else {
          return res.status(404).json({ error: "L'utilisateur est introuvable" });
        }
      })
      .catch((err) => {
        return res.status(500).json({ error: "Impossible de vérifier l'user" });
      });
  },
};
