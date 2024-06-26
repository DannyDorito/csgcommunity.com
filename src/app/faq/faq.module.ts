import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FaqRoutingModule } from "./faq-routing.module";
import { FaqComponent } from "./faq.component";

@NgModule({
    imports: [
        CommonModule,
        FaqRoutingModule,
        FaqComponent
    ]
})
export class FaqModule { }
