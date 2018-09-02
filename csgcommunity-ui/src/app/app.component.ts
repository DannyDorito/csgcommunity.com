import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('sidenavAnimationIsExpanded', [
      state('true', style({
        width: '200px'
      })),
      state('false', style({
        width: '64px'
      })),
      transition('false <=> true', animate('100ms ease'))
    ])
  ]
})
export class AppComponent  {
  isExpanded = false;
  animating = false;

  constructor() {}

  start() {
    this.animating = true;
    this.tick();
  }

  done() {
    this.animating = false;
  }

  tick() {
    if (this.animating) {
      requestAnimationFrame(() => this.tick());
    }
  }
}
