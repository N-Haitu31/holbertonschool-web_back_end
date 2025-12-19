export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // 1. On essaie d'exécuter la fonction passée en argument
    const result = mathFunction();
    // Si ça réussit, on ajoute le résultat à la queue
    queue.push(result);
  } catch (err) {
    // 2. Si une erreur est lancée (throw), on l'attrape ici
    // On ajoute le message d'erreur à la queue sous forme de chaîne
    queue.push(String(err));
  } finally {
    // 3. Dans tous les cas, on ajoute ce message final
    queue.push('Guardrail was processed');
  }

  // On retourne le tableau final
  return queue;
}
