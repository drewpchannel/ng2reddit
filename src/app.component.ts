import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>Quote Of The Day</h1>
    <form (submit)="yup($event)">
        <input ngControl="subReddit" type="text" placeholder="Sub Reddit">
        <input ngControl="Height" type="text" placeholder="Height">
        <input ngControl="Width" type="text" placeholder="Width">
      <button type="submit">Load Reddit</button>
    </form>
  `
})
export class AppComponent {
  constructor(private http: Http) {
  }
  yup (event) {
    event.preventDefault();
    console.log(event.srcElement.0.value)
    // return this.http.get('https://www.reddit.com/r/webdev.json').toPromise()
    //   .then(response => console.log(response.json()));
  }
}