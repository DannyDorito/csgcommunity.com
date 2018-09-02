import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css', '../app.component.css']
})
export class RulesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const date = new Date().getTime();
    localStorage.setItem('lastViewedRules', String(date));
  }
}
