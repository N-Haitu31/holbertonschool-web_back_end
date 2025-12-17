export default function getStudentIdsSum(students) {
    if (!Array.isArray(students)) {
        return 0; // Si ce n'est pas un tableau, retourne 0
    }
    // Utilise 'reduce' pour accumuler la somme des identifiants
    // 'sum' est l'accumulateur qui commencera à 0, 'student' est l'élément actuel du tableau
    return students.reduce((sum, student) => {
        return sum + student.id; // Ajoute l'id de l'étudiant actuel à la somme
    }, 0); // 0 est la valeur initiale pour 'sum'
}
