var AppDispatcher = require('../dispatcher/Dispatcher');
var KeyActions = require('../actions/KeyActions.js');

var Map = {
  65: "C0",
  83: "D0",
  68: "E0",
  70: "F0",
  71: "G0",
  72: "A0",
  74: "B0",
  75: "C1"
};

var keyListener = $(document).on("keydown", function(e){
  var key = Map[e.keyCode];
  KeyActions.keyPressed(key);
});

module.exports = keyListener;
