import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
