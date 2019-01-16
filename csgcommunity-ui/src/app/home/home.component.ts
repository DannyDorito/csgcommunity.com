import { Component, OnInit } from '@angular/core';
import { IPQueryService } from '../ipquery/ipquery.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  logoSource = '';
  csg = '';

  constructor(private ipQuery: IPQueryService) {}

  ngOnInit() {
    let ip = '';
    this.ipQuery.getClientIP().subscribe(data => {
      ip = data['ip'].toString();
      if (ip === environment.ip) {
        this.csg = 'Cailee Steals Guy';
      } else {
        this.csg = 'Cerberus Stomping Grounds';
      }
    });

    if (Math.random() >= 0.2) {
      this.logoSource = 'assets/logo-large.jpg';
    } else {
      this.logoSource = 'assets/logo-large-alt.png';
    }
  }
}
