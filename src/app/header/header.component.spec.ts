import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have top banner, welcome bar and logo bar', () => {
    const topBanner = fixture.nativeElement.querySelector('[data-test="top-banner"]');
    const welcomeBar = fixture.nativeElement.querySelector('[data-test="welcome-bar"]');
    const logoBar = fixture.nativeElement.querySelector('[data-test="logo-bar"]');

    expect(topBanner).toBeTruthy();
    expect(welcomeBar).toBeTruthy();
    expect(logoBar).toBeTruthy();
  });

});
