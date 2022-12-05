import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgIcons } from '@shared/svg-icons';

@Component({
  selector: 'header-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
})
export class TopBannerComponent implements OnInit {
  closeIcon: SafeHtml;
  @ViewChild('container') container!: ElementRef;

  constructor(
    private sanitizer: DomSanitizer
  ) { 
    this.closeIcon = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.XMARK);
  }

  ngOnInit(): void {
  }

  closeBanner() {
    this.container.nativeElement.remove();
  }
}
