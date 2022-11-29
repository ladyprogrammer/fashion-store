import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
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

  it('should have the content and close button', () => {
    const content = fixture.nativeElement.querySelector('[data-test="content"]');
    const closeButton = fixture.nativeElement.querySelector('[data-test="close-button"]');
    expect(content).toBeTruthy();
    expect(closeButton).toBeTruthy();
    expect(closeButton).toBeInstanceOf(HTMLButtonElement);
  });

  it('should close the banner if close button is clicked', () => {
    const button = fixture.nativeElement.querySelector('[data-test="close-button"]') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    const container = fixture.nativeElement.querySelector('[data-test="container"]');
    expect(container).toBeFalsy();
  });
});
