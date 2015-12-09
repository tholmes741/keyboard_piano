var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var _keysPressed = [];

var KeyStore = new Store(AppDispatcher);

KeyStore._onDispatch = function(payload) {
  switch (payload.actionType) {
    case "ADD_KEY":
      console.log("keyPressed!! ", payload.key);
      addKey(payload.key);
      break;
  }
};

var addKey = function(key) {
  _keysPressed.push(key);
  KeyStore._emitChange();
};

module.exports = KeyStore;
