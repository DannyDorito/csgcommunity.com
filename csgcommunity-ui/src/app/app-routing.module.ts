import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/404.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent, data: { title: 'FAQ' } },
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: '**', component: NotfoundComponent, data: { title: 'Not Found' } }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
