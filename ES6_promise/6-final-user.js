import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // On appelle les deux fonctions et on récupère leurs promises
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Promise.allSettled attend que les deux soient terminées (success ou failure)
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      // On transforme le résultat pour qu'il corresponde exactement à la structure demandée
      return results.map((result) => ({
        status: result.status,
        // Si la promise a réussi, la valeur est dans 'value'
        // Si elle a échoué, l'erreur est dans 'reason'
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }));
    });
}
