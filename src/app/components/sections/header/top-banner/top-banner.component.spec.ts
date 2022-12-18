import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TopBannerComponent } from './top-banner.component';

describe('TopBannerComponent', () => {
  let component: TopBannerComponent;
  let fixture: ComponentFixture<TopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('content', () => {
    it('should be present', () => {
      const content = fixture.nativeElement.querySelector('[data-test="message"]');
      expect(content).toBeTruthy();
    });
  });

  describe('close button', () => {
    let closeButton: unknown;

    beforeEach(() => {
      closeButton = fixture.nativeElement.querySelector('[data-test="close-button"]');
    });

    it('should be present', () => {
      expect(closeButton).toBeTruthy();
      expect(closeButton).withContext('should be button element').toBeInstanceOf(HTMLButtonElement);
    });

    it('should close the banner if clicked', waitForAsync(() => {
      (<HTMLButtonElement>closeButton).click();
      fixture.detectChanges();
        
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const topBanner = fixture.nativeElement.querySelector('[data-test="top-banner"]');
        expect(topBanner).toBeFalsy();
      });
    }) );
    
  });
});
