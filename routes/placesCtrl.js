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

    // const matchCityPlace = await Places.findOne({
    //   include: [
    //     {
    //       model: City,
    //       where: {
    //         id: req.body.cityId,
    //       },
    //     },
    //   ],
    // });

    const matchCityPlace = await Places.findOne({
      where: { id: req.body.cityId },
      include: City,
    });
    console.log('Console.log de matchCityPlace : ', matchCityPlace);
    console.log('Console.log de dataValues :', matchCityPlace.City.dataValues.name);

    for (const key in place) {
      if (place[key] == null || place[key] === '') {
        return res.status(400).json({ error: `Le champ ${key} n'est pas renseigné` });
      }
    }

    if (matchCityPlace) {
      await Places.create({
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
        cityId: matchCityPlace.City.dataValues.name,
        user: matchCityPlace.user,
        name: matchCityPlace.name,
        description: matchCityPlace.description,
        rooms: matchCityPlace.rooms,
        bathrooms: matchCityPlace.bathrooms,
        maxGuests: matchCityPlace.maxGuests,
        priceByNight: matchCityPlace.priceByNight,
      });
    }
  },

  //   getInfoPlace: async (req, res) => {
  //     const { id } = req.body;

  //     const findPlace = await Cities.findOne({
  //       attributes: [id],
  //       where: { id },
  //     });
  //     console.log(findPlace);

  //     return res.status(201).json({ message: "Voici les informations de l'appartement" });
  //   },
};
