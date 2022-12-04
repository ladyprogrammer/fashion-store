import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: [ './dummy.component.scss' ]
})
export class DummyComponent implements OnInit {
  path: string;
  
  constructor(
    private location: Location,
  ) {
    this.path = location.path();
  }

  ngOnInit(): void {
    this.location.subscribe(
      (currentLocation) => this.path = currentLocation.url ?? 'no path'
    );
  }

  goBack(): void {
    this.location.back();
  }
}
