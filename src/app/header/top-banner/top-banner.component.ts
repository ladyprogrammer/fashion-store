import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'header-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  closeBanner() {
    this.container.nativeElement.remove();
  }
}
