import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'faq',
    loadChildren: () => import( './faq/faq.module' ).then( m => m.FaqModule),
    data: { title: 'FAQ' }
  },
  {
    path: 'about',
    loadChildren: () => import( './about/about.module' ).then( m => m.AboutModule),
    data: { title: 'About Us' }
  },
  {
    path: 'servers',
    loadChildren: () => import( './servers/servers.module' ).then( m => m.ServersModule),
    data: { title: 'Servers' }
  },
  {
    path: 'rules',
    loadChildren: () => import( './rules/rules.module' ).then( m => m.RulesModule),
    data: { title: 'Rules' }
  },
  {
    path: 'contact',
    loadChildren: () => import( './contact/contact.module' ).then( m => m.ContactModule),
    data: { title: 'Contact Us' },
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import( './home/home.module' ).then( m => m.HomeModule),
    data: { title: 'Home' }
  },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {
    path: '**',
    data: { title: 'Not Found' },
    loadChildren: () => import( './notfound/notfound.module' ).then( m => m.NotFoundModule),
  },
];

@NgModule( {
  imports: [
    RouterModule.forRoot( routes, {
      scrollPositionRestoration: 'enabled',
    } ),
  ],
  exports: [ RouterModule ],
} )
export class AppRoutingModule { }
