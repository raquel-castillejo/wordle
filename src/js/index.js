// https://wordle-e6nc.onrender.com/

/*
LÓGICA
======
- ⚠️ el código tiene que ser reutilizable y modulable
- ⚠️ tiene que funcionar con cualquier longitud de palabra

✅ antes de empezar el juego:
- ✅ tengo una lista de palabras posibles
- ✅ tengo una longitud posible para la palabra
- ✅ tengo un número de intentos posibles

✅ al cargar el juego:
- ✅ ya sabes qué palabra tienes que adivinar
- ✅ se pinta el tablero
    - ⚠️ pintar el tablero y pintar la palabra son 2 funciones distintas
- ✅ estás en tu intento número 0

al jugar:
- introduces una palabra (al hacer intro)
    - ✅ VALIDACIÓN - mirar si la palabra tiene el número de letras indicado (5)
    - ✅ si NO tiene el número de letras indicado: mostrar un alert de que la palabra tiene que tener 5 letras (o el número que sea)

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

+ luego dependiendo del dataset, le añado una clase

        
- sumas uno al número de intentos utilizado

momentos que terminan con el juego:
- si el número de intentos utilizados iguala al número de intentos posibles
- si se adivina la palabra, independientemente de la ronda


*/

// DOM
// ===
const gameboard = document.getElementById('gameboard');
const wordInputElement = document.getElementById('word-input');

// valores iniciales del juego
const wordLength = 5;
const possibleTries = 5;
const fiveLetterWords = [
	'actas',
	'aguda',
	'algas',
	'animo',
	'apodo',
	'arcos',
	'bajos',
	'balas',
	'barre',
	'besos',
	'botas',
	'cosas',
	'datos',
	'opera'
];
let tryNumber = 0;

// FUNCIONES
// =========

// escoger una palabra aleatoria
const chooseRandomWord = wordsList => {
	const randomIndex = Math.floor(Math.random() * wordsList.length);
	const randomWord = wordsList[randomIndex];

	return randomWord;
};
const wordToGuess = chooseRandomWord(fiveLetterWords);
console.log('WORD TO GUESS: ' + wordToGuess);

// imprimir el tablero de juego
const printGame = (numberOfLetters, numberOfTries) => {
	const fragment = document.createDocumentFragment();

	// creación de las filas para las palabras
	for (let j = 0; j < numberOfTries; j++) {
		const wordRow = document.createElement('div');
		wordRow.classList.add('word');

		// creación de las celdas para las letras
		for (let i = 0; i < numberOfLetters; i++) {
			const letterCell = document.createElement('span');
			letterCell.classList.add('letter');
			wordRow.append(letterCell);
		}

		fragment.append(wordRow);
	}

	gameboard.append(fragment);
};
printGame(wordLength, possibleTries);

// validar la palabra
const validateWord = event => {
	if (event.key !== 'Enter') return;
	const wordToValidate = wordInputElement.value;

	if (wordToValidate.length !== wordLength) {
		alert(`La palabra debe tener ${wordLength} letras.`);
		return;
	}

	writeWord(wordToValidate);
};

// comprobar las letras
const checkLetters = wordToCheck => {
	console.log('WORD TO CHECK: ' + wordToCheck);
	console.log('WORD TO GUESS: ' + wordToGuess);

	const wordToCheckDetail = [];
	const wordToCheckArr = [...wordToCheck];

	// bucle para recorrer cada letra de la palabra escrita
	wordToCheckArr.forEach((letter, index) => {
		let positionType;

		// la letra no está
		positionType = 'none';
		console.log(`NONE: ${letter}`);

		// la letra sí está
		if (wordToGuess.includes(letter)) {
			// comprobar que en el resto del código no hay exactitudes
			if (wordToCheck.substring(index + 1).includes(letter)) {
				console.log('comprobar exactitudes');
				console.log(wordToCheck.substring(index + 1));

				const subWordToCheck = wordToCheck.substring(index + 1);
				const subWordToGuess = wordToGuess.substring(index + 1);

				subWordToCheck.forEach((letter, index) => {});
			} else {
				// 1. la letra está en la misma posición
				if (wordToGuess.indexOf(letter) === index) {
					positionType = 'exact';
					console.log(`EXACT: ${letter}`);
				} else {
					// 3. la letra está en otro lugar
					positionType = 'other';
					console.log(`OTHER: ${letter}`);
				}
			}
		}

		const newLetter = {
			letter: wordToCheck.charAt(index),
			position: positionType
		};

		wordToCheckDetail.push(newLetter);
	});

	// writtenWords.push(wordToCheckDetail);
	// console.log(writtenWords);
	return wordToCheckDetail;
};

// escribir una palabra
const writeWord = wordToWrite => {
	const wordToWriteDetail = checkLetters(wordToWrite);
	const gameboardRows = gameboard.children;
	const currentRowCells = gameboardRows[tryNumber].children;

	for (let i = 0; i < wordLength; i++) {
		const letterPosition = wordToWriteDetail[i].position;
		currentRowCells[i].textContent = wordToWriteDetail[i].letter;
		currentRowCells[i].classList.add(`letter--position-${letterPosition}`);
	}

	tryNumber++;
};

// EVENTOS
// =======
wordInputElement.addEventListener('keydown', validateWord);
