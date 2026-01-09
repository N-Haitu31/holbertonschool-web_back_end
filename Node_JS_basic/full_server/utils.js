import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      // Parser le CSV
      const lines = data.trim().split('\n');
      const students = {};

      // Sauter la première ligne (en-têtes : firstname,lastname,age,field)
      for (let i = 1; i < lines.length; i++) {
        const [firstname, lastname, age, field] = lines[i].split(',');
        
        // Créer un tableau pour chaque field s'il n'existe pas
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }

      resolve(students);
    });
  });
}
