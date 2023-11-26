// https://wordle-e6nc.onrender.com/

/*
LÓGICA
======
- ⚠️ el código tiene que ser reutilizable y modulable
- ⚠️ tiene que funcionar con cualquier longitud de palabra

antes de empezar el juego:
- tengo una lista de palabras posibles
- tengo una longitud posible para la palabra
- tengo un número de intentos posibles

al cargar el juego:
- ya sabes qué palabra tienes que adivinar
- se pinta el tablero
    - ⚠️ pintar el tablero y pintar la palabra son 2 funciones distintas
- estás en tu intento número 0

al jugar:
- introduces una palabra (al hacer intro)
    - VALIDACIÓN - mirar si la palabra tiene el número de letras indicado (5)
    - si NO tiene el número de letras indicado: mostrar un alert de que la palabra tiene que tener 5 letras (o el número que sea)

    - si tiene el número correcto:

    - recorres cada una de sus letras y las escribes una a una en los span.letter que corresponde
        - el word lo consigues por el numero de intentos que has utilizado (has usado 0 intentos, es el word 0, osea el primero)
        - el span.letter lo haces con un foreach
        
        - tienes que saber si la letra no está en la palabra, si está en otra posición o está en la posición correcta
        - hacer un IF que mire si la posición coincide con la letra exactamente
            - si es que sí la pinta de verde, el resto lo devuelve en un array (usar un map, un filter u otra funcion cb)
            - si es que no, otro IF: 

mis opciones:

+ con un foreach coges la letra DE LA PALABRA A ADIVINAR y vas recorriendo las letras QUE QUEDAN POR MIRAR de la palabra insertada por la persona. Había una función de los string y de los array que permitía saber el primer índice de la aparición de una letra. solo necesito ese primer índice.

+ hacer un array en el que cada una de las letras de la palabra escrita por el usuario es un objeto. tiene los datos { letter: "xyz", position: "exact" | "other" | "none" }
el position es un dataset. primero pongo las exactas, luego las que no. las que son other son las más difíciles, así que esas las miro las últimas.


     - sumas uno al número de intentos utilizado

momentos que terminan con el juego:
- si el número de intentos utilizados iguala al número de intentos posibles
- si se adivina la palabra, independientemente de la ronda


*/

// DOM
// ===
// const wordInputElement = document.getElementById('word-input');

// FUNCIONES
// =========

// EVENTOS
// =======
// wordInputElement.addEventListener();
