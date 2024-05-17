import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
