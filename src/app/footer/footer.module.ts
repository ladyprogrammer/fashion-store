import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    FooterComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports: [ FooterComponent ]
})
export class FooterModule { }
