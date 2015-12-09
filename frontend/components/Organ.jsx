var React = require("react");
var AppDispatcher = require('../dispatcher/Dispatcher.js');
var KeyStore = require('../stores/KeyStore.js');
var Key = require('./Key.jsx');


var Organ = React.createClass({
  getInitialState: function() {
    return {keys: []};
  },

  componentDidMount: function() {
    KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function() {
    KeyStore.removeListener(this._keyChanged);
  },

  _keysChanged: function(){
    this.setState({keys: KeyStore.all()});
  },

  render: function(){
    var keys = this.state.keys.map( function(key, idx) {
      return <Key note={key} key={idx}/>;
    });
    return (
      <div>
        {keys}
      </div>
    );
  }
});

module.exports = Organ;
