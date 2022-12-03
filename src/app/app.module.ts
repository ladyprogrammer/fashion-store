import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MidsectionModule } from './midsection/midsection.module';
import { SharedModule } from './shared/shared.module';
import { SearchResultComponent } from './search-result/search-result.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './mock-data/in-memory-data.service';

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
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
