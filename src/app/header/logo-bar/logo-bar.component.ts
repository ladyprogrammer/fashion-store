import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'header-logo-bar',
  templateUrl: './logo-bar.component.html',
  styleUrls: ['./logo-bar.component.scss']
})
export class LogoBarComponent implements OnInit {
  isShowSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSearchModal(): void {
    this.isShowSearch = ! this.isShowSearch;
  }

}
