var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColor;
var userClickedPattern = [];
var gameinprogress = false;
var gamelevel = -1;

function nextSequence() {
  var randomNumber;
  gamelevel++;
  $("h1").text("Level " + gamelevel);
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log("pattern:", gamePattern);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  counter = 0;
  userClickedPattern = [];
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3")
  audio.play();
}

function animatePress(currenColor) {
  $("#" + currenColor).addClass("pressed");
  setTimeout(function(currentColor) {
    $("#" + currenColor).removeClass("pressed");
  }, 100);
}

function checkanswer(counter) {
  if (counter == -1) return;
  if (userClickedPattern[counter] == gamePattern[counter]) {
    console.log("ok");
    if (counter + 1 == gamelevel) {
      console.log("next sequence");
      setTimeout(nextSequence, 1000);
    }
  } else {
    console.log("bad");

    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    playSound("wrong");
    gameinprogress = false;

  }
}


function startgame() {
  if (gameinprogress == false) {
    gameinprogress = true;
    gamelevel = 0;
    counter = 0;
    userClickedPattern = [];
    gamePattern= [];
    nextSequence();
  }
}


// Register click event for all buttons
$(".btn").click(function(event) {
  userChosencolor = event.target.id;
  userClickedPattern.push(userChosencolor);
  playSound(userChosencolor);
  console.log("userclicks: ", userClickedPattern);
  checkanswer(counter);
  counter++;
});

$("body").keypress(startgame);
