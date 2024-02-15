
function handelKyboardFunctionButton(event){
  
  const playerPressed = event.key;
  console.log(playerPressed);
  // IF Pleyer Press Escape Game is over
  if (playerPressed === 'Escape') {
    theGameIsOver();
  }
  // current alphabate 
  const curentAlphabate = document.getElementById('current-alphabate');
  const currentText  = curentAlphabate.innerText;
  const newAlphabate = currentText.toLowerCase()


  if (playerPressed === newAlphabate) {
    remobeBackgroundColor(newAlphabate);
    continoueGame();

    const currentScore = getElementFunction('current-score');
    const currentScoreVal = currentScore + 1;
    getTextFunction('current-score', currentScoreVal);

  }
  else{
   
    const currentLife = getElementFunction('current-life');
    const ubdateLife = currentLife - 1;

    getTextFunction('current-life',ubdateLife);

    if (ubdateLife === 0) {
      theGameIsOver()
    };
  }
  
};

document.addEventListener('keyup',handelKyboardFunctionButton)


// Continoue Game
function continoueGame(){
  const alphabate  = createARandomAlphabate();

  const currentAlphabate = document.getElementById('current-alphabate');
  currentAlphabate.innerText = alphabate;  

  setBackgroundColor(alphabate);
}

// Play Function
function play(){

  // hide everying
  elementIdAdd('home');
  elementIdRemove('play_ground');
  elementIdAdd('score')

  continoueGame();

  // set element 
  getTextFunction('current-life',5);
  getTextFunction('current-score',0);
}

function theGameIsOver(){
  elementIdAdd('play_ground');
  elementIdRemove('score');

  // score
  const lastScore = getElementFunction('current-score');
  getTextFunction('last-score',lastScore);

  const currentAlphabate = getElementTextById('current-alphabate')
  remobeBackgroundColor(currentAlphabate);
}