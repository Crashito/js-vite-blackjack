
/**
 * Asignar valor a la carta
 * @param {string} carta Requiere del resultado de la funcion pedirCarta(deck)
 * @returns {number} Regresa un entero con el valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}