const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8889,
});

// Vérification de la connection
sequelize
  .authenticate()
  .then(() => {
    console.log('connection avec la bd réuissite');
  })
  .catch((err) => {
    console.log(`Error de connection avec la bd ${err}`);
  });
