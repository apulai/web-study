//jshint esversion:6

// Azért kell, hogy a .env-ből vegye a kulcsokat
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
// const https = require('https');

const mongoose = require('mongoose');
const _ = require('lodash')

// const mydate = require(__dirname + "/mydate.js");
// const mydate = require(__dirname + "/mydate_kicsitrovidebb.js");

// New Instance of Express!
const app = express();
var port = 3000;

// var items = ["Buy food", "Cook food", "Eat food "];

// Ezt a sort nem értem, de igy kell használni
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

//{}
const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, name is missnig"]
  }
});

const todoItem = mongoose.model("Item", itemSchema);
const item1 = new todoItem({
  name: "Welcome ! "
});

const item2 = new todoItem({
  name: "Press + to add a new todo item"
});

const item3 = new todoItem({
  name: "<-- Click here to delete an item"
});

const defaultitems = [item1, item2, item3];


const listSchema = mongoose.Schema({
  name: String,
  items: [itemSchema]
});

const List = mongoose.model("List", listSchema);

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  let title = "Today";
  res.redirect("/" + title);
});

app.post("/", function(req, res) {
  const newItem = req.body.newItem;
  const listName = _.capitalize(req.body.listname);
  console.log(newItem, listName);
  console.log(req.body.button);
  let item1 = new todoItem({
    name: req.body.newItem
  });
  List.findOne({
    name: listName
  }, function(err, foundList) {
    if (!err) {
      foundList.items.push(item1);
      foundList.save();
      res.redirect("/" + listName);
    }
  });
});

app.post("/delete", function(req, res) {
  const deleteId = req.body.id;
  const listName = _.capitalize(req.body.listname);
  console.log(listName, deleteId);
  // todoItem.findByIdAndRemove( deleteId)

  List.findOneAndUpdate({
      name: listName
    }, {
      $pull: {
        items: {
          _id: deleteId
        }
      }
    },
    function(err, foundList) {
      if (err) {
        console.log(err);
      } else {
        console.log("Deleted ", deleteId, " from ", listName, ".");
        res.redirect("/" + listName);
      }
    });

});



//{}
app.get("/listoflists", function(req, res) {
  console.log("Finding all lists");
  List.find({
      name: {
        $ne: 'Favicon.ico'
      }
    },
    function(err, foundLists) {
      if (!err) {
        console.log(foundLists);
        res.render("listoflists", {
          listTitle: "List of lists:",
          listnames: foundLists
        });
      } else {
        console.log(err);
        res.redirect("/");
      }
    });
});


//{}
app.post("/listoflists", function(req, res) {

  if (req.body.request == "delete") {
    console.log("Deleteing a single list:", req.body.listid);
    const id = req.body.listid;
    List.deleteOne({
        _id: id
      },
      function(err) {
        if (!err) {
          console.log("No Error!");
          res.redirect("/listoflists");
        } else {
          console.log(err);
          res.redirect("/");
        }
      });
  }
});

app.get("/renamelist", function(req, res) {
  console.log("Creating form to rename a single list:", req.body, req.params, req.query);
  res.render("renamelist", {
    listTitle: req.query.listname,
    listid: req.query.listid
  });
});

app.post("/renamelist", function(req, res) {
  console.log("Renaming a single list:", req.body, req.params, req.query);
  const oldlistname = req.body.oldlistname;
  const newlistname = _.capitalize(req.body.newlistname);
  const listid = req.body.id;
  console.log("New name:", newlistname);

  List.findOneAndUpdate({
      _id: listid
    }, {
      name: newlistname
    },
    function(err, foundList) {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        console.log("No error: Renamed ", oldlistname, " from ", newlistname, ".");
        res.redirect("/" + newlistname);
      }
    });
});


app.get("/Favicon.ico", function(req, res) {
  console.log("ignoring favicon request");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/mychars", function(req, res) {
  res.render('mychars');
});

// Dinamikus listák kezelése
app.get("/:customListName", function(req, res) {
  const customListName = _.capitalize(req.params.customListName);
  console.log(customListName);
  List.findOne({
    name: customListName
  }, function(err, foundList) {
    if (err) {
      console.log(err);
    } else {
      console.log(foundList);
      if (!foundList) {
        // Create new list
        const list = new List({
          name: customListName,
          items: defaultitems
        });
        list.save();
        console.log("Creating ", customListName, " list.");
        res.redirect("/" + customListName);
      } else {
        // Display list
        console.log("List ", customListName, " exists.");
        res.render('list', {
          listTitle: customListName,
          items: foundList.items
        });
      }
    }
  });
});


// app.listen(process.env.PORT || 3000, function() {
app.listen(port, function() {
  console.log(`Todolist app listening at http://localhost:${port}`);
});
