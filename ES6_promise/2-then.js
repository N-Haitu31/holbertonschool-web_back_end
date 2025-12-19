export default function handleResponseFromAPI(promise) {
    // On retourne la promise modifiée (chaînée)
    return promise
        .then(() => {
            // 1. Quand la Promise réussit (resolve)
            // On retourne l'objet demandé
            return { status: 200, body: 'success' };
        })
        .catch(() => {
            // 2. Quand la Promise échoue (reject)
            // On retourne un objet Error vide
            return new Error();
        })
        .finally(() => {
            // 3. "For every resolution" (Pour chaque dénouement)
            // Note : Dans cet exercice, on demande de logger ce message 
            // quel que soit le résultat final du succès.
            console.log('Got a response from the API');
    });
}
