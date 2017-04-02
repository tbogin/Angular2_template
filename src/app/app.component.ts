import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <albums></albums>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teds Angular 2 Blog';
}
