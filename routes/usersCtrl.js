// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require("../models");

// Routes 

module.exports = {
    register: function (req, res) {
        // Params
        let firstName = req.body.firstName;
        let lastName = req.bdy.lastName;
        let email = req.body.email;
        let password = req.body.password;

        if (email == null || firstName == null || lastName == null || password == null) {
            return res.status(400).json({ 'error': 'paramètre manquant' });
        }
        //verification pseudo length, firtName,lastName,email, password

        models.User.findOne({
            attributes: ['email'],
            where: { email: email }
        })
            .then(function (userFound) {

                if (!userFound) {

                    bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                        var newUser = models.Users.create({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: bcryptedPassword
                        })
                            .then(function (newUsers) {
                                return res.status(201).json({
                                    'userId': newUser.id
                                })
                            })
                            .catch(function (err) {
                                return res.status(500).json({ 'error': 'Ne peut pas ajouter d\'utilisateur' });
                            });

                    });


                } else {
                    return res.status(409).json({ 'error': 'l\'utilisateur n\'exsiste pas' });
                }

            })
            .catch(function (err) {
                return res.status(500).json({ error: 'Impossible de vérifier l\'utilisateur' })
            })
    },
    login: function (req, res) {

    },

}