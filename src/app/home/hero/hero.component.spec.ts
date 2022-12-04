import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the title, content and shop now button', () => {
    const title = fixture.nativeElement.querySelector('[data-test="title"]');
    const content = fixture.nativeElement.querySelector('[data-test="content"]');
    const button = fixture.nativeElement.querySelector('[data-test="shop-now-button"]');
    expect(title).toBeTruthy();
    expect(content).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('should follow semantic HTML', () => {
    const button = fixture.nativeElement.querySelector('[data-test="shop-now-button"]');
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });
});
