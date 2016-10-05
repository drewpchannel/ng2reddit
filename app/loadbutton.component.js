'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _core = require('@angular/core');

var _http = require('@angular/http');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoadButton = exports.LoadButton = (_dec = (0, _core.Component)({
  selector: 'buttonTest',
  template: '\n    <button (click)=\'clicked($event)\'>Test Button</button>\n    '
}), _dec2 = (0, _core.Injectable)(), _dec(_class = _dec2(_class = function () {
  function LoadButton(Http) {
    _classCallCheck(this, LoadButton);
  }

  _createClass(LoadButton, [{
    key: 'clicked',
    value: function clicked(event) {
      console.log(event);
    }
  }]);

  return LoadButton;
}()) || _class) || _class);
//when i get back try http with out adding to provders.
//  look at docs and get that exmaple working.  
//if not follow udemy