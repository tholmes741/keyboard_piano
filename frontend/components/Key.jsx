var React = require("react");
var AppDispatcher = require('../dispatcher/Dispatcher.js');
var KeyStore = require('../stores/KeyStore.js');
var Note = require("../util/Note.js");
var TONE = require("../constants/Tones.js");


var Key = React.createClass({
  componentDidMount: function(){
    this.note = new Note(TONE[this.props.note]);
    this.note.start();
  },

  componentWillUnmount: function(){
    this.note.stop();
  },

  render: function(){
    return (
      <div>
        <div>{this.props.note}</div>
      </div>
    );
  }
});

module.exports = Key;
