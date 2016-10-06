var React = require('react');
var HeaderTop = require('./HeaderTop');
var HeaderImage = require('./HeaderImage');
var Slideshow = require('./Slideshow');

module.exports = React.createClass({
  propTypes: {
    pageConfig: React.PropTypes.string.isRequired
  },

  render: function() {

    console.log(this.props.pageConfig.headerTopConfig);

    return <div className="page-outer">
            <div className="page">
              <div className="top">
                <HeaderTop headerTopConfig = {this.props.pageConfig.headerTopConfig}/>
                <HeaderImage headerSlogan = {this.props.pageConfig.headerSlogan}/>
                <div className="slideshow-outer">
                  <Slideshow config={this.props.pageConfig.slideshowConfig}/>
                </div>
              </div>
            </div>
          </div>
  }
});
