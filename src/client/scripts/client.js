var App = require('../../app');

var attachElement = document.getElementById('app');

var state = {
  config: {
    pageConfig: {
      headerSlogan: "Quality stones at best prices",
      slideshowConfig: [
        {
          original: 'http://localhost:3000/images/slideshow/image_1.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_1.jpg',
          originalClass: 'featured-slide',
          thumbnailClass: 'featured-thumb',
          originalAlt: 'original-alt',
          thumbnailAlt: 'thumbnail-alt',
          //thumbnailLabel: 'Optional',
          //description: 'Optional description...',
          //srcSet: 'Optional srcset (responsive images src)',
          //sizes: 'Optional sizes (image sizes relative to the breakpoint)'
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_2.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_2.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_3.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_3.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_4.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_4.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_5.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_5.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_6.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_6.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_7.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_7.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_8.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_8.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_9.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_9.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_10.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_10.jpg',
        },
        {
          original: 'http://localhost:3000/images/slideshow/image_11.jpg',
          thumbnail: 'http://localhost:3000/images/slideshow/image_11.jpg',
        }
      ],
      headerTopConfig: {
        firstName: 'Naseer',
        lastName: 'Stone Traders',
        phoneNo: '9177 417 749'
      }
    },
    name: "Subhadip"
  }
}

var app = new App(attachElement, state);
app.render();
