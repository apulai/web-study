/*jslint esversion: 6 */
/*jshint multistr: true */

const monthnames = ["január", "február", "március", "április", "május", "június",
  "július", "augusztus", "szeptember", "október", "november", "december"
];

function pad(str) {
  paddedstr = "0" + str;
  return (paddedstr);
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

/*
 * modified from http://www.voidware.com/moon_phase.htm
 * month: january is 1 december is 12
 */

function getMoonPhase(year, month, day) {
  var c = e = jd = b = 0;

  if (month < 3) {
    year--;
    month += 12;
  }

  /*++month;*/

  c = 365.25 * year;

  e = 30.6 * month;

  jd = c + e + day - 694039.09; //jd is total days elapsed

  jd /= 29.5305882; //divide by the moon cycle

  b = parseInt(jd); //int(jd) -> b, take integer part of jd

  jd -= b; //subtract integer part to leave fractional part of original jd

  b = Math.round(jd * 8); //scale fraction from 0-8 and round

  if (b >= 8) {
    b = 0; //0 and 8 are the same so turn 8 into 0
  }

  // 0 => New Moon
  // 1 => Waxing Crescent Moon
  // 2 => Quarter Moon
  // 3 => Waxing Gibbous Moon
  // 4 => Full Moon
  // 5 => Waning Gibbous Moon
  // 6 => Last Quarter Moon
  // 7 => Waning Crescent Moon

  return b;
}


// Return a unicode string if it is a notable moonphase today
function appendmoonphase(year, month, day) {
  var x;
  x = getMoonPhase(year, month, day);
  switch (x) {
    /* new moon */
    case 0:
      return '\&\#x1f311;';
      break;

      /*  Quarter moon*/
    case 2:
      return '\&\#x1f31b;';
      break;

      /* Full moon */
    case 4:

      return '\&\#x1f31d;';
      break;

      /* Last quarter */
    case 6:

      return '\&\#x1f31c;';
      break;
  }
  return " ";
}

function add_sunsrise_time(my_year, my_month, my_day, my_tz, my_dst, my_lat, my_lng) {
  var sunrise_time, sunset_time, jd2, jd3;
  var sunrise_time_str, sunset_time_str;
  var rv_str;
  console.log("add_sunsrise_time:", my_year, my_month, my_day, my_tz, my_dst, my_lat, my_lng);
  sunrise_time = calculate_sunrise(my_year, my_month, my_day, my_tz, my_dst, my_lat, my_lng);
  // Get human readable output
  my_juliandate = calcJD(parseInt(my_year), parseInt(my_month), parseInt(my_day));
  //sunrise_time_str = timeStringAMPMDate(sunrise_time, my_juliandate);
  sunrise_time_str = timeString(sunrise_time, my_juliandate).slice(0, -3);

  sunset_time = calculate_sunset(my_year, my_month, my_day, my_tz, my_dst, my_lat, my_lng);
  // Get human readable output
  my_juliandate = calcJD(parseInt(my_year), parseInt(my_month), parseInt(my_day));
  // sunset_time_str = timeStringAMPMDate(sunset_time, my_juliandate);
  sunset_time_str = timeString(sunset_time, my_juliandate).slice(0, -3);

  rv_str = '<div class="suntime">' + sunrise_time_str + ' - ' + sunset_time_str + '</div>';
  return rv_str;
}


function generate_table_head() {
  var table_head = '<div id="yearanddate" class="calendar1stcell">\
      Datum\
    </div>\
    <div class="calendarcell">\
      Apa\
    </div>\
    <div class="calendarcell">\
      Anya\
    </div>\
    <div class="calendarcell">\
      Marci\
    </div>\
    <div class="calendarcell">\
      Gergő\
    </div>';

  document.getElementById("calendarbody").innerHTML = table_head;
}

function generate_rows() {
  var today = new Date();
  var mydate = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0);
  var i = 0;
  var htmlstr = "";
  var cssclass;
  var inputyear, inputmonth;

  // read form date
  inputyear = parseInt(document.getElementById("inputyear").value);
  inputmonth = parseInt(document.getElementById("inputmonth").value) - 1;
  var mydate = new Date(inputyear, inputmonth, 1, 0, 0, 0);


  // Load additional data from the form - might have changed!
  my_lat = parseFloat(document.getElementById("inputlatitude").value);
  my_lng = parseFloat(document.getElementById("inputlongitude").value);

  my_tz = parseInt(document.getElementById("timezone").value);
  my_dst = parseInt(document.getElementById("dst").value);

  generate_table_head();

  // Set the year and month in the header row
  document.getElementById("yearanddate").innerHTML = mydate.getFullYear() + ' ' + monthnames[mydate.getMonth()];

  // Generate the cells for the next 35 days
  for (i = 1; i < 36; i++) {
    if (mydate.getDay() == 6 || mydate.getDay() == 0) {
      cssclass = "calendar1stcell greybackround";
    } else {
      cssclass = "calendar1stcell";
    }
    // Start adding fist cell
    htmlstr = htmlstr + '<div id="day' + i + '" class="' + cssclass + '">' + mydate.getDate();
    // Anppend moonphase to first cell
    htmlstr = htmlstr + ' ' + appendmoonphase(mydate.getFullYear(), mydate.getMonth() + 1, mydate.getDate());
    // append sun_rise and sun_set
    if (mydate.getDay() == 0) {
      htmlstr = htmlstr + add_sunsrise_time(mydate.getFullYear(), mydate.getMonth() + 1, mydate.getDate(), my_tz, my_dst, my_lat, my_lng);
    }

    // close first cell
    htmlstr = htmlstr + '</div>';
    htmlstr = htmlstr + append_empty_cells(mydate);


    // move 1 day
    mydate.setDate(mydate.getDate() + 1);
  }
  document.getElementById("calendarbody").innerHTML = document.getElementById("calendarbody").innerHTML + htmlstr;
}

function setup_page() {
  var today = new Date();

  my_year = parseInt(document.getElementById("inputyear").value);
  my_month = parseInt(document.getElementById("inputmonth").value);
  /*my_day = document.getElementById("inputday").value;*/

  my_lat = parseFloat(document.getElementById("inputlatitude").value);
  my_lng = parseFloat(document.getElementById("inputlongitude").value);

  my_tz = parseInt(document.getElementById("timezone").value);
  my_dst = parseInt(document.getElementById("dst").value);

  console.log("setup_page:", my_year, my_month, "Timezone:", my_tz, " DST: ", my_dst, my_lat, my_lng);

  document.getElementById("inputyear").value = today.getFullYear();
  document.getElementById("inputmonth").value = today.getMonth() + 1;
  generate_rows();
}
