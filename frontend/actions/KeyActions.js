var AppDispatcher = require('../dispatcher/Dispatcher.js');

var KeyActions = {
  keyPressed: function(key){
    AppDispatcher.dispatch({
      actionType: "ADD_KEY",
      key: key
    });
  }
};

module.exports = KeyActions;
