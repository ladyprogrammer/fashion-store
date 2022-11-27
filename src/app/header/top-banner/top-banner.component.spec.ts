import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
