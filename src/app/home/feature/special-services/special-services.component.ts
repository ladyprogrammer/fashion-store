import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SvgIcons } from '@shared/svg-icons';
import { SpecialService } from '@shared/models/special-service';

@Component({
  selector: 'section-special-services',
  templateUrl: './special-services.component.html',
  styleUrls: ['./special-services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpecialServicesComponent implements OnInit {
  specialServices: SpecialService[];

  constructor(
  ) { 
    this.specialServices = [
      { 
        title: 'Free Shipping',
        description: 'With &euro;50 or more orders',
        icon: SvgIcons.PLANE
      },
      {
        title: 'Free Refund',
        description: '100% Refund within 3 days',
        icon: SvgIcons.CLOCK
      },
      {
        title: 'Support 24.7',
        description: 'Call us anytime you want',
        icon: SvgIcons.LIFE_RING
      }
    ];
  }

  ngOnInit(): void {
    
  }

  
  
}
