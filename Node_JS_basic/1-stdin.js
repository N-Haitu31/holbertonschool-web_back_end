// Affiche un message demandant le nom de l'utilisateur
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Écoute l'événement 'data' qui se déclenche chaque fois qu'une donnée est entrée via stdin
process.stdin.on('data', (name) => {
  // Affiche le nom de l'utilisateur directement dans la sortie standard
  // note : 'name' contient les données reçues de l'utilisateur
  process.stdout.write(`Your name is: ${name}`);
});

// Écoute l'événement 'end' qui se déclenche lorsque l'entrée standard est fermée
process.stdin.on('end', () => {
  // Affiche un message indiquant que le programme se ferme
  process.stdout.write('This important software is now closing\n');
});
