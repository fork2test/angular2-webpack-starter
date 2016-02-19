import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class Page {
  public title : string;
  public description : string;

  constructor() {
    console.log('costruisco Page');
  }

  public setData(title : string, description : string) {
    console.log('title: ' + title + ' - description: ' + description);
    this.title = title;
    this.description = description;
  }

}
