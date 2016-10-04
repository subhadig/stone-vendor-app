var React = require('react');
var HeaderImage = require('./HeaderImage');

module.exports = React.createClass({
  propTypes: {
    pageConfig: React.PropTypes.string.isRequired
  },

  render: function() {

    return <div className="page">
            <div className="top">
              <HeaderImage headerSlogan = {this.props.pageConfig.headerSlogan}/>
            </div>
          </div>
  }
});
