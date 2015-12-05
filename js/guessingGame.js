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
  playersGuess=parseInt($('#guessInput').val());
  console.log(winningNumber);
  //check the answer!
  checkGuess();


  //reset text
  //guess.val('Enter a number 1-100');

}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
  var guessProximity = Math.abs(playersGuess-winningNumber);
  var result = "";

  if(playersGuess < winningNumber)
  {
    result+="Your guess is lower ";
  }
  else {
    result+="Your guess is higher ";
  }

  if(guessProximity<=10){
    result+=" and you are within 10 digits!";
  }
  else if(guessProximity>10 && guessProximity<20)
  {
    result+=" and you are within 20 digits!";
  }
  else{
    result+=" and you are more than 20 digits away!";
  }

  return result;
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	// add code here
  if(playersGuess == winningNumber)
  {
    //we have a winner!
    $('#status').text("You win!");

  }
  else
  {
    //bad guess!

    //check to see if there's a dupe guess
    if(!checkGuessHistory(guessHistory,$('#guessInput').val()))
    {
      //new guess!
      guessHistory.push(playersGuess);

      //decrement guess counter
      guessesLeft--;

      //update page with guess List
      $('#guess-list').append("<p>"+$('#guessInput').val()+"</p>");

      //print guess to log
      console.log("players guess: "+playersGuess);

      $('#guess-count').text(guessesLeft + " Guesses Remaining");

      $('#status').text(lowerOrHigher());

    }

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
