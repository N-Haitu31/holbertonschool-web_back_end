export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Si la classe courante n'est pas Building,
    // vérifier que evacuationWarningMessage est bien implémentée
    if (this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
