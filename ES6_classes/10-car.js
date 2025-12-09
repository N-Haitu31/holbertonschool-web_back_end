export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

  // Symbol.species permet aux sous-classes de personnaliser
  // le "type" utilisé pour créer les nouvelles instances.
  // Ici, par défaut, on renvoie simplement la classe elle‑même.
  static get[Symbol.species]() {
    return this;
  }

  // cloneCar doit créer un NOUVEL objet de la même classe
  // que l'instance courante (this).
  cloneCar() {
    const Ctor = this.constructor[Symbol.species];
    // On crée une nouvelle instance du même constructeur,
    // mais sans recopier les propriétés (le sujet attend
    // des propriétés undefined dans l'exemple).
    return new Ctor();
  }
}
