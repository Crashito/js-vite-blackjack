
/**
 * Esta función permite tomar una carta
 * @param {Array<string>} deck Es un arreglo de strings
 * @returns {string} Regresa un string con una carta sacada del deck y remueve dicha carta del deck
 */

export const pedirCarta = (deck) => {

    if ( !deck ||  deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}