"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var _dec, _class;

  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var RedditSampleService = app.RedditSampleService;
  var RandomQuoteComponent = app.RandomQuoteComponent;
  var ComponentExample = app.ComponentExample;
  var AppComponent = app.AppComponent;
  var LoadButton = app.LoadButton;

  var AppModule = (_dec = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ComponentExample, LoadButton],
    providers: [RedditSampleService],
    bootstrap: [AppComponent]
  }), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
  }) || _class);


  app.AppModule = AppModule;
})(window.app || (window.app = {}));