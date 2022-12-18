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
      const content = fixture.debugElement.query(By.css('[data-test="message"]'));
      expect(content).toBeTruthy();
    });
  });

  describe('close button', () => {
    let closeButton: unknown;

    beforeEach(() => {
      closeButton = fixture.debugElement.query(By.css('[data-test="close-button"]'));
    });

    it('should be present', () => {
      expect(closeButton).toBeTruthy();
      expect((closeButton as DebugElement)?.nativeElement)
        .withContext('should be button element')
        .toBeInstanceOf(HTMLButtonElement);
    });

    xit('should close the banner if clicked', waitForAsync(() => {
      // (closeButton as DebugElement)?.triggerEventHandler('click', null);
      (closeButton as DebugElement)?.nativeElement.click();
      fixture.detectChanges();
        
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const topBanner = fixture.debugElement.query(By.css('[data-test="top-banner"]'));
        expect(topBanner).toBeFalsy();
      });
    }) );
    
  });
});
