import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MidsectionComponent } from './midsection/midsection.component';

const routes: Routes = [
  { path: '', component: MidsectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
