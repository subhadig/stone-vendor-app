var React = require('react');

module.exports = React.createClass({
  propTypes: {
    headerSlogan: React.PropTypes.string.isRequired
  },

  render: function() {

    return <div className = "header-img">
            <h2>{this.props.headerSlogan}</h2>
          </div>;
  }
});
