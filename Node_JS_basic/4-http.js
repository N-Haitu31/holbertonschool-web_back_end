const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;            // Code HTTP 200 OK
  res.setHeader('Content-Type', 'text/plain'); // Réponse en texte brut
  res.end('Hello Holberton School!');          // Corps de la réponse
});

app.listen(1245);

module.exports = app;
