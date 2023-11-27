// https://wordle-e6nc.onrender.com/

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

// imprimir una letra
const printLetter = (letter, position, css) => {
	// tryNumber es el número de intento, equivale a la fila
	const cell = gameboard.children[tryNumber].children[position];
	cell.classList.add(css);
	cell.textContent = letter;
};

// comprobar las letras
const checkLetters = wordToCheck => {
	let wordToGuessCopy = wordToGuess;
	let positionCSS;

	// bucle para pintar las letras en posición exacta
	for (let index = 0; index < wordToGuess.length; index++) {
		const letter = wordToCheck[index];

		if (letter === wordToGuessCopy[index]) {
			positionCSS = 'letter--position-exact';
			wordToGuessCopy = wordToGuessCopy.replace(letter, '_');
			printLetter(letter, index, positionCSS);
		}
	}

	// bucle para pintar las letras en otra posición o letras no incluidas
	for (let index = 0; index < wordToGuess.length; index++) {
		const letter = wordToCheck[index];

		if (wordToGuessCopy.includes(letter)) {
			positionCSS = 'letter--position-other';
			wordToGuessCopy = wordToGuessCopy.replace(letter, '_');
		} else {
			positionCSS = 'letter--position-none';
		}
		printLetter(letter, index, positionCSS);
	}

	tryNumber++;
};

// validar la palabra
const validateWord = event => {
	if (event.key !== 'Enter') return;
	const wordToValidate = wordInputElement.value;

	if (wordToValidate.length !== wordLength) {
		alert(`La palabra debe tener ${wordLength} letras.`);
		return;
	}

	checkLetters(wordToValidate);
	wordInputElement.value = '';
};

// EVENTOS
// =======
wordInputElement.addEventListener('keydown', validateWord);
