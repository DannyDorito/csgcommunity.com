import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { MatNavList, MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', '../styles.css'],
    animations: [
        trigger('sidenavAnimationIsExpanded', [
            state('true', style({
                width: '200px',
            })),
            state('false', style({
                width: '64px',
            })),
            transition('false <=> true', animate('100ms ease')),
        ]),
    ],
    standalone: true,
    imports: [
        MatSidenavContainer,
        MatSidenav,
        MatNavList,
        MatListItem,
        NgIf,
        MatIcon,
        MatListItemIcon,
        NgClass,
        RouterLinkActive,
        RouterLink,
        MatListItemTitle,
        MatSidenavContent,
        RouterOutlet,
    ],
})
export class AppComponent implements OnInit {

  isExpanded = false;
  animating = false;
  constructor(
    public snackBar: MatSnackBar,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'forum',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/forum.svg')
    );
    iconRegistry.addSvgIcon(
      'help_outline',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg-icons/help_outline.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/home.svg')
    );
    iconRegistry.addSvgIcon(
      'people',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/people.svg')
    );
    iconRegistry.addSvgIcon(
      'speaker_notes',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg-icons/speaker_notes.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'videogame_asset',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg-icons/videogame_asset.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'chevron_left',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg-icons/chevron_left.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'chevron_right',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg-icons/chevron_right.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'alternate_email',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg-icons/alternate_email.svg'
      )
    );
  }

  ngOnInit() {
    if (!navigator.onLine) {
      this.openSnackBar(
        'You are offline, website usage is limited! 🌐',
        'Okay'
      );
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
