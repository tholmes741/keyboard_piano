var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var _tracks = [];

var TrackStore = new Store(AppDispatcher);

TrackStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ADD_TRACK":
      addTrack(payload.track);
      break;
  }
};

TrackStore.all = function(){
  return _tracks.slice();
};

var addTrack = function(track){
  _tracks.push(track);
  TrackStore.__emitChange();
};


module.exports = TrackStore;
