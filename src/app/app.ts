/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import {Home} from './home/home';
import {About} from './about/about';
import {Contact} from './contact/contact';
import {Post} from './post/post';
import {HeaderTemplate} from "./global/headerTemplate";
import {FooterTemplate} from "./global/footerTemplate";
import {IntroTemplate} from "./global/introTemplate";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES, RouterActive, HeaderTemplate, FooterTemplate, IntroTemplate],
  pipes: [],
  styles: [],
  template: `
  <headerTemplate></headerTemplate>
    <introTemplate></introTemplate>
   <router-outlet></router-outlet>
   <footerTemplate></footerTemplate>
  `
})
@RouteConfig([
  {path: '/', component: Home, name: 'Index'},
  {path: '/home', component: Home, name: 'Home'},
  {path: '/about', component: About, name: 'About'},
  {path: '/contact', component: Contact, name: 'Contact'},
  {path: '/post', component: Post, name: 'Post'},
  {path: '/**', redirectTo: ['Index']}
])
export class App {

  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor() {

  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
