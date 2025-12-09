// Déclaration de la classe HolbertonClass AVANT son utilisation
// -> dans ton code initial, les instances class2019/class2020 étaient créées
//    avant que la classe ne soit déclarée, ce qui pose problème en ES6 modules.
export class HolbertonClass {
  constructor(year, location) {
    // On stocke les paramètres dans des propriétés "underscore"
    this._year = year;
    this._location = location;
  }

  // Getter pour _year (lecture seule depuis l'extérieur)
  get year() {
    return this._year;
  }

  // Getter pour _location
  get location() {
    return this._location;
  }
}

// Classe représentant un étudiant Holberton
export class StudentHolberton {
  // On ajoute le 3ᵉ paramètre holbertonClass dans le constructeur
  // -> dans le code initial il manquait, donc this._holbertonClass ne recevait rien.
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass; // on assigne bien le paramètre ici
  }

  // Getter pratique pour le nom complet
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter pour la classe Holberton de l'étudiant
  // -> dans le code initial, il faisait "return this.holbertonClass;"
  //    ce qui rappelait le getter lui‑même (récursion infinie).
  //    On doit renvoyer la propriété interne _holbertonClass.
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Description complète d'un étudiant (nom + année + lieu)
  // -> le code initial utilisait "self" qui n'existe pas ici
  //    et accédait mal aux propriétés.
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - `
      + `${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    // On utilise this._holbertonClass.year et .location,
    // qui eux-mêmes viennent des getters de HolbertonClass.
  }
}

// Création des objets de classe APRÈS la définition de HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Création des étudiants en passant bien la classe correspondante
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Tableau exporté par défaut
// -> dans l’énoncé, on importe "listOfStudents" comme valeur par défaut.
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
