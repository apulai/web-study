// Viewbox settings
vbx = 200;
vby = 0;
vbw = 1000;
vbh = 1600;
origvbx = vbx;
origvby = vby;
origvbw = vbw;
origvbh = vbh;

//
maxi = 7;
maxj = 21;
//
playercolor = "red";


var playfield1 = [
  [1, 4],
  [1, 6],
  [1, 8],
  [1, 3],
  [1, 5],
  [1, 7],
  [1, 9],
  [2, 2],
  [2, 4],
  [2, 6],
  [2, 8],
  [2, 10],
  [2, 3],
  [2, 5],
  [2, 7],
  [2, 9],
  [3, 4],
  [3, 6],
  [3, 8]
];

var playfield2 = [
  [1, 4],
  [1, 6],
  [1, 8],
  [1, 10],
  [1, 3],
  [1, 5],
  [1, 7],
  [1, 9],
  [1, 11],
  [2, 2],
  [2, 4],
  [2, 6],
  [2, 8],
  [2, 10],
  [2, 12],
  [2, 3],
  [2, 5],
  [2, 7],
  [2, 9],
  [2, 11],
  [3, 4],
  [3, 6],
  [3, 8],
  [3, 10]
];

var playfield3 = [
  [0, 5],
  [0, 7],
  [0, 9],
  [1, 4],
  [1, 6],
  [1, 8],
  [1, 10],
  [1, 3],
  [1, 5],
  [1, 7],
  [1, 9],
  [1, 11],
  [2, 2],
  [2, 4],
  [2, 6],
  [2, 8],
  [2, 10],
  [2, 12],
  [2, 3],
  [2, 5],
  [2, 7],
  [2, 9],
  [2, 11],
  [3, 4],
  [3, 6],
  [3, 8],
  [3, 10],
  [3, 5],
  [3, 7],
  [3, 9]
];

var playfield4 = [
  [1, 6],
  [1, 8],
  [1, 14],
  [1, 16],
  [1, 5],
  [1, 7],
  [1, 9],
  [1, 13],
  [1, 15],
  [1, 17],
  [2, 13],
  [2, 15],
  [2, 17],
  [2, 5],
  [2, 8],
  [2, 10],
  [3, 4],
  [3, 6],
  [3, 10],
  [3, 14],
  [3, 16],
  [3, 18],
  [3, 15],
  [3, 17],

  [3, 5],
  [3, 11],
  [3, 9],
  [4, 8],
  [4, 10],
  [4, 12]

];
//var playfield = playfield1;
//var playfield = playfield1;
var playfield = playfield3;
//var playfield = playfield4;

//var cssclasses = ["wheat", "forest", "sheep", "brick", "rock", "desert"];
//var dicenumbers = [2, 3, 3, 4, 4, 5, 5, 9];

// These are the actual playing cards from the Catan game
var fields = ["desert", "wheat", "wheat", "wheat", "wheat", "forest", "forest", "forest", "forest", "sheep", "sheep", "sheep", "sheep", "brick", "brick", "brick", "rock", "rock", "rock"];

// This is to find if the current fields is an actual playing field (not see) listed in playfield
//https://stackoverflow.com/questions/41661287/how-to-check-if-an-array-contains-another-array
function isArrayInArray(arr, item) {
  var item_as_string = JSON.stringify(item);

  var contains = arr.some(function(ele) {
    return JSON.stringify(ele) === item_as_string;
  });
  return contains;
}

function addline(svg, line, id) {
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
  newElement.setAttribute("id", id);
  newElement.setAttribute("class", "myline");
  newElement.setAttribute("d", line);
  newElement.setAttribute("onclick", "setcolor(this);")
  svg.appendChild(newElement);
}

function addcircle(svg, x0, y0, id) {
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
  newElement.setAttribute("id", id);
  newElement.setAttribute("class", "mycircle");
  newElement.setAttribute("cx", x0);
  newElement.setAttribute("cy", y0);
  newElement.setAttribute("r", 10);
  newElement.setAttribute("onclick", "setcolor(this);")
  svg.appendChild(newElement);
}

// Add hexagon, internal text element and 3 villages (circles)
function addhexagon(svg, x0, y0, i, j) {
  var polyline = "";
  var currentfield = new Array(i, j);
  polyline = polyline + (x0 + 90) + "," + (y0) + " ";
  polyline = polyline + (x0 + 45) + "," + (y0 + 80) + " ";
  polyline = polyline + (x0 - 45) + "," + (y0 + 80) + " ";
  polyline = polyline + (x0 - 90) + "," + (y0) + " ";
  polyline = polyline + (x0 - 45) + "," + (y0 - 80) + " ";
  polyline = polyline + (x0 + 45) + "," + (y0 - 80) + " ";


  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polygon'); //Create a poliygon in SVG's namespace
  newElement.setAttribute("id", "h_" + i + "_" + j);
  if (isArrayInArray(playfield, currentfield) == true) {
    newElement.setAttribute("class", "myhexa");
  } else {
    newElement.setAttribute("class", "bluesee");
  }
  newElement.setAttribute("points", polyline);
  svg.appendChild(newElement);


  //<text x="32" y="50" text-anchor="middle" fill="white" font-size="30">X</text>
  // logical position of the hexagon
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  newElement.setAttribute("x", x0);
  newElement.setAttribute("y", y0 + 70);
  newElement.setAttribute("text-anchor", "middle");
  newElement.setAttribute("font-size", "20");
  newElement.innerHTML = "" + i + "," + j;
  svg.appendChild(newElement);

  //<text x="32" y="50" text-anchor="middle" fill="white" font-size="30">X</text>
  // number shown in the haxagon
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  newElement.setAttribute("id", "n_" + i + "_" + j);
  newElement.setAttribute("x", x0);
  newElement.setAttribute("y", y0);
  newElement.setAttribute("text-anchor", "middle");
  newElement.setAttribute("font-size", "60");
  newElement.innerHTML = " ";
  svg.appendChild(newElement);
}

// Draw the whole playing field
function drawplayfield(parentsvg) {
  var i, j, xshift;
  var x0, y0, x1, y1, x2, y2;
  var a, b, c, d, e, f;
  var svg = document.getElementById(parentsvg); //Get svg element


  for (j = -2; j < maxj; j++) {
    for (i = -2; i < maxi; i++) {
      x0 = i * 3 * 100;
      y0 = j * 86;

      if (j % 2 == 1) {
        x0 = x0 + 150;
        color = "red";
      } else {
        color = "blue";
      }

      // Roads
      x1 = x0 + 50;
      y1 = y0 + 86;
      x2 = x0 + 100;
      y2 = y0;
      cmdtxt = "M " + x1 + "," + y1 + " L " + x2 + "," + y2;
      addline(svg, cmdtxt, "l_" + i + "_" + j + '_1');
      addcircle(svg, x2, y2, "c_" + i + "_" + j + '_1');


      x1 = x0 + 50;
      y1 = y0 - 86;
      x2 = x0 + 100;
      y2 = y0;
      cmdtxt = "M " + x1 + "," + y1 + " L " + x2 + "," + y2;
      addline(svg, cmdtxt, "l_" + i + "_" + j + '_2');
      addcircle(svg, x1, y1, "c_" + i + "_" + j + '_2');

      x1 = x0 + 50;
      y1 = y0 - 86;
      x2 = x0 - 50;
      y2 = y0 - 86;
      cmdtxt = "M " + x1 + "," + y1 + " L " + x2 + "," + y2;
      addline(svg, cmdtxt, "l_" + i + "_" + j + '_3');
      //addcircle(svg, x2, y2, "c_" + i + "_" + j + '_3');

      // Fields
      addhexagon(svg, x0, y0, i, j);
    }

  }
  recolor();
}

// recolor the playfield
function recolor() {
  var shuffle;
  var x;
  do {
    shuffle = Math.floor(Math.random() * fields.length) + 1;
  } while ((1 + fields.length) % shuffle == 1);
  x = Math.floor(Math.random() * fields.length);
  console.log(x, shuffle);
  for (j = -2; j < maxj; j++) {
    for (i = -2; i < maxi; i++) {
      var currentfield = [i, j];
      var myroll;
      if (isArrayInArray(playfield, currentfield) == true) {
        // No 7 always goes to the desert.
        // So I will not generate 7 as a number
        do {
          myroll = (Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2);
        } while (myroll == 7);

        // if the current fields is the desert let put 7 there.
        if (fields[x] != "desert") {
          document.getElementById("h_" + i + "_" + j).setAttribute("class", fields[x]);
          document.getElementById("n_" + i + "_" + j).innerHTML = "" + myroll;
          document.getElementById("n_" + i + "_" + j).setAttribute("class", "dicetext");
        } else {
          document.getElementById("h_" + i + "_" + j).setAttribute("class", fields[x]);
          document.getElementById("n_" + i + "_" + j).innerHTML = "7";
          document.getElementById("n_" + i + "_" + j).setAttribute("class", "dicetext");
        }
        x = (x + shuffle) % fields.length;
      }

    }
  }
}

// TODO: This should save the game to an Amazon DB
function savefield() {
  var exportlist = [];
  for (j = -2; j < maxj; j++) {
    for (i = -2; i < maxi; i++) {
      var field = [i, j];
      var x;
      if (isArrayInArray(playfield, field) == true) {
        var hname = "h_" + i + "_" + j;
        var nname = "n_" + i + "_" + j;
        var item = [];
        item["id1"] = hname;
        item["id1_cssclass"] = document.getElementById(hname).getAttribute("class");
        item["id2"] = nname;
        item["id2_number"] = document.getElementById(nname).innerHTML;
        //console.log(item);
        //console.log(JSON.stringify(item));
        exportlist.push(item);
      }
    }
  }
  //console.log(JSON.stringify(exportlist));
  console.log(exportlist);
}



// Allows to select from the predefined playfields
function selectplayfield() {
  var pf = document.getElementById("playfield").value;
  console.log("func setfield", pf);
  if (pf == "playfield1") playfield = playfield1;
  if (pf == "playfield2") playfield = playfield2;
  if (pf == "playfield3") playfield = playfield3;
  if (pf == "playfield4") playfield = playfield4;
  document.getElementById("canvas1").innerHTML = "";
  drawplayfield('canvas1');
  recolor();
}

// Roll the dice and hightlight active fields
function rollthedice() {
  lastroll = (Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2);
  document.getElementById("lastroll").innerHTML = lastroll;
  document.getElementById("gotresource").innerHTML = "<br>";
  show_active_fields(lastroll);
}

// find text elements with the
function show_active_fields(number) {
  var activehexa;
  var i, j;
  for (j = -2; j < maxj; j++) {
    for (i = -2; i < maxi; i++) {
      var textelement;
      textelement = document.getElementById("n_" + i + "_" + j);
      textelement.setAttribute("class", "dicetext");
      if (textelement.innerHTML == number) {
        textelement.setAttribute("class", "dicetextactive");
        // find active addhexagon
        activehexa = document.getElementById("h_" + i + "_" + j);
        // find neighbouring cities
        listneighbours(activehexa);
      }
    }
  }
}

function listneighbours(hexa) {
  var citi;
  var i, j, ccolor;
  var retval = "";
  console.log("function listneighbours for:", hexa);
  for (j = -2; j < maxj; j++) {
    for (i = -2; i < maxi; i++) {
      for (k = 1; k < 3; k++) {
        citi = document.getElementById("c_" + i + "_" + j + "_" + k);
        if (intersectRect(hexa, citi) == true) {
          console.log(hexa, " neighbours ", citi);
          ccolor = citi.getAttribute("class");
          if (ccolor != "mycircle") {
            retval = retval + hexa.getAttribute("class") + " to " + ccolor + "<br>";
            console.log(retval);
          }
        }
      }
    }
  }
  document.getElementById("gotresource").innerHTML = document.getElementById("gotresource").innerHTML + retval;
}
// Collision detection
function intersectRect(r1, r2) {
  var r1 = r1.getBoundingClientRect(); //BOUNDING BOX OF THE FIRST OBJECT
  var r2 = r2.getBoundingClientRect(); //BOUNDING BOX OF THE SECOND OBJECT

  //CHECK IF THE TWO BOUNDING BOXES OVERLAP
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}

//set citi mycolor
function setcolor(id) {
  console.log("Set citi, path color", id, playercolor);
  id.setAttribute("class", playercolor);
}

function setplayercolor() {
  console.log(document.getElementById("playercolor").value);
  playercolor = document.getElementById("playercolor").value;
  document.getElementById("playercolor2").setAttribute("class", playercolor);
}


// Viewbox functions
function zoom(canvasename, x) {
  vbh = vbh * x;
  vbw = vbw * x;
  val = vbx + " " + vby + " " + vbw + " " + vbh;
  document.getElementById(canvasename).setAttribute("viewBox", val);
}

function move(canvasename, x) {
  vbx = vbx + x;
  val = vbx + " " + vby + " " + vbw + " " + vbh;
  document.getElementById(canvasename).setAttribute("viewBox", val);
}

function resetzoom(canvasename) {
  vbx = origvbx;
  vby = origvby;
  vbw = origvbw;
  vbh = origvbh;
  val = vbx + " " + vby + " " + vbw + " " + vbh;
  document.getElementById(canvasename).setAttribute("viewBox", val);
}
