//***********************************************************************/
//*	DATA STRUCTURES									*/
//***********************************************************************/

function month(name, numdays, abbr) {
  this.name = name;
  this.numdays = numdays;
  this.abbr = abbr;
}

//*********************************************************************/

function ans(daySave, value) {
  this.daySave = daySave;
  this.value = value;
}

//*********************************************************************/

function city(name, lat, lng, zoneHr) {
  this.name = name;
  this.lat = lat;
  this.lng = lng;
  this.zoneHr = zoneHr;
}

//***********************************************************************/
//*	Data for Selectbox Controls							*/
//***********************************************************************/

function init() {

  console.log("init: Initializing data structures is");
  monthList = new Array(); //	list of months and days for non-leap year
  i = 0;
  monthList[i++] = new month("January", 31, "Jan");
  monthList[i++] = new month("February", 28, "Feb");
  monthList[i++] = new month("March", 31, "Mar");
  monthList[i++] = new month("April", 30, "Apr");
  monthList[i++] = new month("May", 31, "May");
  monthList[i++] = new month("June", 30, "Jun");
  monthList[i++] = new month("July", 31, "Jul");
  monthList[i++] = new month("August", 31, "Aug");
  monthList[i++] = new month("September", 30, "Sep");
  monthList[i++] = new month("October", 31, "Oct");
  monthList[i++] = new month("November", 30, "Nov");
  monthList[i++] = new month("December", 31, "Dec");

  //*********************************************************************/

  //YesNo = new Array(); //Daylight Saving array
  //i = 0;
  //YesNo[i++] = new ans("No", 0);
  //YesNo[i++] = new ans("Yes", 60);

  //*********************************************************************/

  City = new Array();

  j = 0;
  City[j++] = new city("Enter Lat/Long -->", 0, 0, 0);
  City[j++] = new city("", 0, 0, 0);
  City[j++] = new city("US CITIES", 0, 0, 0);
  City[j++] = new city("Albuquerque, NM", 35.0833, 106.65, 7);
  City[j++] = new city("Anchorage, AK", 61.217, 149.90, 9);
  City[j++] = new city("Atlanta, GA", 33.733, 84.383, 5);
  City[j++] = new city("Austin, TX", 30.283, 97.733, 6);
  City[j++] = new city("Birmingham, AL", 33.521, 86.8025, 6);
  City[j++] = new city("Bismarck, ND", 46.817, 100.783, 6);
  City[j++] = new city("Boston, MA", 42.35, 71.05, 5);
  City[j++] = new city("Boulder, CO", 40.125, 105.237, 7);
  City[j++] = new city("Chicago, IL", 41.85, 87.65, 6);
  City[j++] = new city("Dallas, TX", 32.46, 96.47, 6);
  City[j++] = new city("Denver, CO", 39.733, 104.983, 7);
  City[j++] = new city("Detroit, MI", 42.333, 83.05, 5);
  City[j++] = new city("Honolulu, HI", 21.30, 157.85, 10);
  City[j++] = new city("Houston, TX", 29.75, 95.35, 6);
  City[j++] = new city("Indianapolis, IN", 39.767, 86.15, 5);
  City[j++] = new city("Jackson, MS", 32.283, 90.183, 6);
  City[j++] = new city("Kansas City, MO", 39.083, 94.567, 6);
  City[j++] = new city("Los Angeles, CA", 34.05, 118.233, 8);
  City[j++] = new city("Menomonee Falls, WI", 43.11, 88.10, 6);
  City[j++] = new city("Miami, FL", 25.767, 80.183, 5);
  City[j++] = new city("Minneapolis, MN", 44.967, 93.25, 6);
  City[j++] = new city("New Orleans, LA", 29.95, 90.067, 6);
  City[j++] = new city("New York City, NY", 40.7167, 74.0167, 5);
  City[j++] = new city("Oklahoma City, OK", 35.483, 97.533, 6);
  City[j++] = new city("Philadelphia, PA", 39.95, 75.15, 5);
  City[j++] = new city("Phoenix, AZ", 33.433, 112.067, 7);
  City[j++] = new city("Pittsburgh, PA", 40.433, 79.9833, 5);
  City[j++] = new city("Portland, ME", 43.666, 70.283, 5);
  City[j++] = new city("Portland, OR", 45.517, 122.65, 8);
  City[j++] = new city("Raleigh, NC", 35.783, 78.65, 5);
  City[j++] = new city("Richmond, VA", 37.5667, 77.450, 5);
  City[j++] = new city("Saint Louis, MO", 38.6167, 90.1833, 6);
  City[j++] = new city("San Antonio, TX", 29.53, 98.47, 6);
  City[j++] = new city("San Diego, CA", 32.7667, 117.2167, 8);
  City[j++] = new city("San Francisco, CA", 37.7667, 122.4167, 8);
  City[j++] = new city("Seattle, WA", 47.60, 122.3167, 8);
  City[j++] = new city("Washington DC", 38.8833, 77.0333, 5);
  City[j++] = new city("", 0, 0, 0);
  City[j++] = new city("WORLD CITIES", 0, 0, 0);
  City[j++] = new city("Beijing, China", 39.9167, -116.4167, -8);
  City[j++] = new city("Berlin, Germany", 52.33, -13.30, -1);
  City[j++] = new city("Bombay, India", 18.9333, -72.8333, -5.5);
  City[j++] = new city("Buenos Aires, Argentina", -34.60, 58.45, 3);
  City[j++] = new city("Cairo, Egypt", 30.10, -31.3667, -2);
  City[j++] = new city("Cape Town, South Africa", -33.9167, -18.3667, -2);
  City[j++] = new city("Caracas, Venezuela", 10.50, 66.9333, 4);
  City[j++] = new city("Helsinki, Finland", 60.1667, -24.9667, -2);
  City[j++] = new city("Hong Kong, China", 22.25, -114.1667, -8);
  City[j++] = new city("Jerusalem, Israel", 31.7833, -35.2333, -2);
  City[j++] = new city("London, England", 51.50, 0.1667, 0);
  City[j++] = new city("Mexico City, Mexico", 19.4, 99.15, 6);
  City[j++] = new city("Moscow, Russia", 55.75, -37.5833, -3);
  City[j++] = new city("New Delhi, India", 28.6, -77.2, -5.5);
  City[j++] = new city("Ottawa, Canada", 45.41667, 75.7, 5);
  City[j++] = new city("Paris, France", 48.8667, -2.667, -1);
  City[j++] = new city("Rio de Janeiro, Brazil", -22.90, 43.2333, 3);
  City[j++] = new city("Riyadh, Saudi Arabia", 24.633, -46.71667, -3);
  City[j++] = new city("Rome, Italy", 41.90, -12.4833, -1);
  City[j++] = new city("Sydney, Australia", -33.8667, -151.2167, -10);
  City[j++] = new city("Tokyo, Japan", 35.70, -139.7667, -9);
  City[j++] = new city("Zurich, Switzerland", 47.3833, -8.5333, -1);
  City[j++] = new city("", 0, 0, 0);
  City[j++] = new city("SURFRAD NETWORK", 0, 0, 0);
  City[j++] = new city("Goodwin Creek, MS", 34.2544444, 89.8738888, 6);
  City[j++] = new city("Fort Peck, MT", 48.310555, 105.1025, 7);
  City[j++] = new city("Bondville, IL", 40.055277, 88.371944, 6);
  City[j++] = new city("Table Mountain, CO", 40.125, 105.23694, 7);
  City[j++] = new city("Desert Rock, NV", 36.626, 116.018, 8);
  City[j++] = new city("Penn State, PA", 40.72, 77.93, 5);
  City[j++] = new city("Canaan Valley, WV", 39.1, 79.4, 5);
  City[j++] = new city("Sioux Falls, SD", 43.733, 96.6233, 6);
  City[j++] = new city("", 0, 0, 0);
  City[j++] = new city("ARM/CART NETWORK", 0, 0, 0);
  City[j++] = new city("Atqasuk, AK", 70.47215, 157.4078, 9);
  City[j++] = new city("Barrow, AK", 71.30, 156.683, 9);
  City[j++] = new city("Manus Island, PNG", -2.06, -147.425, -10);
  City[j++] = new city("Nauru Island", -0.52, -166.92, -12);
  City[j++] = new city("Darwin, Australia", -12.425, -130.891, -9.5);
  City[j++] = new city("SGP Central Facility", 36.6167, 97.5, 6);
  City[j++] = new city("", 0, 0, 0);
  City[j++] = new city("SOLRAD NETWORK", 0, 0, 0);
  City[j++] = new city("Albuquerque, NM", 35.04, 106.62, 7);
  City[j++] = new city("Bismarck, ND", 46.77, 100.77, 6);
  City[j++] = new city("Hanford, CA", 36.31, 119.63, 8);
  City[j++] = new city("Madison, WI", 43.13, 89.33, 6);
  City[j++] = new city("Oak Ridge, TN", 35.96, 84.37, 5);
  City[j++] = new city("Salt Lake City, UT", 40.77, 111.97, 7);
  City[j++] = new city("Seattle, WA", 47.68, 122.25, 8);
  City[j++] = new city("Sterling, VA", 38.98, 77.47, 5);
  City[j++] = new city("Tallahassee, FL", 30.38, 84.37, 5);

  //*********************************************************************/

  console.log("init: Setting date for today");
  var today = new Date();

  document.getElementById("inputyear").value = today.getFullYear();
  document.getElementById("inputmonth").value = 1 + today.getMonth();
  document.getElementById("inputday").value = today.getDate();
  console.log("init: Inital calculation based on form\'s default data");
  calculate_form();

}
//*********************************************************************/


// isLeapYear returns 1 if the 4-digit yr is a leap year, 0 if it is not

function isLeapYear(yr) {
  return ((yr % 4 == 0 && yr % 100 != 0) || yr % 400 == 0);
}


//*********************************************************************/

// isPosInteger returns false if the value is not a positive integer, true is
// returned otherwise.  The code is from taken from Danny Goodman's Javascript
// Handbook, p. 372.

function isPosInteger(inputVal) {
  inputStr = ("" + inputVal);
  for (var i = 0; i < inputStr.length; i++) {
    var oneChar = inputStr.charAt(i);
    if (oneChar < "0" || oneChar > "9")
      return false;
  }
  return true;
}

//*********************************************************************/

function isInteger(inputVal) {
  inputStr = "" + inputVal;
  if (inputStr == "NaN") return false;
  if (inputStr == "-NaN") return false;
  for (var i = 0; i < inputStr.length; i++) {
    var oneChar = inputStr.charAt(i);
    if (i == 0 && (oneChar == "-" || oneChar == "+")) {
      continue;
    }
    if (oneChar < "0" || oneChar > "9") {
      return false;
    }
  }
  return true;
}


//*********************************************************************/

function isNumber(inputVal) {
  var oneDecimal = false;
  var inputStr = "" + inputVal;
  for (var i = 0; i < inputStr.length; i++) {
    var oneChar = inputStr.charAt(i);
    if (i == 0 && (oneChar == "-" || oneChar == "+")) {
      continue;
    }
    if (oneChar == "." && !oneDecimal) {
      oneDecimal = true;
      continue;
    }
    if (oneChar < "0" || oneChar > "9") {
      return false;
    }
  }
  return true;
}


//*********************************************************************/


//***********************************************************************/
//***********************************************************************/
//*												*/
//*This section contains subroutines used in calculating solar position */
//*												*/
//***********************************************************************/
//***********************************************************************/

// Convert radian angle to degrees

function radToDeg(angleRad) {
  return (180.0 * angleRad / Math.PI);
}

//*********************************************************************/

// Convert degree angle to radians

function degToRad(angleDeg) {
  return (Math.PI * angleDeg / 180.0);
}

//*********************************************************************/


//***********************************************************************/
//* Name:    calcDayOfYear								*/
//* Type:    Function									*/
//* Purpose: Finds numerical day-of-year from mn, day and lp year info  */
//* Arguments:										*/
//*   month: January = 1								*/
//*   day  : 1 - 31									*/
//*   lpyr : 1 if leap year, 0 if not						*/
//* Return value:										*/
//*   The numerical day of year							*/
//***********************************************************************/

function calcDayOfYear(mn, dy, lpyr) {
  var k = (lpyr ? 1 : 2);
  var doy = Math.floor((275 * mn) / 9) - k * Math.floor((mn + 9) / 12) + dy - 30;
  return doy;
}


//***********************************************************************/
//* Name:    calcDayOfWeek								*/
//* Type:    Function									*/
//* Purpose: Derives weekday from Julian Day					*/
//* Arguments:										*/
//*   juld : Julian Day									*/
//* Return value:										*/
//*   String containing name of weekday						*/
//***********************************************************************/

function calcDayOfWeek(juld) {
  var A = (juld + 1.5) % 7;
  var DOW = (A == 0) ? "Sunday" : (A == 1) ? "Monday" : (A == 2) ? "Tuesday" : (A == 3) ? "Wednesday" : (A == 4) ? "Thursday" : (A == 5) ? "Friday" : "Saturday";
  return DOW;
}


//***********************************************************************/
//* Name:    calcJD									*/
//* Type:    Function									*/
//* Purpose: Julian day from calendar day						*/
//* Arguments:										*/
//*   year : 4 digit year								*/
//*   month: January = 1								*/
//*   day  : 1 - 31									*/
//* Return value:										*/
//*   The Julian day corresponding to the date					*/
//* Note:											*/
//*   Number is returned for start of day.  Fractional days should be	*/
//*   added later.									*/
//***********************************************************************/

function calcJD(year, month, day) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  var A = Math.floor(year / 100);
  var B = 2 - A + Math.floor(A / 4);

  var JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
  return JD;
}



//***********************************************************************/
//* Name:    calcDateFromJD								*/
//* Type:    Function									*/
//* Purpose: Calendar date from Julian Day					*/
//* Arguments:										*/
//*   jd   : Julian Day									*/
//* Return value:										*/
//*   String date in the form DD-MONTHNAME-YYYY					*/
//* Note:											*/
//***********************************************************************/

function calcDateFromJD(jd) {
  var z = Math.floor(jd + 0.5);
  var f = (jd + 0.5) - z;

  if (z < 2299161) {
    var A = z;
  } else {
    alpha = Math.floor((z - 1867216.25) / 36524.25);
    var A = z + 1 + alpha - Math.floor(alpha / 4);
  }

  var B = A + 1524;
  var C = Math.floor((B - 122.1) / 365.25);
  var D = Math.floor(365.25 * C);
  var E = Math.floor((B - D) / 30.6001);

  var day = B - D - Math.floor(30.6001 * E) + f;
  var month = (E < 14) ? E - 1 : E - 13;
  var year = (month > 2) ? C - 4716 : C - 4715;

  // alert ("date: " + day + "-" + monthList[month-1].name + "-" + year);
  return (day + "-" + monthList[month - 1].name + "-" + year);
}


//***********************************************************************/
//* Name:    calcDayFromJD								*/
//* Type:    Function									*/
//* Purpose: Calendar day (minus year) from Julian Day			*/
//* Arguments:										*/
//*   jd   : Julian Day									*/
//* Return value:										*/
//*   String date in the form DD-MONTH						*/
//***********************************************************************/

function calcDayFromJD(jd) {
  var z = Math.floor(jd + 0.5);
  var f = (jd + 0.5) - z;

  if (z < 2299161) {
    var A = z;
  } else {
    alpha = Math.floor((z - 1867216.25) / 36524.25);
    var A = z + 1 + alpha - Math.floor(alpha / 4);
  }

  var B = A + 1524;
  var C = Math.floor((B - 122.1) / 365.25);
  var D = Math.floor(365.25 * C);
  var E = Math.floor((B - D) / 30.6001);

  var day = B - D - Math.floor(30.6001 * E) + f;
  var month = (E < 14) ? E - 1 : E - 13;
  var year = (month > 2) ? C - 4716 : C - 4715;

  return ((day < 10 ? "0" : "") + day + monthList[month - 1].abbr);
}


//***********************************************************************/
//* Name:    calcTimeJulianCent							*/
//* Type:    Function									*/
//* Purpose: convert Julian Day to centuries since J2000.0.			*/
//* Arguments:										*/
//*   jd : the Julian Day to convert						*/
//* Return value:										*/
//*   the T value corresponding to the Julian Day				*/
//***********************************************************************/

function calcTimeJulianCent(jd) {
  var T = (jd - 2451545.0) / 36525.0;
  return T;
}


//***********************************************************************/
//* Name:    calcJDFromJulianCent							*/
//* Type:    Function									*/
//* Purpose: convert centuries since J2000.0 to Julian Day.			*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   the Julian Day corresponding to the t value				*/
//***********************************************************************/

function calcJDFromJulianCent(t) {
  var JD = t * 36525.0 + 2451545.0;
  return JD;
}


//***********************************************************************/
//* Name:    calGeomMeanLongSun							*/
//* Type:    Function									*/
//* Purpose: calculate the Geometric Mean Longitude of the Sun		*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   the Geometric Mean Longitude of the Sun in degrees			*/
//***********************************************************************/

function calcGeomMeanLongSun(t) {
  var L0 = 280.46646 + t * (36000.76983 + 0.0003032 * t);
  while (L0 > 360.0) {
    L0 -= 360.0;
  }
  while (L0 < 0.0) {
    L0 += 360.0;
  }
  return L0; // in degrees
}


//***********************************************************************/
//* Name:    calGeomAnomalySun							*/
//* Type:    Function									*/
//* Purpose: calculate the Geometric Mean Anomaly of the Sun		*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   the Geometric Mean Anomaly of the Sun in degrees			*/
//***********************************************************************/

function calcGeomMeanAnomalySun(t) {
  var M = 357.52911 + t * (35999.05029 - 0.0001537 * t);
  return M; // in degrees
}

//***********************************************************************/
//* Name:    calcEccentricityEarthOrbit						*/
//* Type:    Function									*/
//* Purpose: calculate the eccentricity of earth's orbit			*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   the unitless eccentricity							*/
//***********************************************************************/


function calcEccentricityEarthOrbit(t) {
  var e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
  return e; // unitless
}

//***********************************************************************/
//* Name:    calcSunEqOfCenter							*/
//* Type:    Function									*/
//* Purpose: calculate the equation of center for the sun			*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   in degrees										*/
//***********************************************************************/


function calcSunEqOfCenter(t) {
  var m = calcGeomMeanAnomalySun(t);

  var mrad = degToRad(m);
  var sinm = Math.sin(mrad);
  var sin2m = Math.sin(mrad + mrad);
  var sin3m = Math.sin(mrad + mrad + mrad);

  var C = sinm * (1.914602 - t * (0.004817 + 0.000014 * t)) + sin2m * (0.019993 - 0.000101 * t) + sin3m * 0.000289;
  return C; // in degrees
}

//***********************************************************************/
//* Name:    calcSunTrueLong								*/
//* Type:    Function									*/
//* Purpose: calculate the true longitude of the sun				*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   sun's true longitude in degrees						*/
//***********************************************************************/


function calcSunTrueLong(t) {
  var l0 = calcGeomMeanLongSun(t);
  var c = calcSunEqOfCenter(t);

  var O = l0 + c;
  return O; // in degrees
}

//***********************************************************************/
//* Name:    calcSunTrueAnomaly							*/
//* Type:    Function									*/
//* Purpose: calculate the true anamoly of the sun				*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   sun's true anamoly in degrees							*/
//***********************************************************************/

function calcSunTrueAnomaly(t) {
  var m = calcGeomMeanAnomalySun(t);
  var c = calcSunEqOfCenter(t);

  var v = m + c;
  return v; // in degrees
}

//***********************************************************************/
//* Name:    calcSunRadVector								*/
//* Type:    Function									*/
//* Purpose: calculate the distance to the sun in AU				*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   sun radius vector in AUs							*/
//***********************************************************************/

function calcSunRadVector(t) {
  var v = calcSunTrueAnomaly(t);
  var e = calcEccentricityEarthOrbit(t);

  var R = (1.000001018 * (1 - e * e)) / (1 + e * Math.cos(degToRad(v)));
  return R; // in AUs
}

//***********************************************************************/
//* Name:    calcSunApparentLong							*/
//* Type:    Function									*/
//* Purpose: calculate the apparent longitude of the sun			*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   sun's apparent longitude in degrees						*/
//***********************************************************************/

function calcSunApparentLong(t) {
  var o = calcSunTrueLong(t);

  var omega = 125.04 - 1934.136 * t;
  var lambda = o - 0.00569 - 0.00478 * Math.sin(degToRad(omega));
  return lambda; // in degrees
}

//***********************************************************************/
//* Name:    calcMeanObliquityOfEcliptic						*/
//* Type:    Function									*/
//* Purpose: calculate the mean obliquity of the ecliptic			*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   mean obliquity in degrees							*/
//***********************************************************************/

function calcMeanObliquityOfEcliptic(t) {
  var seconds = 21.448 - t * (46.8150 + t * (0.00059 - t * (0.001813)));
  var e0 = 23.0 + (26.0 + (seconds / 60.0)) / 60.0;
  return e0; // in degrees
}

//***********************************************************************/
//* Name:    calcObliquityCorrection						*/
//* Type:    Function									*/
//* Purpose: calculate the corrected obliquity of the ecliptic		*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   corrected obliquity in degrees						*/
//***********************************************************************/

function calcObliquityCorrection(t) {
  var e0 = calcMeanObliquityOfEcliptic(t);

  var omega = 125.04 - 1934.136 * t;
  var e = e0 + 0.00256 * Math.cos(degToRad(omega));
  return e; // in degrees
}

//***********************************************************************/
//* Name:    calcSunRtAscension							*/
//* Type:    Function									*/
//* Purpose: calculate the right ascension of the sun				*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   sun's right ascension in degrees						*/
//***********************************************************************/

function calcSunRtAscension(t) {
  var e = calcObliquityCorrection(t);
  var lambda = calcSunApparentLong(t);

  var tananum = (Math.cos(degToRad(e)) * Math.sin(degToRad(lambda)));
  var tanadenom = (Math.cos(degToRad(lambda)));
  var alpha = radToDeg(Math.atan2(tananum, tanadenom));
  return alpha; // in degrees
}

//***********************************************************************/
//* Name:    calcSunDeclination							*/
//* Type:    Function									*/
//* Purpose: calculate the declination of the sun				*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   sun's declination in degrees							*/
//***********************************************************************/

function calcSunDeclination(t) {
  var e = calcObliquityCorrection(t);
  var lambda = calcSunApparentLong(t);

  var sint = Math.sin(degToRad(e)) * Math.sin(degToRad(lambda));
  var theta = radToDeg(Math.asin(sint));
  return theta; // in degrees
}

//***********************************************************************/
//* Name:    calcEquationOfTime							*/
//* Type:    Function									*/
//* Purpose: calculate the difference between true solar time and mean	*/
//*		solar time									*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//* Return value:										*/
//*   equation of time in minutes of time						*/
//***********************************************************************/

function calcEquationOfTime(t) {
  var epsilon = calcObliquityCorrection(t);
  var l0 = calcGeomMeanLongSun(t);
  var e = calcEccentricityEarthOrbit(t);
  var m = calcGeomMeanAnomalySun(t);

  var y = Math.tan(degToRad(epsilon) / 2.0);
  y *= y;

  var sin2l0 = Math.sin(2.0 * degToRad(l0));
  var sinm = Math.sin(degToRad(m));
  var cos2l0 = Math.cos(2.0 * degToRad(l0));
  var sin4l0 = Math.sin(4.0 * degToRad(l0));
  var sin2m = Math.sin(2.0 * degToRad(m));

  var Etime = y * sin2l0 - 2.0 * e * sinm + 4.0 * e * y * sinm * cos2l0 -
    0.5 * y * y * sin4l0 - 1.25 * e * e * sin2m;

  return radToDeg(Etime) * 4.0; // in minutes of time
}

//***********************************************************************/
//* Name:    calcHourAngleSunrise							*/
//* Type:    Function									*/
//* Purpose: calculate the hour angle of the sun at sunrise for the	*/
//*			latitude								*/
//* Arguments:										*/
//*   lat : latitude of observer in degrees					*/
//*	solarDec : declination angle of sun in degrees				*/
//* Return value:										*/
//*   hour angle of sunrise in radians						*/
//***********************************************************************/

function calcHourAngleSunrise(lat, solarDec) {
  var latRad = degToRad(lat);
  var sdRad = degToRad(solarDec)

  var HAarg = (Math.cos(degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) - Math.tan(latRad) * Math.tan(sdRad));

  var HA = (Math.acos(Math.cos(degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) - Math.tan(latRad) * Math.tan(sdRad)));

  return HA; // in radians
}

//***********************************************************************/
//* Name:    calcHourAngleSunset							*/
//* Type:    Function									*/
//* Purpose: calculate the hour angle of the sun at sunset for the	*/
//*			latitude								*/
//* Arguments:										*/
//*   lat : latitude of observer in degrees					*/
//*	solarDec : declination angle of sun in degrees				*/
//* Return value:										*/
//*   hour angle of sunset in radians						*/
//***********************************************************************/

function calcHourAngleSunset(lat, solarDec) {
  var latRad = degToRad(lat);
  var sdRad = degToRad(solarDec)

  var HAarg = (Math.cos(degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) - Math.tan(latRad) * Math.tan(sdRad));

  var HA = (Math.acos(Math.cos(degToRad(90.833)) / (Math.cos(latRad) * Math.cos(sdRad)) - Math.tan(latRad) * Math.tan(sdRad)));

  return -HA; // in radians
}


//***********************************************************************/
//* Name:    calcSunriseUTC								*/
//* Type:    Function									*/
//* Purpose: calculate the Universal Coordinated Time (UTC) of sunrise	*/
//*			for the given day at the given location on earth	*/
//* Arguments:										*/
//*   JD  : julian day									*/
//*   latitude : latitude of observer in degrees				*/
//*   longitude : longitude of observer in degrees				*/
//* Return value:										*/
//*   time in minutes from zero Z							*/
//***********************************************************************/

function calcSunriseUTC(JD, latitude, longitude) {
  var t = calcTimeJulianCent(JD);

  // *** Find the time of solar noon at the location, and use
  //     that declination. This is better than start of the
  //     Julian day
  console.log("calcSunriseUTC: ", JD, latitude, longitude);
  var noonmin = calcSolNoonUTC(t, longitude);
  var tnoon = calcTimeJulianCent(JD + noonmin / 1440.0);

  // *** First pass to approximate sunrise (using solar noon)

  var eqTime = calcEquationOfTime(tnoon);
  var solarDec = calcSunDeclination(tnoon);
  var hourAngle = calcHourAngleSunrise(latitude, solarDec);

  var delta = longitude - radToDeg(hourAngle);
  var timeDiff = 4 * delta; // in minutes of time
  var timeUTC = 720 + timeDiff - eqTime; // in minutes

  // alert("eqTime = " + eqTime + "\nsolarDec = " + solarDec + "\ntimeUTC = " + timeUTC);

  // *** Second pass includes fractional jday in gamma calc

  var newt = calcTimeJulianCent(calcJDFromJulianCent(t) + timeUTC / 1440.0);
  eqTime = calcEquationOfTime(newt);
  solarDec = calcSunDeclination(newt);
  hourAngle = calcHourAngleSunrise(latitude, solarDec);
  delta = longitude - radToDeg(hourAngle);
  timeDiff = 4 * delta;
  timeUTC = 720 + timeDiff - eqTime; // in minutes

  // alert("eqTime = " + eqTime + "\nsolarDec = " + solarDec + "\ntimeUTC = " + timeUTC);

  return timeUTC;
}

//***********************************************************************/
//* Name:    calcSolNoonUTC								*/
//* Type:    Function									*/
//* Purpose: calculate the Universal Coordinated Time (UTC) of solar	*/
//*		noon for the given day at the given location on earth		*/
//* Arguments:										*/
//*   t : number of Julian centuries since J2000.0				*/
//*   longitude : longitude of observer in degrees				*/
//* Return value:										*/
//*   time in minutes from zero Z							*/
//***********************************************************************/

function calcSolNoonUTC(t, longitude) {
  // First pass uses approximate solar noon to calculate eqtime
  var tnoon = calcTimeJulianCent(calcJDFromJulianCent(t) + longitude / 360.0);
  var eqTime = calcEquationOfTime(tnoon);
  var solNoonUTC = 720 + (longitude * 4) - eqTime; // min

  var newt = calcTimeJulianCent(calcJDFromJulianCent(t) - 0.5 + solNoonUTC / 1440.0);

  eqTime = calcEquationOfTime(newt);
  // var solarNoonDec = calcSunDeclination(newt);
  solNoonUTC = 720 + (longitude * 4) - eqTime; // min

  return solNoonUTC;
}

//***********************************************************************/
//* Name:    calcSunsetUTC								*/
//* Type:    Function									*/
//* Purpose: calculate the Universal Coordinated Time (UTC) of sunset	*/
//*			for the given day at the given location on earth	*/
//* Arguments:										*/
//*   JD  : julian day									*/
//*   latitude : latitude of observer in degrees				*/
//*   longitude : longitude of observer in degrees				*/
//* Return value:										*/
//*   time in minutes from zero Z							*/
//***********************************************************************/

function calcSunsetUTC(JD, latitude, longitude) {
  var t = calcTimeJulianCent(JD);

  // *** Find the time of solar noon at the location, and use
  //     that declination. This is better than start of the
  //     Julian day

  var noonmin = calcSolNoonUTC(t, longitude);
  var tnoon = calcTimeJulianCent(JD + noonmin / 1440.0);

  // First calculates sunrise and approx length of day

  var eqTime = calcEquationOfTime(tnoon);
  var solarDec = calcSunDeclination(tnoon);
  var hourAngle = calcHourAngleSunset(latitude, solarDec);

  var delta = longitude - radToDeg(hourAngle);
  var timeDiff = 4 * delta;
  var timeUTC = 720 + timeDiff - eqTime;

  // first pass used to include fractional day in gamma calc

  var newt = calcTimeJulianCent(calcJDFromJulianCent(t) + timeUTC / 1440.0);
  eqTime = calcEquationOfTime(newt);
  solarDec = calcSunDeclination(newt);
  hourAngle = calcHourAngleSunset(latitude, solarDec);

  delta = longitude - radToDeg(hourAngle);
  timeDiff = 4 * delta;
  timeUTC = 720 + timeDiff - eqTime; // in minutes

  return timeUTC;
}


//*********************************************************************/



//***********************************************************************/
//* Name:    findRecentSunrise							*/
//* Type:    Function									*/
//* Purpose: calculate the julian day of the most recent sunrise		*/
//*		starting from the given day at the given location on earth	*/
//* Arguments:										*/
//*   JD  : julian day									*/
//*   latitude : latitude of observer in degrees				*/
//*   longitude : longitude of observer in degrees				*/
//* Return value:										*/
//*   julian day of the most recent sunrise					*/
//***********************************************************************/

function findRecentSunrise(jd, latitude, longitude) {
  var julianday = jd;

  var time = calcSunriseUTC(julianday, latitude, longitude);
  while (!isNumber(time)) {
    julianday -= 1.0;
    time = calcSunriseUTC(julianday, latitude, longitude);
  }

  return julianday;
}


//***********************************************************************/
//* Name:    findRecentSunset								*/
//* Type:    Function									*/
//* Purpose: calculate the julian day of the most recent sunset		*/
//*		starting from the given day at the given location on earth	*/
//* Arguments:										*/
//*   JD  : julian day									*/
//*   latitude : latitude of observer in degrees				*/
//*   longitude : longitude of observer in degrees				*/
//* Return value:										*/
//*   julian day of the most recent sunset					*/
//***********************************************************************/

function findRecentSunset(jd, latitude, longitude) {
  var julianday = jd;

  var time = calcSunsetUTC(julianday, latitude, longitude);
  while (!isNumber(time)) {
    julianday -= 1.0;
    time = calcSunsetUTC(julianday, latitude, longitude);
  }

  return julianday;
}


//***********************************************************************/
//* Name:    findNextSunrise								*/
//* Type:    Function									*/
//* Purpose: calculate the julian day of the next sunrise			*/
//*		starting from the given day at the given location on earth	*/
//* Arguments:										*/
//*   JD  : julian day									*/
//*   latitude : latitude of observer in degrees				*/
//*   longitude : longitude of observer in degrees				*/
//* Return value:										*/
//*   julian day of the next sunrise						*/
//***********************************************************************/

function findNextSunrise(jd, latitude, longitude) {
  var julianday = jd;

  var time = calcSunriseUTC(julianday, latitude, longitude);
  while (!isNumber(time)) {
    julianday += 1.0;
    time = calcSunriseUTC(julianday, latitude, longitude);
  }

  return julianday;
}


//***********************************************************************/
//* Name:    findNextSunset								*/
//* Type:    Function									*/
//* Purpose: calculate the julian day of the next sunset			*/
//*		starting from the given day at the given location on earth	*/
//* Arguments:										*/
//*   JD  : julian day									*/
//*   latitude : latitude of observer in degrees				*/
//*   longitude : longitude of observer in degrees				*/
//* Return value:										*/
//*   julian day of the next sunset							*/
//***********************************************************************/

function findNextSunset(jd, latitude, longitude) {
  var julianday = jd;

  var time = calcSunsetUTC(julianday, latitude, longitude);
  while (!isNumber(time)) {
    julianday += 1.0;
    time = calcSunsetUTC(julianday, latitude, longitude);
  }

  return julianday;
}

//***********************************************************************/
//* Name:    timeString									*/
//* Type:    Function									*/
//* Purpose: convert time of day in minutes to a zero-padded string	*/
//*		suitable for printing to the form text fields			*/
//* Arguments:										*/
//*   minutes : time of day in minutes						*/
//* Return value:										*/
//*   string of the format HH:MM:SS, minutes and seconds are zero padded*/
//***********************************************************************/

function timeString(minutes)
// timeString returns a zero-padded string (HH:MM:SS) given time in minutes
{
  var floatHour = minutes / 60.0;
  var hour = Math.floor(floatHour);
  var floatMinute = 60.0 * (floatHour - Math.floor(floatHour));
  var minute = Math.floor(floatMinute);
  var floatSec = 60.0 * (floatMinute - Math.floor(floatMinute));
  var second = Math.floor(floatSec + 0.5);
  if (second > 59) {
    second = 0;
    minute += 1;
  }

  var timeStr = hour + ":";
  if (minute < 10) //	i.e. only one digit
    timeStr += "0" + minute + ":";
  else
    timeStr += minute + ":";
  if (second < 10) //	i.e. only one digit
    timeStr += "0" + second;
  else
    timeStr += second;

  return timeStr;
}


//***********************************************************************/
//* Name:    timeStringShortAMPM							*/
//* Type:    Function									*/
//* Purpose: convert time of day in minutes to a zero-padded string	*/
//*		suitable for printing to the form text fields.  If time	*/
//*		crosses a day boundary, date is appended.				*/
//* Arguments:										*/
//*   minutes : time of day in minutes						*/
//*   JD  : julian day									*/
//* Return value:										*/
//*   string of the format HH:MM[AM/PM] (DDMon)					*/
//***********************************************************************/

// timeStringShortAMPM returns a zero-padded string (HH:MM *M) given time in
// minutes and appends short date if time is > 24 or < 0, resp.

function timeStringShortAMPM(minutes, JD) {
  var julianday = JD;
  var floatHour = minutes / 60.0;
  var hour = Math.floor(floatHour);
  var floatMinute = 60.0 * (floatHour - Math.floor(floatHour));
  var minute = Math.floor(floatMinute);
  var floatSec = 60.0 * (floatMinute - Math.floor(floatMinute));
  var second = Math.floor(floatSec + 0.5);
  var PM = false;

  minute += (second >= 30) ? 1 : 0;

  if (minute >= 60) {
    minute -= 60;
    hour++;
  }

  var daychange = false;
  if (hour > 23) {
    hour -= 24;
    daychange = true;
    julianday += 1.0;
  }

  if (hour < 0) {
    hour += 24;
    daychange = true;
    julianday -= 1.0;
  }

  if (hour > 12) {
    hour -= 12;
    PM = true;
  }

  if (hour == 12) {
    PM = true;
  }

  if (hour == 0) {
    PM = false;
    hour = 12;
  }

  var timeStr = hour + ":";
  if (minute < 10) //	i.e. only one digit
    timeStr += "0" + minute + ((PM) ? "PM" : "AM");
  else
    timeStr += "" + minute + ((PM) ? "PM" : "AM");

  if (daychange) return timeStr + " " + calcDayFromJD(julianday);
  return timeStr;
}


//***********************************************************************/
//* Name:    timeStringAMPMDate							*/
//* Type:    Function									*/
//* Purpose: convert time of day in minutes to a zero-padded string	*/
//*		suitable for printing to the form text fields, and appends	*/
//*		the date.									*/
//* Arguments:										*/
//*   minutes : time of day in minutes						*/
//*   JD  : julian day									*/
//* Return value:										*/
//*   string of the format HH:MM[AM/PM] DDMon					*/
//***********************************************************************/

// timeStringAMPMDate returns a zero-padded string (HH:MM[AM/PM]) given time
// in minutes and julian day, and appends the short date

function timeStringAMPMDate(minutes, JD) {
  var julianday = JD;
  var floatHour = minutes / 60.0;
  var hour = Math.floor(floatHour);
  var floatMinute = 60.0 * (floatHour - Math.floor(floatHour));
  var minute = Math.floor(floatMinute);
  var floatSec = 60.0 * (floatMinute - Math.floor(floatMinute));
  var second = Math.floor(floatSec + 0.5);

  minute += (second >= 30) ? 1 : 0;

  if (minute >= 60) {
    minute -= 60;
    hour++;
  }

  if (hour > 23) {
    hour -= 24;
    julianday += 1.0;
  }

  if (hour < 0) {
    hour += 24;
    julianday -= 1.0;
  }

  var PM = false;
  if (hour > 12) {
    hour -= 12;
    PM = true;
  }

  if (hour == 12) {
    PM = true;
  }

  if (hour == 0) {
    PM = false;
    hour = 12;
  }

  var timeStr = hour + ":";
  if (minute < 10) //	i.e. only one digit
    timeStr += "0" + minute + ((PM) ? "PM" : "AM");
  else
    timeStr += minute + ((PM) ? "PM" : "AM");

  return timeStr + " " + calcDayFromJD(julianday);
}


//***********************************************************************/
//* Name:    timeStringDate								*/
//* Type:    Function									*/
//* Purpose: convert time of day in minutes to a zero-padded 24hr time	*/
//*		suitable for printing to the form text fields.  If time	*/
//*		crosses a day boundary, date is appended.				*/
//* Arguments:										*/
//*   minutes : time of day in minutes						*/
//*   JD  : julian day									*/
//* Return value:										*/
//*   string of the format HH:MM (DDMon)						*/
//***********************************************************************/

// timeStringDate returns a zero-padded string (HH:MM) given time in minutes
// and julian day, and appends the short date if time crosses a day boundary

function timeStringDate(minutes, JD) {
  var julianday = JD;
  var floatHour = minutes / 60.0;
  var hour = Math.floor(floatHour);
  var floatMinute = 60.0 * (floatHour - Math.floor(floatHour));
  var minute = Math.floor(floatMinute);
  var floatSec = 60.0 * (floatMinute - Math.floor(floatMinute));
  var second = Math.floor(floatSec + 0.5);

  minute += (second >= 30) ? 1 : 0;

  if (minute >= 60) {
    minute -= 60;
    hour++;
  }

  var daychange = false;
  if (hour > 23) {
    hour -= 24;
    julianday += 1.0;
    daychange = true;
  }

  if (hour < 0) {
    hour += 24;
    julianday -= 1.0;
    daychange = true;
  }

  var timeStr = hour + ":";
  if (minute < 10) //	i.e. only one digit
    timeStr += "0" + minute;
  else
    timeStr += minute;

  if (daychange) return timeStr + " " + calcDayFromJD(julianday);
  return timeStr;
}


//*********************************************************************/
function deg_to_dms(deg) {
  var d = Math.floor(deg);
  var minfloat = (deg - d) * 60;
  var m = Math.floor(minfloat);
  var secfloat = (minfloat - m) * 60;
  var s = Math.round(secfloat);
  // After rounding, the seconds might become 60. These two
  // if-tests are not necessary if no rounding is done.
  if (s == 60) {
    m++;
    s = 0;
  }
  if (m == 60) {
    d++;
    m = 0;
  }
  return ("" + d + ":" + m + ":" + s);
}

//***********************************************************************/
//* Name:    calculate_sunrise								*/
//* Type:    Function									*/
//* Purpose: Simple to use sunrise time 	*/
//* Arguments:										*/
//*   year, month, day, timezone, dst, latitude, longitude						*/
//* Return value:										*/
//*   minites since time Z						*/
//***********************************************************************/

function calculate_sunrise(year, month, day, timezone, dst, latitude, longitude) {
  var juliandate, sunrise_time;

  console.log("calculate_sunrise:",year,month,day,timezone,dst,latitude,longitude);
  juliandate = calcJD(parseInt(year), parseInt(month), parseInt(day));
  sunrise_time = calcSunriseUTC(juliandate, latitude, -1 * longitude) + timezone * 60 + dst * 60;

  if (sunrise_time > 1440) {
    sunrise_time -= 1440;
    juliandate += 1.0;
  }
  if (sunrise_time < 0) {
    sunrise_time += 1440;
    juliandate -= 1.0;
  }

  return sunrise_time;
}

//***********************************************************************/
//* Name:    calculate_sunset								*/
//* Type:    Function									*/
//* Purpose: Simple to use sunset time 	*/
//* Arguments:										*/
//*   year, month, day, timezone, dst, latitude, longitude						*/
//* Return value:										*/
//*   minites since time Z						*/
//***********************************************************************/

function calculate_sunset(year, month, day, timezone, dst, latitude, longitude) {
  var juliandate, sunset_time;

  console.log("calculate_sunset:",year,month,day,timezone,dst,latitude,longitude);
  juliandate = calcJD(parseInt(year), parseInt(month), parseInt(day));
  sunset_time = calcSunsetUTC(juliandate, latitude, -1 * longitude) + timezone * 60 + dst * 60;

  if (sunset_time > 1440) {
    sunset_time -= 1440;
    juliandate += 1.0;
  }
  if (sunset_time < 0) {
    sunset_time += 1440;
    juliandate -= 1.0;
  }

  return sunset_time;
}

function calculate_form() {
  var my_juliandate, my_lat, my_lng, my_year, my_month, my_day;
  var sunrise_time, sunset_time, jd2, jd3;
  var sunrise_time_str, sunset_time_str;

  my_year = document.getElementById("inputyear").value;
  my_month = document.getElementById("inputmonth").value;
  my_day = document.getElementById("inputday").value;

  my_lat = document.getElementById("inputlatitude").value;
  my_lng = document.getElementById("inputlongitude").value;

  my_tz = parseInt(document.getElementById("timezone").value);
  my_dst = parseInt(document.getElementById("dst").value);



  sunrise_time = calculate_sunrise(my_year, my_month, my_day, my_tz, my_dst, my_lat, my_lng);
  // Get human readable output
  my_juliandate = calcJD(parseInt(my_year), parseInt(my_month), parseInt(my_day));
  //sunrise_time_str = timeStringAMPMDate(sunrise_time, my_juliandate);
  sunrise_time_str = timeString(sunrise_time, my_juliandate);
  sunrise_time_str += " " + calcDateFromJD(my_juliandate)

  sunset_time = calculate_sunset(my_year, my_month, my_day, my_tz, my_dst, my_lat, my_lng);
  // Get human readable output
  my_juliandate = calcJD(parseInt(my_year), parseInt(my_month), parseInt(my_day));
  // sunset_time_str = timeStringAMPMDate(sunset_time, my_juliandate);
  sunset_time_str = timeString(sunset_time, my_juliandate);
  sunset_time_str += " " + calcDateFromJD(my_juliandate)

  document.getElementById("sunrise").innerHTML = "napkelte: " + sunrise_time_str;
  document.getElementById("sunset").innerHTML = "napnyugta: " + sunset_time_str;

  document.getElementById("latdms").innerHTML = "lat D:M:S : " + deg_to_dms(my_lat);
  document.getElementById("londms").innerHTML = "long D:M:S : " + deg_to_dms(my_lng);


}
