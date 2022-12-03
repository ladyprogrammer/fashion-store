import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { RatingPipe } from './rating.pipe';



@NgModule({
  declarations: [
    DummyComponent,
    RatingPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DummyComponent,
    RatingPipe,
  ]
})
export class SharedModule { }
