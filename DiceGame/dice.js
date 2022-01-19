function displayroll(dice, value) {

  valueselector = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6'];

  dots = document.querySelectorAll("#" + dice + " .dot");
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("whitebg");
    dots[i].classList.add("bluebg");
    // console.log(dots[i]);
  }

  dots = document.querySelectorAll("#" + dice + " ." + valueselector[value - 1]);
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bluebg");
    dots[i].classList.add("whitebg");
    // console.log(dots[i]);
  }
}

function startgame() {
  var scorep1, scorep2;

  scorep1 = Math.floor(1 + Math.random() * 6);
  scorep2 = scorep1;
  while (scorep1 == scorep2) {
    scorep2 = Math.floor(1 + Math.random() * 6);
  }
  console.log("Player1: ", scorep1, " Player2: ", scorep2);
  displayroll("dice1", scorep1);
  displayroll("dice2", scorep2);
  if (scorep1 > scorep2) {
    document.querySelector(".player1wins").classList.remove("hidden");
    document.querySelector(".player2wins").classList.add("hidden");

  } else {
    document.querySelector(".player2wins").classList.remove("hidden");
    document.querySelector(".player1wins").classList.add("hidden");
  }
}
