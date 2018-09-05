import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

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
  constructor(
    public snackBar: MatSnackBar,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon('forum', sanitizer.bypassSecurityTrustResourceUrl('assets/forum.svg'));
      iconRegistry.addSvgIcon('help_outline', sanitizer.bypassSecurityTrustResourceUrl('assets/help_outline.svg'));
      iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/home.svg'));
      iconRegistry.addSvgIcon('people', sanitizer.bypassSecurityTrustResourceUrl('assets/people.svg'));
      iconRegistry.addSvgIcon('speaker_notes', sanitizer.bypassSecurityTrustResourceUrl('assets/speaker_notes.svg'));
      iconRegistry.addSvgIcon('videogame_asset', sanitizer.bypassSecurityTrustResourceUrl('assets/videogame_asset.svg'));
    }

  ngOnInit() {
    if (!navigator.onLine) {
      this.openSnackBar('You are offline, website usage is limited! 🌐', 'Okay');
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
