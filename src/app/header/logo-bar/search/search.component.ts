import { Component, HostBinding, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'modal-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResult!: any[];   // TODO: refactor any
  isSearch!: boolean;

  constructor(
    private searchService: SearchService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  search(text: string): void {
    this.searchService.getProducts(text).subscribe((products) => {
      this.searchResult = products;
    });
    this.router.navigate([ '/search' ]);
  }


}
