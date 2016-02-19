import {Component} from 'angular2/core';
import {Page} from './services/page';
@Component({
  selector: 'introTemplate',
  //providers: [
  //  Page
  //],
  templateUrl: '/app/global/intro.html'
})
export class IntroTemplate {
  title:string;
  description:string;

  constructor(page:Page) {
    console.log('IntroTemplate: ' + page.title + ' ' + page.description);
    this.title = page.title;
    this.description = page.description;
  }
}
