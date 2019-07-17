import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arma3-restart-script',
  templateUrl: './arma3-restart-script.component.html',
  styleUrls: ['../app.component.css']
})
export class ARMA3RestartScriptComponent implements OnInit {
  ngOnInit() {
    this.redirect();
  }

  redirect() {
    window.location.href = 'https://github.com/DannyDorito/ARMA-3-Startup-and-Restart-Script';
  }
}
