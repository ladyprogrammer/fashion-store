import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { LogoBarComponent } from './logo-bar/logo-bar.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { WelcomeBarComponent } from './welcome-bar/welcome-bar.component';
import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TopBannerComponent,
    WelcomeBarComponent,
    LogoBarComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
