import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  logoSource = '';

  ngOnInit() {
    if (Math.random() >= 0.2) {
      this.logoSource = 'assets/logo-large.png';
    } else {
      this.logoSource = 'assets/logo-large-alt.jpg';
    }
  }
}
