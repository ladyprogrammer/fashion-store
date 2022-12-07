import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  const MIN_NO_OF_MENU_LINKS = 1;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have account title', () => {
    const accountTitle = fixture.nativeElement.querySelector('[data-test="title"]');
    expect(accountTitle).toBeTruthy();
    expect(accountTitle).toBeInstanceOf(HTMLHeadingElement);
    expect((accountTitle as HTMLHeadingElement)?.textContent).toBeTruthy();
  });

  it('should have menu', () => {
    const menu = fixture.nativeElement.querySelector('[data-test="menu"]');
    expect(menu).toBeTruthy();
    expect(menu).toBeInstanceOf(HTMLUListElement);
    expect((menu as HTMLUListElement)?.innerHTML).toBeTruthy();
  });
});
