import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>Quote Of The Day</h1>
    <button (click)="yup()">Test</button>
  `
})
export class AppComponent {

  constructor(private http: Http) {
  }
  yup () {
    return this.http.get('https://www.reddit.com/r/webdev.json').toPromise()
      .then(response => console.log(response.json()));
  }
}