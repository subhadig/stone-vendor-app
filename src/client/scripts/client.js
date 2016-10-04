var App = require('../../app');

var attachElement = document.getElementById('app');

var state = {
  config: {
    pageConfig: {
      headerSlogan: "Best Stone Company"
    },
    name: "Subhadip"
  }
}

var app = new App(attachElement, state);
app.render();
