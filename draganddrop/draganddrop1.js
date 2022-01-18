function allowDrop(ev) {
  console.log(ev.target.id);
  if (ev.target.id.includes("empty")) {
    ev.preventDefault();
  }
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));


  var ok = check_complete(ev);
  if (ok === 4) {
    document.getElementById("inprogress").innerText = "Success!";
  } else {
    document.getElementById("inprogress").innerText = "Keep on!";
  }

}

function check_complete(ev) {
  var correct = 0;

  var e1 = document.getElementById("empty1");
  var e1kids = e1.childNodes;
  //console.log(e1kids);
  for (i = 0; i < e1kids.length; i++) {
    try {
      //console.log("loop")
      //console.log(e1kids[i].id);
      if (e1kids[i].id.includes("part1")) correct++;
    } catch (e) {}
  }
  //console.log(correct);

  var e2 = document.getElementById("empty2");
  var e2kids = e2.childNodes;
  //console.log(e2kids);
  for (i = 0; i < e2kids.length; i++) {
    try {
      //console.log("loop")
      //console.log(e1kids[i].id);
      if (e2kids[i].id.includes("part2")) correct++;
    } catch (e) {}
  }
  //console.log(correct);

  var e3 = document.getElementById("empty3");
  var e3kids = e3.childNodes;
  //console.log(e3kids);
  for (i = 0; i < e3kids.length; i++) {
    try {
      //console.log("loop")
      //console.log(e1kids[i].id);
      if (e3kids[i].id.includes("part3")) correct++;
    } catch (e) {}
  }
 //console.log(correct);

  var e4 = document.getElementById("empty4");
  var e4kids = e4.childNodes;
  //console.log(e4kids);
  for (i = 0; i < e4kids.length; i++) {
    try {
      //console.log("loop")
      //console.log(e1kids[i].id);
      if (e4kids[i].id.includes("part4")) correct++;
    } catch (e) {}
  }

  console.log(correct);
  return (correct);


}


//var children = document.getElementById(ev.target.id).childNodes;
//console.log(children);
//console.log(children.length);
//for (i = 1; i < children.length; i++) {
//  try
//    children[i].id.includes("empty") = "empty";
//
//  } catch (e) {}
