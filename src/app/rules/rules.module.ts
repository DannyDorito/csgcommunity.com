import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RulesComponent } from "./rules.component";
import { RulesRoutingModule } from "./rules-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RulesRoutingModule,
        RulesComponent
    ]
})
export class RulesModule { }
