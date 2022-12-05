import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgIcons } from '@shared/svg-icons';

@Component({
  selector: 'section-special-services',
  templateUrl: './special-services.component.html',
  styleUrls: ['./special-services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpecialServicesComponent implements OnInit {
  planeIcon: SafeHtml;
  clockIcon: SafeHtml;
  lifeRingIcon: SafeHtml;

  constructor(
    public sanitizer: DomSanitizer
  ) { 
    this.planeIcon = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.PLANE);
    this.clockIcon = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.CLOCK);
    this.lifeRingIcon = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.LIFE_RING);
  }

  ngOnInit(): void {
    
  }
  
}
