// Affiche un message demandant le nom de l'utilisateur
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Définit l'encodage d'entrée d'input sur 'utf8' pour traiter les données comme une chaîne de caractères
process.stdin.setEncoding('utf8');

// Écoute l'événement 'data' qui se déclenche lorsque l'utilisateur entre des données
process.stdin.on('data', (data) => {
  // Transforme les données reçues en chaîne de caractères et retire les espaces superflus
  const name = data.toString().trim();

  // Vérifie si le nom n'est pas vide
  if (name.length > 0) {
    // Affiche le nom de l'utilisateur
    console.log(`Your name is: ${name}`);
  } else {
    // Si le nom est vide, réaffiche un message sans nom
    console.log('Your name is:');
  }
});

// Quand l'entrée standard est fermée (ex: echo "John" | node 1-stdin.js)
// Cela se produit lorsqu'il n'y a plus de données à lire, comme à la fin d'un flux
process.stdin.on('end', () => {
  // Affiche un message indiquant que le programme se ferme
  console.log('This important software is now closing');
});
