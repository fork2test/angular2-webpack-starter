import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Page} from '../global/services/page';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'contact',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  //providers: [Page],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [require('./contact.css')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./contact.html')
})
export class Contact {
  // Set our default values
  data = {value: ''};
  // TypeScript public modifiers
  constructor(page : Page) {
    page.setData('contact', 'contact me!');
  }

  ngOnInit() {
    console.log('contact `Contact` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
