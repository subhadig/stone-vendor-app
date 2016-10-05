var React = require('react');
var HeaderImage = require('./HeaderImage');
var Slideshow = require('./Slideshow');

module.exports = React.createClass({
  propTypes: {
    pageConfig: React.PropTypes.string.isRequired
  },

  render: function() {

    return <div className="page">
            <div className="top">
              <HeaderImage headerSlogan = {this.props.pageConfig.headerSlogan}/>
              <div className="slideshow-outer">
                <Slideshow config={this.props.pageConfig.slideshowConfig}/>
              </div>
            </div>
          </div>
  }
});
