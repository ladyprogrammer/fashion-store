import { NgModule } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DummyComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    CommonModule,
    DummyComponent,
    HeaderModule,
    FooterModule,
  ]
})
export class SharedModule { }
