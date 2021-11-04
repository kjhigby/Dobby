let clickedCard = null;
let preventClick = false;
let combosFound = 0;

const colors = [
  'pink',
  'yellow',
  'red',
  'cyan',
  'blue',
  'teal',
  'orange',
  'green'
];

const cards = [...document.querySelectorAll('.card')];
for (let color of colors) {
  const cardAIndex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1);
  cardA.className += ` ${color}`;
  cardA.setAttribute('data-color', color);

  const cardBIndex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
  cardB.className += ` ${color}`;
  cardB.setAttribute('data-color', color);
}

function onCardClicked(e) {
  const target = e.currentTarget;

  if (
    preventClick ||
    target === clickedCard ||
    target.className.includes('done')
  ) {
    return;
  }

  target.className = target.className
    .replace('color-hidden', '')
    .trim();
  target.className += ' done';

  if (!clickedCard) {
    // if we haven't clicked a card, keep track of the card, display it's color
    clickedCard = target;
  } else if (clickedCard) {
    // if we have already clicked a card, check if the new card matches the old card color
    if (
      clickedCard.getAttribute('data-color') !==
      target.getAttribute('data-color')
    ) {
      preventClick = true;
      setTimeout(() => {
        clickedCard.className =
          clickedCard.className.replace('done', '').trim() +
          ' color-hidden';
        target.className =
          target.className.replace('done', '').trim() +
          ' color-hidden';
        clickedCard = null;
        preventClick = false;
      }, 500);
    } else {
      combosFound++;
      clickedCard = null;
      if (combosFound === 8) {
        alert('YOU WIN');
      }
    }
  }
}

/*Timer*/
window.onload = function () {

  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {

    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }

    buttonStop.onclick = function() {
       clearInterval(Interval);
  }


  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }



  function startTimer () {
    tens++;

    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

  }

}
