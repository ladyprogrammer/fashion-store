import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComponent, MockComponent ],
      imports: [ 
        RouterTestingModule.withRoutes([
          { path: 'shop', component: MockComponent },
        ]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  describe('content', () => {
    it('should have the title', () => {
      const title = fixture.nativeElement.querySelector('[data-test="title"]');
      expect(title).toBeTruthy();
    });
  
    it('should have content', () => {
      const content = fixture.nativeElement.querySelector('[data-test="description"]');
      expect(content).toBeTruthy();
    });
  });
  

  describe('shop button', () => {
    it('should have the shop now button', () => {
      const button = fixture.nativeElement.querySelector('[data-test="shop-now-button"]');
      expect(button).toBeTruthy();
      expect(button).toBeInstanceOf(HTMLButtonElement);
    });
  
    it('should go to the shop page when clicked', async () => {
      const button = fixture.nativeElement.querySelector('[data-test="shop-now-button"]') as HTMLButtonElement;
      await button.click();
      expect(location.path()).toBe('/shop');
    });
  });

});


@Component({
  template: '',
})
export class MockComponent {}