import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should have header, main content and footer', () => {
    const header = fixture.nativeElement.querySelector('[data-test=header]');
    expect(header).toBeTruthy();

    const content = fixture.nativeElement.querySelector('[data-test=content]');
    expect(content).toBeTruthy();

    const footer = fixture.nativeElement.querySelector('[data-test=footer]');
    expect(footer).toBeTruthy();
  });
});
