import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a search input and a submit button', () => {
    const searchInput = fixture.nativeElement.querySelector('[data-test="search-input"]');
    const submitButton = fixture.nativeElement.querySelector('[data-test="submit-button"');
    expect(searchInput).toBeTruthy();
    expect(searchInput).toBeInstanceOf(HTMLInputElement);
    expect((searchInput as HTMLInputElement)?.type).toEqual('text');
    expect(submitButton).toBeTruthy();
    expect(submitButton).toBeInstanceOf(HTMLButtonElement);
    expect((submitButton as HTMLButtonElement)?.type).toEqual('submit');
  });

  xit('should show search results', () => {

  });


});
