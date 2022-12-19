import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from '../dummy/dummy.component';

const routes: Routes = [
  { path: 'shop', component: DummyComponent },
  { path: 'product', component: DummyComponent },
  { path: 'blog', component: DummyComponent },
  { path: 'portfolio', component: DummyComponent },
  { path: 'page', component: DummyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
