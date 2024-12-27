const WordConteiner = document.getElementById("WordConteiner") ;
const startButton = document.getElementById("startButton");
const usedLettersElements = document.getElementById("usedLetters");

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2D') 
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const bodyparts = [
  [4,2,1,1],
  [4,3,1,2],
  [3,5,1,1],
  [5,5,1,1],
  [3,3,1,1],
  [5,3,1,1]
]

let selecterwords;
let usedLetters;
let mistakes;
let hits; 

const startGame = () => {
  usedLetters = []
  mistakes = 0;
  hits = 0;
  WordConteiner.innerHTML = '';
  usedLettersElements.innerHTML = '';
  startButton.style.display = 'none';
};




startButton,addEventListener('click', startGame);

