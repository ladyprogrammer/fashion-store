import { RouterTestingModule } from '@angular/router/testing';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LogoBarComponent } from './logo-bar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({ selector: 'mock', template: '' }) export class DummyComponent {}
const routes = [
  { path: '', component: DummyComponent },
  { path: 'shop', component: DummyComponent },
  { path: 'product', component: DummyComponent },
  { path: 'blog', component: DummyComponent },
  { path: 'portfolio', component: DummyComponent },
  { path: 'page', component: DummyComponent },
];

describe('LogoBarComponent', () => {
  let component: LogoBarComponent;
  let fixture: ComponentFixture<LogoBarComponent>;
  let logo: DebugElement;
  let menu: DebugElement;
  let search: DebugElement;
  let shoppingCart: DebugElement;
  let hamburger: DebugElement;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBarComponent ],
      imports: [ RouterTestingModule.withRoutes(routes) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    logo = fixture.debugElement.query(By.css('[data-test="logo"]'));
    menu = fixture.debugElement.query(By.css('[data-test="menu"]'));
    search = fixture.debugElement.query(By.css('[data-test="search"]'));
    shoppingCart = fixture.debugElement.query(By.css('[data-test="shopping-cart"]'));
    hamburger = fixture.debugElement.query(By.css('[data-test="hamburger"]'));

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should have a logo, menu, search, shopping cart', () => {
    expect(logo).toBeTruthy();
    expect(menu).toBeTruthy();
    expect(search).toBeTruthy();
    expect(shoppingCart).toBeTruthy();
    expect(hamburger).toBeTruthy();
  });

  it('should follow respective semantic html', () => {
    expect(logo?.name).toBe('h1');
    expect(menu?.name).toBe('nav');
    expect(hamburger?.name).toBe('button');
  });

  it('should go to / when the logo is clicked', () => {
    const logoAnchor = logo.query(By.css('a'));
    expect(logoAnchor.nativeElement).toBeInstanceOf(HTMLAnchorElement);

    expect(logoAnchor.attributes['href']).toBeTruthy();

    // (logoAnchor.nativeElement as HTMLAnchorElement).click();
    // fixture.detectChanges();

    // expect(location.path()).toEqual('');
    expect(logoAnchor.attributes['href']).toEqual('/');
  });
});




