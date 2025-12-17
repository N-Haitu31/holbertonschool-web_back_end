export default function getStudentsByLocation(students, city) {
    // Vérifie si l'argument 'students' est bien un tableau
    if (!Array.isArray(students)) {
        return []; // Si ce n'est pas un tableau, retourne un tableau vide
    }
    // Utilise la méthode filter pour créer un nouveau tableau
    // qui contiendra uniquement les étudiants situés dans la ville spécifiée
    return students.filter((element) => element.location === city);
    // `element` est chaque étudiant, et nous vérifions
    // si sa propriété 'location' correspond à la ville donnée.
}
