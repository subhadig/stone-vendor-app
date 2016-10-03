var React = require('react');

module.exports = React.createClass({

//Declare all the property types
  propTypes: {
    name: React.PropTypes.object.isRequired
  },

  //Declare the render function
  render: function() {

    var name = this.props.name;

    return <h1>Hello {name}!</h1>;
  }
});
