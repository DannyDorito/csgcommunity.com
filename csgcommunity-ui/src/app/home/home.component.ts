import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  logoSource = '';

  ngOnInit() {
    const randomNum = this.getRandomInt(10);
    console.log(randomNum);
    if (randomNum <= 1) {
      this.logoSource = 'assets/logo-large-cph.png';
    } else if (randomNum >= 9) {
      this.logoSource = 'assets/logo-large-dog.png';
    } else {
      this.logoSource = 'assets/logo-large.png';
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
