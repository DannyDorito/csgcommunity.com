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
import { ContactComponent } from './contact/contact.component';
import { DayZRestartScriptComponent } from './day-zrestart-script/day-zrestart-script.component';
import { ARMA3RestartScriptComponent } from './arma3-restart-script/arma3-restart-script.component';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { NgOptimizedImage } from '@angular/common';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    ServersComponent,
    RulesComponent,
    ContactComponent,
    DayZRestartScriptComponent,
    ARMA3RestartScriptComponent,
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
    MatTableModule,
    MatBadgeModule,
    NgOptimizedImage
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
