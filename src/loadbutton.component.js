(function(app) {
  var Component = ng.core.Component;

  @Component ({
      selector: 'buttonTest',
      template: `
      <button (click)='clicked($event)'>Test Button</button>
      `
  })
  class LoadButton {
    constructor () {
    }
    clicked(event) {
      console.log(event)
    }
  }

  app.LoadButton = LoadButton;

})(window.app = app || (window.app = {}))