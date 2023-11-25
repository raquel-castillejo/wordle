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
- introduces una palabra (hacer intro)
    - mirar si la palabra tiene el número de letras indicado (5)
    - si NO tiene el número de letras indicado: mostrar un alert de que la palabra tiene que tener 5 letras (o el número que sea)

    - si tiene el número correcto:
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
