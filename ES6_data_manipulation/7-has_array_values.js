export default function hasValuesFromArray (set, array) {
    // Vérifie si tous les éléments de l'array existent dans le set
    // Cela parcourt chaque élément du tableau et teste une condition.
    return array.every(value => set.has(value)); // Vérifie si le Set contient la valeur en question
}
