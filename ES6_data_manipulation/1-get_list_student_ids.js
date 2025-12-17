export default function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        return []; // Si ce n'est pas un tableau, retourne un tableau vide
    }
    // Si c'est un tableau, utilise map pour retourner les ids
    return students.map(student => student.id);
}
