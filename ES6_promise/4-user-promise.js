export default function signUpUser(firstName, lastName) {
  // On retourne directement une promise résolue contenant l'objet
  return Promise.resolve({
    firstName,
    lastName,
  });
}
