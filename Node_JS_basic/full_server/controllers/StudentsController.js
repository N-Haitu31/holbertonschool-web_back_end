import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      // Récupérer le chemin du fichier (passé comme argument au serveur)
      const filePath = process.argv[2];
      
      const students = await readDatabase(filePath);
      
      // Trier les fields alphabétiquement (case insensitive)
      const fields = Object.keys(students).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let response = 'This is the list of our students\n';
      
      // Pour chaque field, afficher le nombre d'étudiants et leurs noms
      for (const field of fields) {
        const count = students[field].length;
        const names = students[field].join(', ');
        response += `Number of students in ${field}: ${count}. List: ${names}\n`;
      }

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      // Récupérer le major depuis les paramètres de l'URL
      const { major } = req.params;

      // Vérifier que le major est valide
      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const filePath = process.argv[2];
      const students = await readDatabase(filePath);

      // Afficher les étudiants du major spécifié
      const names = students[major] ? students[major].join(', ') : '';
      res.status(200).send(`List: ${names}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
