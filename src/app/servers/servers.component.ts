import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['../app.component.css'],
    standalone: true,
    imports: [MatList, MatListItem],
})
export class ServersComponent {}
