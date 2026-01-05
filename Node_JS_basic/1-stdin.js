// Affiche une invite demandant à l'utilisateur son nom
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Définit l'encodage de l'entrée standard sur 'utf8' pour traiter les données comme une chaîne de caractères
process.stdin.setEncoding('utf8');

// Écoute l'événement 'data' qui se déclenche chaque fois que l'utilisateur entre une donnée
process.stdin.on('data', (data) => {
  // Transforme la donnée reçue en chaîne de caractères et supprime les espaces autour
  const name = data.toString().trim();

  // Vérifie si le nom n'est pas une chaîne vide
  if (name.length > 0) {
    // Affiche le nom de l'utilisateur s'il est fourni
    console.log(`Your name is: ${name}`);
  } else {
    // Si l'entrée est vide, affiche un message sans nom
    console.log('Your name is:');
  }
});

// Écoute l'événement 'end' qui se déclenche lorsque l'entrée standard est fermée
process.stdin.on('end', () => {
  // Affiche un message indiquant que le programme se ferme
  console.log('This important software is now closing');
});
