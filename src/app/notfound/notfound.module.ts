import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotFoundRoutingModule } from "./notfound-routing.module";
import { NotfoundComponent } from "./notfound.component";

@NgModule({
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        NotfoundComponent
    ]
})
export class NotFoundModule { }

