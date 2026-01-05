// Importation du module http pour créer le serveur
const http = require('http');

// Création du serveur HTTP
const app = http.createServer((req, res) => {
  // Définit le code de statut de la réponse (200 OK)
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Envoie le message "Hello Holberton School!" dans le corps de la réponse
  res.end('Hello Holberton School!\n');
});

// Le serveur écoute sur le port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/'); // Affiche un message indiquant que le serveur fonctionne
});

// Exporter l'app pour permettre d'utiliser le même serveur dans d'autres fichiers, si nécessaire
module.exports = app;
