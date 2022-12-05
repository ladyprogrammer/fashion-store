import { AfterViewInit, Component, ElementRef, HostListener, Input, isDevMode, OnInit, ViewChild } from '@angular/core';
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
  searchIcon: SafeHtml;
  shoppingCartIcon: SafeHtml;
  hamburgerIcon: SafeHtml;

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
    private domSanitizer: DomSanitizer
  ) {
    this.isShowSearch = false;
    this.isInside = false;
    this.searchIcon = this.domSanitizer.bypassSecurityTrustHtml(SvgIcons.SEARCH);
    this.shoppingCartIcon = this.domSanitizer.bypassSecurityTrustHtml(SvgIcons.SHOPPING_CART);
    this.hamburgerIcon = this.domSanitizer.bypassSecurityTrustHtml(SvgIcons.HAMBURGER);

  }

  openSearchModal(): void {
    if ( isDevMode() )console.log('[LogoBarComponent] openSearchModal()');
    this.isShowSearch = ! this.isShowSearch;
  }

}
