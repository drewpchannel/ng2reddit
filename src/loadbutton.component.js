(function(app) {
  var Component = ng.core.Component;

  @Component ({
      selector: 'buttonTest',
      template: `
      <button>Test Button</button>
      `
  })
  class LoadButton {
    constructor () {
    }
  }

  app.LoadButton = LoadButton;

})(window.app = app || (window.app = {}))