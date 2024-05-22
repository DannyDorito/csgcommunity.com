import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule,
        MatListModule,
        AboutComponent
    ]
})
export class AboutModule { }
