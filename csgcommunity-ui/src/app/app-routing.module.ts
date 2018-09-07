import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/404.component';
import { AboutComponent } from './about/about.component';
import { ServersComponent } from './servers/servers.component';
import { RulesComponent } from './rules/rules.component';
import { ForumsComponent } from './forums/forums.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent, data: { title: 'FAQ' } },
  { path: 'forums', component: ForumsComponent, data: { title: 'Forums' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us'} },
  { path: 'servers', component: ServersComponent, data: { title: 'Servers'} },
  { path: 'rules', component: RulesComponent, data: { title: 'Rules' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Us' } },
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
