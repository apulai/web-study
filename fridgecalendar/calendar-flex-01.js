const monthnames = ["január", "február", "március", "április", "május", "június",
  "július", "augusztus", "szeptember", "október", "november", "december"
];

function pad(str) {
  paddedstr = "0" + str;
  return (paddedstr)
}

function append_empty_cells(date) {
  var htmlstr = '';
  var cssclass;

  if (date.getDay() == 6 || date.getDay() == 0) {
    cssclass = "calendarcell greybackround";
  } else {
    cssclass = "calendarcell";
  }

  htmlstr = '<div class="' + cssclass + '"> </div>\
      <div class="' + cssclass + '"> </div>\
      <div class="' + cssclass + '"> </div>\
      <div class="' + cssclass + '"> </div>';
  return htmlstr;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


// Return a unicode string if it is a notable moonphase today
function appendmoonphase(date) {
  var x;
  x = getRandomInt(1, 28);
  switch (x) {
    case 0:
      return '\&\#x1f31d;';
      break;
    case 6:
      return '\&\#x1f311;';
      break;
    case 12:
      return '\&\#x1f31c;';
      break;
    case 18:
      return '\&\#x1f31b;';
      break;
  }
  return " ";
}

function generate_rows() {
  var today = new Date();
  var mydate = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0);
  var i = 0;
  var htmlstr = "";
  var cssclass;

  // Set the year and month in the header row
  document.getElementById("yearanddate").innerHTML = mydate.getFullYear() + ' ' + monthnames[mydate.getMonth()];

  // Generate the cells for the next 35 days
  for (i = 1; i < 36; i++) {
    // Start generating calendar row and first cell0
    htmlstr = htmlstr + '<div id="row' + i + '" class="calendarrow">';
    if (mydate.getDay() == 6 || mydate.getDay() == 0) {
      cssclass = "calendar1stcell greybackround";
    } else {
      cssclass = "calendar1stcell";
    }
    // Start adding fist cell
     htmlstr =     htmlstr + '<div id="day' + i + '" class="'+cssclass+'">' + mydate.getDate();
    // Anppend moonphase to first cell
    htmlstr = htmlstr + appendmoonphase(mydate);
    // close first cell
    htmlstr = htmlstr + '</div>';
    htmlstr = htmlstr + append_empty_cells(mydate);
    // close row
    htmlstr = htmlstr + '</div>';

    // move 1 day
    mydate.setDate(mydate.getDate() + 1);
  }
  document.getElementById("calendarbody").innerHTML = htmlstr;
}
