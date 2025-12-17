export default function updateUniqueItems(map) {
    // Vérifiez si l'argument est une Map
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    // Parcourez chaque élément de la Map
    map.forEach((value, key) => {
        if (value === 1) {
            map.set(key, 100); // Met à jour la quantité
        }
    });
}
