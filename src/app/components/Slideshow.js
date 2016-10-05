var React = require('react');
var ImageGallery = require('react-image-gallery').default;

module.exports = React.createClass({
  propTypes: {
    config: React.PropTypes.object.isRequired
  },

  handleImageLoad: function(event) {
    console.log('Image loaded ', event.target);
  },

  render: function() {
    const images = this.props.config;

    return (
      <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        autoPlay={true}
        onImageLoad={this.handleImageLoad}/>
    );

  }
})
