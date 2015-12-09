var AppDispatcher = require('../dispatcher/Dispatcher');
var KeyActions = require('../actions/KeyActions.js');

var Map = {
  65: "C4",
  83: "D4",
  68: "E4",
  70: "F4",
  71: "G4",
  72: "A4",
  74: "B4",
  75: "C5"
};

$(document).on("keydown", function(e){
  var key = Map[e.keyCode];
  if(typeof key !== "undefined"){
    KeyActions.keyPressed(key);
  }
});

$(document).on("keyup", function(e){
  var key = Map[e.keyCode];
  if(typeof key !== "undefined"){
    KeyActions.keyUp(key);
  }
});
