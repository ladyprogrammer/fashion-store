import { Component, isDevMode, OnInit, ViewEncapsulation } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SvgIcons } from '@shared/svg-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'section-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts!: Product[];
  isDefault: boolean;
  leftCaretIcon: SafeHtml;
  rightCaretIcon: SafeHtml;

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) {
    this.isDefault = true;
    this.leftCaretIcon = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.LEFT_CARET);
    this.rightCaretIcon = this.sanitizer.bypassSecurityTrustHtml(SvgIcons.RIGHT_CARET);
  }

  ngOnInit(): void {
    this.displayProducts()
  }

  displayProducts(): void {
    this.productService.getProducts()
      .pipe(
        tap( (products) => { if ( isDevMode() ) { console.log('[ProductService] displayProducts()', products) } })
      )
      .subscribe(
        (products) => this.featuredProducts = products
      );
  }

  showNext(): void {
    this.isDefault = false;
  }

  showPrevious(): void {
    this.isDefault = true;
  }

}
