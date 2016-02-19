import {Component} from 'angular2/core';
import {Home} from '../home/home';
import {About} from '../about/about';
import {Contact} from '../contact/contact';
import {Post} from '../post/post';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterActive} from '../directives/router-active';
@Component({
  selector: 'headerTemplate',
  directives: [...ROUTER_DIRECTIVES, RouterActive],
  templateUrl :  '/app/global/header.html'
})
export class HeaderTemplate {

  constructor() {

  }
}
