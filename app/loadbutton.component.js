'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var _dec, _class;

  var Component = ng.core.Component;

  var LoadButton = (_dec = Component({
    selector: 'buttonTest',
    template: '\n      <button>Test Button</button>\n      '
  }), _dec(_class = function LoadButton() {
    _classCallCheck(this, LoadButton);
  }) || _class);


  app.LoadButton = LoadButton;
})(window.app = app || (window.app = {}));