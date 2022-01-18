// script.js
// when user 'clicks' on the div id 'red', evoke the function makeRed()

vbx = 0;
vby = 0;
vbw = 500;
vbh = 250;

function calculatesin() {
  yzoom = 100.0;
  middley = 125;
  retval = "M 0 " + middley;
  for (x = 0; x < 500; x++) {
    y = middley - Math.sin(x / 50.0) * yzoom;
    retval = retval + "L " + x + " " + y + " ";
  }
  console.log(retval);
  return retval;
}

function drawsin() {
  document.getElementById('sindiagram').setAttribute('d', calculatesin());
}

function parse() {
  parser = math.parser();
  myexpr = document.getElementById('myfunction').value;
  console.log(myexpr);
  firstpoint = 1;
  myzoom = 10.0;
  middley = 125;
  middlex = 250;


  for (x = -10; x < 10; x = x + 0.05) {
    parser.set('x', x);
    y = parser.evaluate(myexpr);
    console.log(x, y);
    lx = x * myzoom + middlex;
    ly = middley - y * myzoom;
    if (firstpoint == 1) {
      firstpoint = 0;
      retval = "M " + lx + " " + ly;
    }
    retval = retval + " L " + lx + " " + ly + " ";
  }
  console.log(retval);
  document.getElementById('mydiagram').setAttribute('d', retval);


}
