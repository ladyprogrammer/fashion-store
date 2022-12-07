import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksComponent } from './social-networks.component';

describe('SocialNetworksComponent', () => {
  let component: SocialNetworksComponent;
  let fixture: ComponentFixture<SocialNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNetworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a title', () => {
    const title = fixture.nativeElement.querySelector('[data-test="title"]');
    expect(title).toBeTruthy();
    expect(title).toBeInstanceOf(HTMLHeadingElement);
    expect((title as HTMLHeadingElement)?.textContent).toBeTruthy();
  });

  it('should have the social networks menu', () => {
    const menu = fixture.nativeElement.querySelector('[data-test="menu"]');
    expect(menu).toBeTruthy();
    expect(menu).toBeInstanceOf(HTMLUListElement);
    expect((menu as HTMLUListElement)?.innerHTML).toBeTruthy();
  });
});
