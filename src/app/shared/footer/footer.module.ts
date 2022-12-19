import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { AddressComponent } from './address/address.component';
import { AccountComponent } from './account/account.component';
import { ProductComponent } from './product/product.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { PaymentComponent } from './payment/payment.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';


@NgModule({
  declarations: [
    FooterComponent,
    AddressComponent,
    AccountComponent,
    ProductComponent,
    SocialNetworksComponent,
    PaymentComponent,
    BottomMenuComponent,    // TODO: not a known element
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports: [ FooterComponent ]
})
export class FooterModule { }
