import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/404.component';
import { AboutComponent } from './about/about.component';
import { ServersComponent } from './servers/servers.component';
import { RulesComponent } from './rules/rules.component';
import { ForumsComponent } from './forums/forums.component';

// services
import { FaqService } from './faq/faq.service';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// service worker
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    ServersComponent,
    RulesComponent,
    ForumsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    // routing
    AppRoutingModule,
    // material
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    // service worker
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
