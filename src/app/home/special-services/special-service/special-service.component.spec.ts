import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialServiceComponent } from './special-service.component';

describe('SpecialServiceComponent', () => {
  let component: SpecialServiceComponent;
  let fixture: ComponentFixture<SpecialServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have icon', () => {
    const icon = fixture.nativeElement.querySelector('[data-test="icon"]');
    expect(icon).toBeTruthy();
  });

  it('should have title', () => {
    const title = fixture.nativeElement.querySelector('[data-test="title"]');
    expect(title).toBeTruthy();
  });

  it('should have description', () => {
    const description = fixture.nativeElement.querySelector('[data-test="description"]');
    expect(description).toBeTruthy();
  });
});
