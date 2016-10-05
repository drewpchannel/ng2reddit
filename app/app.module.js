'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _platformBrowser = require('@angular/platform-browser');

var _componentexample = require('./componentexample.component');

var _loadbutton = require('./loadbutton.component');

var _app = require('./app.component');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var ComponentExample = app.ComponentExample
// var AppComponent = app.AppComponent;
// var LoadButton = app.LoadButton;

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
  imports: [_platformBrowser.BrowserModule],
  declarations: [_app.AppComponent, _componentexample.ComponentExample, _loadbutton.LoadButton],
  providers: [],
  bootstrap: [_app.AppComponent]
}), _dec(_class = function AppModule() {
  _classCallCheck(this, AppModule);
}) || _class);