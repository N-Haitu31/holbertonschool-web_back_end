export default function getResponseFromAPI() {
    // Retourne une nouvelle promesse.
    return new Promise((resolve, reject) => {
        // Lorsque l'opération réussit, json -> resolve est appelé avec 'OK'.
        // Cela signifie que la promesse a été remplie avec succès.
        resolve('OK'); // Ici, nous simulons un succès en renvoyant 'OK'.
    });
}
