'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var _dec, _class;

  var Component = ng.core.Component;
  var Inject = ng.core.Inject;
  var RedditSampleService = app.RedditSampleService;

  var ComponentExample = (_dec = Component({
    selector: 'exampleTest',
    template: '<p>k</p>'
  }), _dec(_class = function ComponentExample() {
    _classCallCheck(this, ComponentExample);
  }) || _class);


  app.ComponentExample = ComponentExample;
})(window.app || (window.app = {}));