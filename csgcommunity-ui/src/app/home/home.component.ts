import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  logoSource = '';

  ngOnInit() {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum >= 7) {
      this.logoSource = 'assets/logo-large-dog.png';
    } else if (randomNum < 7 && randomNum > 3) {
      this.logoSource = 'assets/logo-large.png';
    } else {
      this.logoSource = 'assets/logo-large-cph.png';
    }
  }
}
