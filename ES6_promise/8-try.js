export default function divideFunction(numerator, denominator) {
  // 1. On vérifie la condition critique avant de faire le calcul
  if (denominator === 0) {
    // 2. On lance une nouvelle erreur avec le message précis demandé
    throw new Error('cannot divide by 0');
  }

  // 3. Si tout va bien, on retourne le résultat du calcul
  return numerator / denominator;
}
