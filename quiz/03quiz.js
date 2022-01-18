var builtin_questions = "Q1:Mikor kötötték meg a karlócai békét?\n\
A1a:1603\n\
A1b:1686\n\
A1c:1699\n\
A1d:1703\n\
Q2:Ki rohant ki Szigetvár várából?\n\
A2a:Zrinyi Miklós, a nagyapa\n\
A2b:Zrínyi Miklós, az unoka\n\
A2c:Zrínyi Ilona,\n\
A2d:Zrinski Mik\n\
Q3:Mit biztosított a Pragmatica Sanctio?\n\
A3a:Nőági örökösödést (1722)\n\
A3b:Kötelező iskolába járni\n\
A3c:Jobbágyok szabadon költözhetnek\n\
A3c:szabad vallásgyakorlást\n\
Q4:Mikor lépett trónra Mária Terézia?\n\
A4a:1707\n\
A4b:1722\n\
A4c:1740\n\
A4d:1780\n";

var question_ids = [];
var active_question = 0
var number_of_questions = 0;
var seconds_left = 30;

// This will do an XHTTP Request to get the quit file
function load_quiz() {
  var param_url = "03quiz_source.txt";
  var xhttp = new XMLHttpRequest();
  var quiz_lines = "";

  init_quiz(builtin_questions.split("\n"));
  return;

  console.log(window.location.pathname, "Function: load_quiz");

  try {
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        quiz_lines = this.responseText.split("\n");
        console.log("quiz_lines: " + quiz_lines);
        init_quiz(quiz_lines);
      }
    };
    console.log("requesting " + param_url);
    xhttp.open("GET", param_url);
    xhttp.send();
  } catch (e) {
    init_quiz(builtin_questions.split("\n"));
  }

}


// Input: Array of text (Questiond and answer lines which we will convert to html
function init_quiz(lines) {
  var line, id, last_question_id;
  var html_code = "";

  // read all the input lines
  for (i = 0; i < lines.length; i++) {

    line = lines[i].split(":");
    id = line[0];
    text = line[1];
    if (id[0] == 'Q') {
      // This will help associate answare ID's to the last Question ID
      // Important becasue of the html radio box
      last_question_id = id;
      question_ids.push(id);
      number_of_questions = number_of_questions + 1;

      if (html_code != "") html_code = html_code + '\n</div>';
      html_code = html_code + '\n<div id="' + id + '" class="question">';
      html_code = html_code + id + " : " + text + '\n';
    }
    if (id[0] == 'A') {
      html_code = html_code + '\n<p><input type="radio" id="' + id + '" name="' + last_question_id + '">' + text + '</input>';
    }
  }
  html_code = html_code + '\n</div>';
  console.log(html_code);
  document.getElementById('quiz').innerHTML = html_code;
  display_questions();
}

function hide(id) {
  var dom;
  //console.log("hide",id);
  dom = document.getElementById(id);
  if (dom != null)
    dom.style.display = "none";
}

function show(id) {
  var dom;
  //console.log("show",id);
  dom = document.getElementById(id);
  if (dom != null)
    dom.style.display = "block";
}

function display_questions() {
  for (i = 0; i < number_of_questions; i++) {
    if (i == active_question) {
      show(question_ids[i]);
    } else {
      hide(question_ids[i]);
    }
  }
}

// Move up and down in quiz
function move(direction) {
  if (direction == -1 && active_question > 0) active_question -= 1;
  if (direction == 1 && active_question < number_of_questions - 1) active_question += 1;
  // console.log("active_question: " + active_question)
  display_questions();
}


function pad(str) {
  padded_str = "0" + str;
  return (padded_str)
}

function refresh_clock() {
  if (seconds_left > 0) {
    document.getElementById('clock1').innerHTML = "Remaining time: " + seconds_left + " seconds";
    seconds_left -= 1;
  } else {
    if (seconds_left == 0) {
      document.getElementById('clock1').innerHTML = "Times up!";
      seconds_left = -1;
    } else {
      document.getElementById('clock1').innerHTML = "<span>&#8203;</span>";
      seconds_left = 0;
    }
  }
}

function start_countdown_timer() {
  window.setInterval(refresh_clock, 1000);
  console.log("Countdown timer started.");
}
