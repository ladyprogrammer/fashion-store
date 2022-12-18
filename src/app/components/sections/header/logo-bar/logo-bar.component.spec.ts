import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LogoBarComponent } from './logo-bar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DummyComponent } from '@shared/dummy/dummy.component';
import { SearchComponent } from './search/search.component';


describe('LogoBarComponent', () => {
  let component: LogoBarComponent;
  let fixture: ComponentFixture<LogoBarComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBarComponent, SearchComponent ],
      imports: [ 
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent },
          { path: 'shop', component: DummyComponent },
          { path: 'product', component: DummyComponent },
          { path: 'blog', component: DummyComponent },
          { path: 'portfolio', component: DummyComponent },
          { path: 'page', component: DummyComponent },
        ]), 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  describe('logo', () => {
    let logo: DebugElement;
    let logoAnchor: DebugElement;

    beforeEach(() => {
      logo = fixture.debugElement.query(By.css('[data-test="logo"]'));
      logoAnchor = logo.query(By.css('a'));
    });

    it('should be present', () => {
      expect(logo).toBeTruthy();
      expect(logoAnchor.nativeElement).toBeInstanceOf(HTMLAnchorElement);
    });

    it('should go to home page when the logo is clicked', async () => {
      await logoAnchor.nativeElement.click();
      expect(location.path()).toBe('/');
    });
  });

  describe('menu', () => {
    const menuItems = [ 'home', 'shop', 'product', 'blog', 'portfolio', 'page' ]; // add/remove menu items to test

    menuItems.forEach((menuItem) => {
      describe(`${menuItem}`, () => {
        let menuElement: DebugElement;
  
        beforeEach(() => {
          menuElement = fixture.debugElement.query(By.css(`[data-test="${menuItem}-link"]`));
        });
  
        it('should be present', () => {
          expect(menuElement).toBeTruthy();
        });
    
        it(`should go to ${menuItem} page`, async () => {
          await menuElement?.nativeElement.click();
          const expectedLocation = (menuItem === 'home') ? '/' : `/${menuItem}`;
          expect(location.path()).toBe(expectedLocation);
        });
      });
    });
  });

  describe('search', () => {
    let search: DebugElement;

    beforeEach(() => {
      search = fixture.debugElement.query(By.css('[data-test="search"]'));
    });

    it('should be present', () => {
      expect(search).toBeTruthy();
    });

    it('should show search form when clicked', () => {
      component.openSearchModal();
      fixture.detectChanges();
      const modalElement = fixture.debugElement.query(By.css('modal-search'));
      expect(modalElement.nativeElement?.outerHTML).toContain('modal-search');
    });
  });

  describe('shopping cart', () => {
    let shoppingCart: DebugElement;

    beforeEach(() => {
      shoppingCart = fixture.debugElement.query(By.css('[data-test="shopping-cart"]'));
    });

    it('should', () => {
      expect(shoppingCart).toBeTruthy();
    });
  });

  describe('hamburger', () => {
    let hamburger: DebugElement;

    beforeEach(() => {
      hamburger = fixture.debugElement.query(By.css('[data-test="hamburger"]'));
    });

    it('should', () => {
      expect(hamburger).toBeTruthy();
    });
  });

});




