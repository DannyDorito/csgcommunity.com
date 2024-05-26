import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ServersComponent } from "./servers.component";
import { ServersRoutingModule } from "./servers-routing.module";
import { MatListModule } from "@angular/material/list";
import { NgOptimizedImage } from '@angular/common'

@NgModule({
    imports: [
        CommonModule,
        ServersRoutingModule,
        MatListModule,
        NgOptimizedImage,
        ServersComponent,
    ]
})
export class ServersModule { }
