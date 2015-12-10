var KeyActions = require('../actions/KeyActions.js');

var Track = function(attrHash){
  this.name = attrHash.name;
  this.roll = attrHash.roll ? attrHash.roll : [];
};

Track.prototype.startRecording = function () {
  this.roll = [];
  var time = new Date();
  this.startTime = time.getTime();
};

Track.prototype.addNotes = function (notes) {
  var time = Date.now();
  console.log("startTime", this.startTime);
  this.roll.push({timeSlice: time - this.startTime, notes: notes});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
  console.log(this.roll);
};

Track.prototype.play = function () {
  if (this.interval) {return;}
  var playbackStartTime = Date.now();
  var currentNote = 0;
  var myTrack = this;
  this.interval = setInterval(function(){
    if (currentNote < myTrack.roll.length) {
      var rollNote = myTrack.roll[currentNote];
      if(Date.now() - playbackStartTime > rollNote.timeSlice) {
        currentNote++;
        KeyActions.playNotes(rollNote.notes);
      }
    }else{
      clearInterval(this.interval);
    }
  }, 10);
};


module.exports = Track;
