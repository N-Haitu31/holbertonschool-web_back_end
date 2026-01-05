// Importation du module 'fs' pour travailler avec le système de fichiers
const fs = require('fs'); // Import le module pour lire les fichiers

// Déclaration de la fonction 'countStudents' qui prend en argument un chemin de fichier (path)
function countStudents(path) {
  let data = ''; // Variable pour stocker le contenu du fichier

  // Tentative de lecture du fichier de manière synchrone
  try {
    // Lecture du fichier et stockage de son contenu dans 'data'
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    // Si une erreur survient (par exemple, si le fichier n'existe pas), une erreur est levée
    throw new Error('Cannot load the database');
  }

  // Séparer le contenu en lignes et filtrer les lignes vides
  const lines = data.split('\n').filter((line) => line.trim() !== ''); // Ignore les lignes vides
  const students = lines.slice(1); // Ignore l'en-tête en prenant toutes les lignes sauf la première

  // Affiche le nombre total d'étudiants
  console.log(`Number of students: ${students.length}`);

  const fields = {}; // Crée un objet pour stocker les étudiants par domaine
  students.forEach((line) => {
    // Récupère le prénom et le domaine en séparant les lignes par des virgules
    const [firstname, , , field] = line.split(','); // extrait le prénom et le domaine
    // Si le domaine n'existe pas encore dans l'objet 'fields', on le crée
    if (!fields[field]) fields[field] = []; // Initialise un tableau pour ce domaine
    fields[field].push(firstname); // Ajoute le prénom à la liste des étudiants de ce domaine
  });

  // Parcourt chaque domaine pour afficher le nombre d'étudiants et leurs noms
  Object.keys(fields).forEach((field) => {
    // Affiche le nombre d'étudiants dans chaque domaine et la liste de leurs noms
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  });
}

// Exporte la fonction 'countStudents' pour qu'elle soit accessible à d'autres modules
module.exports = countStudents;
