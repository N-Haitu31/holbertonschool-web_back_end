export default function uploadPhoto(fileName) {
  // On retourne une promise rejetée contenant un nouvel objet Error
  return Promise.reject(
    new Error(`${fileName} cannot be processed`)
  );
}
