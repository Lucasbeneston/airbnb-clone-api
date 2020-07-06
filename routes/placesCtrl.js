const model = require('../models');

const Places = model.Place;

const City = model.City;

module.exports = {
  addPlaces: async (req, res) => {
    const place = {
      cityId: req.body.cityId,
      user: req.body.user,
      name: req.body.name,
      description: req.body.description,
      rooms: req.body.rooms,
      bathrooms: req.body.bathrooms,
      maxGuests: req.body.maxGuests,
      priceByNight: req.body.priceByNight,
    };

    for (const key in place) {
      if (place[key] == null || place[key] === '') {
        return res.status(400).json({ error: `Le champ ${key} n'est pas renseigné` });
      }
    }

    const matchCities = await City.findByPk(req.body.cityId, {
      attributes: ['name'],
    });
    console.log('Console.log de matchCities : ', matchCities);
    console.log('Console.log de dataValues : ', matchCities.name);

    const newPlaces = await Places.create({
      cityId: req.body.cityId,
      user: req.body.user,
      name: req.body.name,
      description: req.body.description,
      rooms: req.body.rooms,
      bathrooms: req.body.bathrooms,
      maxGuests: req.body.maxGuests,
      priceByNight: req.body.priceByNight,
    });
    return res.status(201).json({
      id: newPlaces.id,
      city: matchCities.name,
      name: newPlaces.name,
      description: newPlaces.description,
      rooms: newPlaces.rooms,
      bathrooms: newPlaces.bathrooms,
      maxGuests: newPlaces.maxGuests,
      priceByNight: newPlaces.priceByNight,
    });
  },
};
