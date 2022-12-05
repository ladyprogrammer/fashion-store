import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SvgIcons } from '@shared/svg-icons';

@Component({
  selector: 'header-logo-bar',
  templateUrl: './logo-bar.component.html',
  styleUrls: ['./logo-bar.component.scss']
})
export class LogoBarComponent implements OnInit {
  isShowSearch = false;
  isInside = false;
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
    this.searchIcon = this.domSanitizer.bypassSecurityTrustHtml(SvgIcons.SEARCH);
    this.shoppingCartIcon = this.domSanitizer.bypassSecurityTrustHtml(SvgIcons.SHOPPING_CART);
    this.hamburgerIcon = this.domSanitizer.bypassSecurityTrustHtml(SvgIcons.HAMBURGER);

  }

  ngOnInit(): void {
  }

  openSearchModal(): void {
    this.isShowSearch = ! this.isShowSearch;
  }

}
