import { Component } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['../app.component.css']
})
export class ForumsComponent {
  development = environment.production;
}
