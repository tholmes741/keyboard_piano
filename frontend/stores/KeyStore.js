var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var _keysPressed = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "ADD_KEY":
      addKey(payload.key);
      break;
    case "REMOVE_KEY":
      removeKey(payload.key);
      break;
    case "PLAY_NOTES":
      removeAll();
      payload.keys.forEach(function(key){
        addKey(key);
      });
    break;
  }
};

var addKey = function(key) {
  var idx = _keysPressed.indexOf(key);
  if(idx === -1){
    _keysPressed.push(key);
    KeyStore.__emitChange();
  }
};

var removeKey = function(key){
  var idx = _keysPressed.indexOf(key);
  _keysPressed.splice(idx, 1);
  KeyStore.__emitChange();
};

var removeAll = function(){
  _keysPressed = [];
  KeyStore.__emitChange();
};

KeyStore.all = function() {
  return _keysPressed.slice();
};

module.exports = KeyStore;
