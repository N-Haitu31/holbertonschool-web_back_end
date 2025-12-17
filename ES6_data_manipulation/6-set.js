export default function setFromArray(array) {
    if (!Array.isArray(array)) {
        return new setFromArray(); // Retourne un Set vide si l'argument n'est pas un tableau
    }
    return new Set(array); // Crée et retourne un Set à partir du tableau
}
