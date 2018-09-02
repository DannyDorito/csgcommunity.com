import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

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
export class AppComponent implements OnInit {
  isExpanded = false;
  animating = false;
  rulesLastUpdated = new Date('September 02, 2018');
  constructor(
    public snackBar: MatSnackBar) {}

  ngOnInit() {
    if (!navigator.onLine) {
      this.openSnackBar('You are offline, website usage is limited!', 'Okay', 0);
    }
    this.rulesUpdated();
  }

  rulesUpdated() {
    try {
      const lastViewedRules = Number(localStorage.getItem('lastViewedRules'));
      if (lastViewedRules >= this.rulesLastUpdated.getTime()) {
        return true;
      } else {
        return false;
      }
    } catch (Exception) {
      return false;
    }
  }

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

  openSnackBar(message: string, action: string, length: number) {
    this.snackBar.open(message, action, {
      duration: length
    });
  }
}
