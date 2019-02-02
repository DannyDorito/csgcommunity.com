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
import { environment } from '../environments/environment';
import { MeetupComponent } from './meetup/meetup.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent, data: { title: 'FAQ' } },
  { path: 'forums', component: ForumsComponent, data: { title: 'Forums' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us'} },
  { path: 'servers', component: ServersComponent, data: { title: 'Servers'} },
  { path: 'rules', component: RulesComponent, data: { title: 'Rules' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Us' } },
  { path: 'meetup', component: MeetupComponent, data: { title: 'Meetup' } },
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: '**', component: NotfoundComponent, data: { title: 'Not Found' } }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        enableTracing: environment.tracing,
        scrollPositionRestoration: 'enabled'
      })
    ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
