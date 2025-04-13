
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const Guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(Guess);
  })
}

function validateGuess(Guess){
  if(isNaN(Guess)){
    alert('Please enter a valid number')
  } else if(Guess < 1){
    alert('Please enter a number more than 1')
  } else if(Guess > 100){
    alert('Please enter a number less than 100')
  } else{
    prevGuess.push(Guess)
    if(numGuess === 11){
      displayGuess(Guess)
      displayMessage(`Game Over. random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(Guess)
      checkGuess(Guess)
    }
  }
}

function checkGuess(Guess){
  if( Guess === randomNumber){
    displayMessage(`Congrats, you guessed it right`)
    endGame()
  } else if(Guess < randomNumber){
    displayMessage(`Number is too low`)
  } else if(Guess > randomNumber){
    displayMessage(`Number is too high`)
  }

}

function displayGuess(Guess){
  userInput.value = '';
  guessSlot.innerHTML += `${Guess}, `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value ='';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame= false;
  newGame();
}

function newGame(){
const newGamebutton = document.querySelector('#newGame');
newGamebutton.addEventListener('click', function(e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame = true;
})

}
