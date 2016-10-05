'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var _dec, _class;

  var Component = ng.core.Component;

  var LoadButton = (_dec = Component({
    selector: 'buttonTest',
    template: '\n      <button (click)=\'clicked($event)\'>Test Button</button>\n      '
  }), _dec(_class = function () {
    function LoadButton() {
      _classCallCheck(this, LoadButton);
    }

    _createClass(LoadButton, [{
      key: 'clicked',
      value: function clicked(event) {
        console.log(event);
      }
    }]);

    return LoadButton;
  }()) || _class);


  app.LoadButton = LoadButton;
})(window.app = app || (window.app = {}));