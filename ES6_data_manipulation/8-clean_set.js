export default function cleanSet(set, startString) {
    // Initialiser un tableau pour stocker les parties filtrées
    const resultArray = [];

    // Parcourir chaque valeur du set
    for (const item of set) {
        // Vérifier si item commence par startString
        // startsWith : Cette méthode de chaîne vérifie si la valeur commence par startString.
        if (item.startsWith(startString) && startString !=='') {
            // Ajouter à la liste uniquement la partie après startString
            // slice : Cela extrait la partie de la chaîne qui vient après startString.
            resultArray.push(item.slice(startString.length));
        }
    }
    // Retourner le résultat sous forme de chaîne, séparée par un tiret
    return resultArray.join('-');
    // join : Ceci combine tous les éléments de resultArray en une seule chaîne, séparée par des tirets.
}
