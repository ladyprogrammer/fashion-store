import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MidsectionModule } from './midsection/midsection.module';
import { SharedModule } from './shared/shared.module';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HeaderModule,
    MidsectionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
