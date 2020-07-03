const models = require('../models');

// Routes
module.exports = {
  addPlace: (req, res) => {
    const user = {
        city: req.body.city,
        user: req.body.user,
        name: req.body.name,
        description: req.body.description,
        rooms: req.body.rooms,
        bathrooms: req.body.bathrooms,
        maxGuests: req.body.maxGuest,
        priceByNight: req.body.priceByNight,
        cityId:req.body.cityId,
    };
  };
};
    // for (const key in user) {
    //   if (user[key] == null || user[key] === '') {
    //     return res.status(400).json({ error: `Le champ ${key} n'est pas renseigné` });
    //   }
    // }