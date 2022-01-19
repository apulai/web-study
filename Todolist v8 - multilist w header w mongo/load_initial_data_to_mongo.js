//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todolistDB");
const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, name is missnig"]
  }
});

const todoItem = mongoose.model("Item", itemSchema);
todoItem.deleteMany({}, function(err) {
   console.log('collection removed') ;
});


const item1 = new todoItem({
  name: "Welcome ! "
});

const item2 = new todoItem({
  name: "Press + to add a new todo item"
});

const item3 = new todoItem({
  name: "<-- Click here to delete an item"
});

todoItem.insertMany([item1, item2, item3], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Saved todo items!");
    mongoose.connection.close();
  }
});
