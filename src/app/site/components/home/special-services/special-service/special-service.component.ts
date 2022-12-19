import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgIcons } from '@shared/svg-icons';
import { SpecialService } from '@shared/models/special-service';

@Component({
  selector: 'block-special-service',
  templateUrl: './special-service.component.html',
  styleUrls: ['./special-service.component.scss']
})
export class SpecialServiceComponent {
  @Input() content: SpecialService;

  constructor(
    public sanitizer: DomSanitizer
  ) {
    this.content = {
      title: '',
      description: '',
      icon: ''
    };

  }
}
