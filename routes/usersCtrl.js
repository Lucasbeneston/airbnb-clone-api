// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');

// Routes
module.exports = {
  register: async (req, res) => {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    for (const key in user) {
      if (user[key] == null || user[key] === '') {
        return res.status(400).json({ error: `Le champ ${key} n'est pas renseigné` });
      }
    }

    // Faire regEx pour le mail !!!
    const userFound = await models.Users.findOne({
      attributes: ['email'],
      where: { email: user.email },
    });
    try {
      if (!userFound) {
        try {
          bcrypt.hash(user.password, 5, async (err, bcryptedPassword) => {
            const newUsers = await models.Users.create({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: bcryptedPassword,
              role: user.role,
            });

            return res.status(201).json({
              role: newUsers.role,
              userId: newUsers.id,
              firstName: newUsers.firstName,
              lastName: newUsers.lastName,
              email: newUsers.email,
            });
          });
        } catch (error) {
          return res.status(500).json({ error: "Ne peut pas ajouter d'utilisateur" });
        }
      } else {
        return res
          .status(409)
          .json({ error: 'Un utilisateur utilisant cette adresse email est déjà enregistré' });
      }
    } catch (error) {
      return res.status(500).json({ error: "Impossible de vérifier l'utilisateur" });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    if (email == null || password == null) {
      return res.status(400).json({ error: 'Veuillez remplir tous les champs' });
    }

    const userFound = await models.Users.findOne({
      where: { email },
    });
    try {
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
          }
          return res.status(403).json({ error: "Votre mot de passe n'est pas correct" });
        });
      } else {
        return res.status(404).json({ error: "L'utilisateur est introuvable" });
      }
    } catch (error) {
      return res.status(500).json({ error: "Impossible de vérifier l'user" });
    }
  },
};
