import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', '../app.component.css'],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class HomeComponent {}
