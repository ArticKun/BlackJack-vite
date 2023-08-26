
import _ from 'underscore';


/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta,tiposEspeciales ) => {
    //Si estuvieramos en typescript estas validaciones no se colocarían, pero en JS al ser mas flexible si queremos las colocamos
    if( !tiposDeCarta || tiposDeCarta.length === 0  ) 
            throw new Error('tiposDeCarta es Obligatorio como un array de string');

    if( !tiposEspeciales || tiposEspeciales.length === 0  ) 
            throw new Error('tiposEspeciales es Obligatorio como un array de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}



//Cuando tenemos mas de una exportacion poner export default hace que esta sea por defecto

//Solo se puede tener una exportacion por defecto por archivo

/* export default crearDeck; */