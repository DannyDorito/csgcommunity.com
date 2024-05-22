import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
import { AppRoutingModule } from './app-routing.module';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};

@NgModule( {
  declarations: [AppComponent],
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
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ],
  bootstrap: [ AppComponent ],
} )
export class AppModule { }
