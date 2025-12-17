export default function updateStudentGradeByCity(students, city, newGrades) {
    // Vérifie si l'argument 'students' est bien un tableau
    if (!Array.isArray(students)) {
        return []; // Si ce n'est pas un tableau, retourne un tableau vide
    }
    // Filtre les étudiants qui vivent dans la ville donnée
    return students
        .filter((student) => student.location === city) // Filtre par ville
        .map((student) => {
            // Pour chaque étudiant, crée un nouvel objet
            const gradeObj = newGrades.find((grade) => grade.studentId === student.id); // Cherche la nouvelle note
            return {
                ...student, // Récupère toutes les propriétés de l'étudiant
                grade: gradeObj ? gradeObj.grade : 'N/A' // Si une note existe, prends-la ; sinon, mets 'N/A'
            };
        });
}
