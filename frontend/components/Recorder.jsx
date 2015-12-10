var React = require("react");
var Track = require('../util/Track.js');
var KeyStore = require('../stores/KeyStore.js');



var Recorder = React.createClass({
  getInitialState: function(){
    return { track: new Track({name: "Untitled"}), isRecording: false };
  },
  playRecording: function(){
    this.state.track.play();
  },

  toggleRecording: function(){
    if(this.state.isRecording){
      this.state.track.stopRecording();
    }else{
      this.state.track.startRecording();      
    }
    this.setState({ isRecording: !this.state.isRecording });
  },

  addNotes: function(notes){
    if(this.state.isRecording){
      this.state.track.addNotes(notes);
      // console.log("notes", notes);
    }
  },

  render: function(){
    this.addNotes(this.props.notes);
    var btnText = this.state.isRecording ? "Stop" : "Record";
    return (
      <div>recorder
        <button onClick={this.toggleRecording}>{btnText}</button>
        <button onClick={this.playRecording}>Play</button>
      </div>
    );
  }
});


module.exports = Recorder;
