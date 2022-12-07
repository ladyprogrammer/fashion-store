import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { AddressComponent } from './address/address.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    FooterComponent,
    AddressComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports: [ FooterComponent ]
})
export class FooterModule { }
