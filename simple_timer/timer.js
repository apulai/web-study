// Feladat: Villogjon a kettőspont a clock2-ben
// És legyen már valami padding is!

function pad(str)
{
  paddedstr="0"+str;
  return(paddedstr)
}

function refreshclock() {
  var d = new Date();
  document.getElementById('clock1').innerHTML = d.toString();
  document.getElementById('clock2').innerHTML = "unpadded "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}

function starttimer() {
  window.setInterval(refreshclock, 1000);
}
