export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) { // position dans l'intervalle [0, length - 1]
        throw new Error("Position outside range");
    }
    const buffer = new ArrayBuffer(length); // Crée un nouvel ArrayBuffer
    const dataView = new DataView(buffer);   // Crée un DataView pour manipuler le buffer
    dataView.setInt8(position, value); // Écrit la valeur à la position spécifiée
    // valeur de type entier signé sur 8 bits (Int8)

    return dataView;
}
