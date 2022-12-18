import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'demo-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  result!: any[];   // TODO: refactor any

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.displayResult();
  }

  displayResult(): void {
    this.searchService.getProducts().subscribe(
      (products) => this.result = products
    );
  }

}
