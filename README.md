Mettre en marche le fichier:

- npm i
- pour les linux changer dans le fichier config.js : "port": "3306"
- pour les macs changer dans le fichier config.js : "port": "8889"

<!-- JOUR 3  -->

npm install jsonwebtoken --save
npm install bcryt --save

- mettre en place BodyParser dans server.js
- créer un fichier userCtrl.js
- créer un fichier apiRouter.js dans lequel on ajoute nos routes (register, login en post)
- require l'apiRouter dans server.js et l'assigner
- dans userCtrl.js on récupère les paramètres envoyer dans la requêtes et on ajoute une méthode findOne pour vérifier si l'utilisateur. On y crée un bcrypt.hash pour hasher le mot de passe de l'utilisateur

<!-- JOUR 2  -->

Notion : Fixture / seeds (jeu de données test, pas obligatoire)

A faire :

- Installer uuid > Générer des id aléatoirement
- User.create
- .env

- Sequelize
  Ressources :
  https://sequelize.org/master/manual/getting-started.html > Sequelize
  https://sequelize.org/master/manual/migrations.html > Sequelize-cli
  https://www.npmjs.com/package/sequelize-cli > Utiliser les commandes "sequelize init" et "sequelize db:create" ...
  https://github.com/PierreGambarotto/tuto_sequelize

- Astuces
  npx sequelize > addiche toutes les commandes

<!-- JOUR 1  -->

Notion : Eslint, Prettier, Morgan(logger), sequelize, fixture / seeds (jeu de données test)

- Configuration du serveur node + express

- Configuration ESLint

- Configuration du routeur pricipale

Ressources :
https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a
