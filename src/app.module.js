(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var RedditSampleService = app.RedditSampleService;
  var RandomQuoteComponent = app.RandomQuoteComponent;
  var ComponentExample = app.ComponentExample
  var AppComponent = app.AppComponent;
  var LoadButton = app.LoadButton;

  @NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ComponentExample, LoadButton],
    providers: [RedditSampleService],
    bootstrap: [AppComponent]
  })
  class AppModule { }

  app.AppModule = AppModule;

})(window.app || (window.app = {}));
