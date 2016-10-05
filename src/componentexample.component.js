(function(app) {
  var Component = ng.core.Component;
  var Inject = ng.core.Inject;
  var RedditSampleService = app.RedditSampleService;

  @Component({
    selector: 'exampleTest',
    template: '<p>k</p>'
  })
  class ComponentExample {
    constructor() {
    }
  }

  app.ComponentExample = ComponentExample;

})(window.app || (window.app = {}));
