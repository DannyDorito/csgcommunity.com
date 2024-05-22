import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ServersComponent } from "./servers.component";
import { ServersRoutingModule } from "./servers-routing.module";
import { MatListModule } from "@angular/material/list";

@NgModule({
    imports: [
        CommonModule,
        ServersRoutingModule,
        MatListModule,
        ServersComponent,
    ]
})
export class ServersModule { }
