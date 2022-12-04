import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'demo-dummy',
  template: '<div>Just a dummy component</div><div>{{ location.path() }}</div>',
  styles: [ 'div { text-align: center; margin-top: 10rem; }' ]
})
export class DummyComponent {
  constructor(
    protected location: Location
  ) {}
}
