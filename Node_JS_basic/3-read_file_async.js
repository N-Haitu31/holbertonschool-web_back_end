// Importation du module 'fs' pour interagir avec le système de fichiers de manière asynchrone
const fs = require('fs').promises; // Utilisation de la version promesse du module fs

// Déclaration de la fonction 'countStudents' qui prend un chemin de fichier en argument
function countStudents(path) {
  // Utilisation de fs.readFile pour lire le fichier de manière asynchrone
  return fs.readFile(path, 'utf8')
    .then((data) => { // Lorsque la lecture est réussie, on reçoit les données
      // Séparer les lignes du fichier et ignorer les lignes vides
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Ignorer la première ligne, qui contient l'en-tête

      // Afficher le nombre total d'étudiants
      console.log(`Number of students: ${students.length}`);

      const fields = {}; // Créer un objet pour stocker les étudiants par domaine

      // Parcourt chaque ligne d'étudiant pour extraire le prénom et le domaine
      students.forEach((line) => {
        const [firstname, , , field] = line.split(','); // Extraire les données pertinentes
        // Si le domaine n'existe pas encore dans l'objet, le créer
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname); // Ajouter le prénom à la liste du domaine
      });

      // Afficher le nombre d'étudiants pour chaque domaine et leurs prénoms
      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
    })
    .catch(() => { // Si une erreur se produit lors de la lecture du fichier
      throw new Error('Cannot load the database'); // Lever une erreur avec un message approprié
    });
}

// Exporter la fonction pour pouvoir l'utiliser dans d'autres modules
module.exports = countStudents;
