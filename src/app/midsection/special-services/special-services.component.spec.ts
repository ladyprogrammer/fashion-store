import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SpecialServicesComponent } from './special-services.component';

describe('SpecialServicesComponent', () => {
  let component: SpecialServicesComponent;
  let fixture: ComponentFixture<SpecialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the 3 special services', () => {
    const NUMBER_OF_DISPLAYED_SERVICES = 3;
    const specialServices = fixture.debugElement.queryAll(By.css('[data-test="special-service"]'));
    expect(specialServices.length).toEqual(NUMBER_OF_DISPLAYED_SERVICES);
  });
});
