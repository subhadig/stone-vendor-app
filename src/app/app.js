var React = require('react');
var ReactDom = require('react-dom');
var AppRoot = require('./components/AppRoot');

module.exports = function(element, state) {
  if(!element) {
    console.error('No element passed.');
  }
  if(!state) {
    console.error('State is null.');
  }

  this.render = ()=> {
    ReactDom.render(<AppRoot
                      config = {state.config}
                    />, element);
  };
};
