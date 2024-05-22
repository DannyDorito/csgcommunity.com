import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['../app.component.css'],
    standalone: true,
    imports: [MatList, MatListItem],
})
export class AboutComponent {}
