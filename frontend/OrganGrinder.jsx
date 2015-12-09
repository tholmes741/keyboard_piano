var KeyListener = require("./util/KeyListener.js"),
    Organ = require("./components/Organ.jsx"),
    ReactDOM = require("react-dom"),
    React = require("react");
// KeyStore = require('./stores/KeyStore.js');

$(function(){
  ReactDOM.render(
    <Organ/>,
    document.getElementById("content")
  );
});
