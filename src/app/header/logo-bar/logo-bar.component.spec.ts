import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LogoBarComponent } from './logo-bar.component';

describe('LogoBarComponent', () => {
  let component: LogoBarComponent;
  let fixture: ComponentFixture<LogoBarComponent>;
  let logo: DebugElement;
  let menu: DebugElement;
  let search: DebugElement;
  let shoppingCart: DebugElement;
  let hamburger: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBarComponent ]
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
  })
});
