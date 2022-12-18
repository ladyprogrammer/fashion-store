import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'header-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
})
export class TopBannerComponent implements OnInit {
  @ViewChild('topBanner') divBanner!: ElementRef;

  constructor(
    private renderer: Renderer2   // TODO: implement site-wide
  ) { 
  }

  ngOnInit(): void {
  }
  

  closeBanner(): void {
    const parentNode = this.renderer.parentNode(this.divBanner.nativeElement);
    const childNode = this.renderer.selectRootElement(this.divBanner.nativeElement);
    this.renderer.removeChild(parentNode, childNode);
    this.renderer.addClass(document.body, 'no-banner');
  }
}
