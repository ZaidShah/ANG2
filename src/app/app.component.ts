import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <nav>
    <a routerLink="/countries" routerLinkActive="active">Countries</a>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
