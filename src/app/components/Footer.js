var React = require('react');

module.exports = React.createClass({
  propTypes: {

  },

  render: function() {
    var footerNote = String.fromCharCode(169) + "Copyright 2016. Designed by Subhadip Ghosh.";
    return <p>{footerNote}</p>
  }
});
