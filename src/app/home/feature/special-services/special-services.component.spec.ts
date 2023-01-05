import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SpecialServiceComponent } from '../../../ui/special-service/special-service.component';

import { SpecialServicesComponent } from './special-services.component';

describe('SpecialServicesComponent', () => {
  let component: SpecialServicesComponent;
  let fixture: ComponentFixture<SpecialServicesComponent>;
  const EXPECTED_NO_OF_SERVICES = 3;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialServicesComponent, SpecialServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the 3 special services', () => {
    const specialServices = fixture.debugElement.queryAll(By.css('[data-test="special-service"]'));
    expect(specialServices.length).toEqual(EXPECTED_NO_OF_SERVICES);
  });
});
