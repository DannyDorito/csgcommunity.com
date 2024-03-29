import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/404.component';
import { AboutComponent } from './about/about.component';
import { ServersComponent } from './servers/servers.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { DayZRestartScriptComponent } from './day-zrestart-script/day-zrestart-script.component';
import { ARMA3RestartScriptComponent } from './arma3-restart-script/arma3-restart-script.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: 'faq', component: FaqComponent, data: { title: 'FAQ' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'servers', component: ServersComponent, data: { title: 'Servers' } },
  { path: 'rules', component: RulesComponent, data: { title: 'Rules' } },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us' },
  },
  {
    path: 'projects/dayzrestart',
    component: DayZRestartScriptComponent,
    data: { title: 'DayZ Restart Script' },
  },
  {
    path: 'projects/arma3restart',
    component: ARMA3RestartScriptComponent,
    data: { title: 'ARMA 3 Restart Script' },
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  { path: '**', component: NotfoundComponent, data: { title: 'Not Found' } },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: environment.tracing,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
