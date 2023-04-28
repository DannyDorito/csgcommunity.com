import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-day-zrestart-script',
  templateUrl: './day-zrestart-script.component.html',
  styleUrls: [ '../app.component.css' ]
} )
export class DayZRestartScriptComponent implements OnInit
{
  ngOnInit ()
  {
    this.redirect();
  }

  redirect ()
  {
    window.location.href = 'https://github.com/DannyDorito/DayZ-Startup-and-Restart-Script';
  }
}
