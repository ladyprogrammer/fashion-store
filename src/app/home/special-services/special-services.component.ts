import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SVG } from '../../shared/svg-icons';

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
    public domSanitizer: DomSanitizer
  ) { 
    this.planeIcon = this.sanitizeHtml(SVG.PLANE);
    this.clockIcon = this.sanitizeHtml(SVG.CLOCK);
    this.lifeRingIcon = this.sanitizeHtml(SVG.LIFE_RING);
  }

  ngOnInit(): void {
    
  }

  private sanitizeHtml(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
