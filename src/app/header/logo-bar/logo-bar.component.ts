import { Component, HostListener, isDevMode } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgIcons } from '@shared/svg-icons';

@Component({
  selector: 'header-logo-bar',
  templateUrl: './logo-bar.component.html',
  styleUrls: ['./logo-bar.component.scss']
})
export class LogoBarComponent {
  isShowSearch: boolean;
  isInside: boolean;

  @HostListener('click') onClick() {
    this.isInside = true;
  }

  @HostListener('document:click') bigClick() {
    if (this.isInside) {
      this.isInside = false;
    }
    else {
      this.isShowSearch = false;
    }
  }


  constructor(
  ) {
    this.isShowSearch = false;
    this.isInside = false;
  }

  openSearchModal(): void {
    if ( isDevMode() )console.log('[LogoBarComponent] openSearchModal()');
    this.isShowSearch = ! this.isShowSearch;
  }

}
