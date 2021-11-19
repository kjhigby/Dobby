/*Catch a fish*/
const squares = document.querySelectorAll('.square')
const fish = document.querySelector('.fish');
const timeLeft = document.querySelector('#time-left');
const score= document.querySelector('#score');

let result = 0
let currentTime = 60
let timerId= null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('fish')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('fish')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
            result++
            console.log(result)
            score.textContent = result
            hitPosition = null
        }
    })
})

function movefish() {
    timerId = setInterval(randomSquare, 750)
}

movefish()

//timer
var timeleft = 60;

var setTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(timerId);
    document.getElementById("count").innerHTML = "You caught " + result + " fish in 60 seconds!";


  } else {
    document.getElementById("count").innerHTML = timeleft + " seconds remaining";

  }
  timeleft -= 1;
  }, 1000);
