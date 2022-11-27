import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBannerComponent } from './header/top-banner/top-banner.component';
import { WelcomeBarComponent } from './header/welcome-bar/welcome-bar.component';
import { LogoBarComponent } from './header/logo-bar/logo-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBannerComponent,
    WelcomeBarComponent,
    LogoBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
