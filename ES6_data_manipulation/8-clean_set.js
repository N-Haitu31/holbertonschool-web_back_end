export default function cleanSet(set, startString) {
    // Si set n'est pas un Set, ou si startString n'est pas une string non vide,
    // on retourne directement une chaîne vide.
    if (!(set instanceof Set) || typeof startString !== 'string' || startString === '')
    {
    return '';
    }
    // Initialiser un tableau pour stocker les parties filtrées
    const resultArray = [];

    // Parcourir chaque valeur du set
    for (const item of set) {
        // Vérifier si item commence par startString
        // On s'assure que l'élément est une chaîne et qu'il commence par startString
        if (typeof item === 'string' && item.startsWith(startString)) {
            // Ajouter à la liste uniquement la partie après startString
            // slice : Cela extrait la partie de la chaîne qui vient après startString.
            resultArray.push(item.slice(startString.length));
        }
    }
    // Retourner le résultat sous forme de chaîne, séparée par un tiret
    return resultArray.join('-');
    // join : Ceci combine tous les éléments de resultArray en une seule chaîne, séparée par des tirets.
}
