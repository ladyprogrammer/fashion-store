import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBarComponent } from './welcome-bar.component';

describe('WelcomeBarComponent', () => {
  let component: WelcomeBarComponent;
  let fixture: ComponentFixture<WelcomeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have hello message, email, language and currency', () => {
    const helloMessage = fixture.nativeElement.querySelector('[data-test="hello-message"]');
    const email = fixture.nativeElement.querySelector('[data-test="email"]');
    const language = fixture.nativeElement.querySelector('[data-test="language"]');
    const currency = fixture.nativeElement.querySelector('[data-test="currency"]');
    expect(helloMessage).toBeTruthy();
    expect(email).toBeTruthy();
    expect(language).toBeTruthy();
    expect(currency).toBeTruthy();
  });
});
