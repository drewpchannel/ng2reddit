import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentExample } from './componentexample.component'
import { LoadButton } from './loadbutton.component'
import { AppComponent } from './app.component'
  // var ComponentExample = app.ComponentExample
  // var AppComponent = app.AppComponent;
  // var LoadButton = app.LoadButton;

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ComponentExample, LoadButton],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }