var React = require('react');
var Page = require('./Page');
var Footer = require('./Footer');

module.exports = React.createClass({

//Declare all the property types
  propTypes: {
    config: React.PropTypes.object.isRequired
  },

  //Declare the render function
  render: function() {

    var name = this.props.config.name;

    return <div className="main.out">
              <div className="main">
                <Page pageConfig={this.props.config.pageConfig}/>
                <h1>Hello {name}!</h1>
                <Footer/>
              </div>
            </div>;
  }
});
