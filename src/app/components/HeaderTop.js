var React = require('react');

module.exports = React.createClass({
  propTypes: {
    headerTopConfig: React.PropTypes.object.isRequired
  },

  render: function() {

    //console.log(this.props);

    var firstName = this.props.headerTopConfig.firstName;
    var lastName = this.props.headerTopConfig.lastName;
    var phoneNo = this.props.headerTopConfig.phoneNo

    return <div className="header-top">
              <h1>{firstName} <span>{lastName}</span></h1>
              <p>Call Us: {phoneNo}</p>
          </div>;
  }
})
