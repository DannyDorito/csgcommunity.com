import { RouterModule, Routes } from "@angular/router"
import { NgModule } from "@angular/core"
import { NotfoundComponent } from "./notfound.component"

const routes: Routes = [
  {
    path: '',
    component: NotfoundComponent
  }
]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class NotFoundRoutingModule { }
