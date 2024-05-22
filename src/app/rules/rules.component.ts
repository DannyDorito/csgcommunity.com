import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['../app.component.css'],
    standalone: true,
})
export class RulesComponent implements OnInit {
  ngOnInit() {
    const date = new Date().getTime();
    localStorage.setItem('lastViewedRules', String(date));
  }
}
