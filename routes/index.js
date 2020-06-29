const express = require('express');
const router = express.Router();

// Route principale /api
router.get('/api', (req, res) => {
  res.send('Hello, World!');
});

// Gestion des cas d'erreur
router.get('*', (req, res) => {
  res.status(404).send('erreurs 404');
});

module.exports = router;
