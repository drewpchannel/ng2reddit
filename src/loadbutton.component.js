import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Component ({
    selector: 'buttonTest',
    template: `
    <button (click)='clicked($event)'>Test Button</button>
    `
})
@Injectable()
export class LoadButton {
  constructor (Http) {
  }
  clicked(event) {
    console.log(event)
  }
}
//when i get back try http with out adding to provders.
//  look at docs and get that exmaple working.  
//if not follow udemy