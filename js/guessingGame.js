/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess=0,
    winningNumber = generateWinningNumber(),
    guessesLeft = 5,
    guessHistory=[];



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
  return Math.floor(Math.random()*99) + 1;

}

// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
  var guess = $('#guessInput');

  playersGuess=parseInt(guess.val());

  //check to see if there's a dupe guess
  if(!checkGuessHistory(guessHistory,guess))
  {
    //new guess!
    guessHistory.push(playersGuess);

    //decrement guess counter
    guessesLeft--;

    //update page with guess List
    $('#guess-list').append("<p>"+guess.val()+"</p>");

    //print guess to log
    console.log("players guess: "+playersGuess);

  }


  //reset text
  //guess.val('Enter a number 1-100');

}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	// add code here
  if(playersGuess == winningNumber)
  {
    //we have a winner!
  }
  else
  {
    //bad guess

  }

}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}

function checkGuessHistory(arr, number)
{
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i] == number)
      return true;
  }

  //no match
  return false;
}


/* **** Event Listeners/Handlers ****  */
