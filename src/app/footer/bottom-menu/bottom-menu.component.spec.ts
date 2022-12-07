import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMenuComponent } from './bottom-menu.component';

describe('BottomMenuComponent', () => {
  let component: BottomMenuComponent;
  let fixture: ComponentFixture<BottomMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a menu', () => {
    const menu = fixture.nativeElement.querySelector('[data-test="menu"]');
    expect(menu).toBeTruthy();
    expect(menu).toBeInstanceOf(HTMLUListElement);
    expect((menu as HTMLUListElement)?.innerHTML).toBeTruthy();
  });
});
