import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { MidsectionModule } from './midsection/midsection.module';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HeaderModule,
        MidsectionModule,
        FooterModule
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should have header, midsection and footer', () => {
    const header = fixture.nativeElement.querySelector('[data-test=header]');
    expect(header).toBeTruthy();

    const content = fixture.nativeElement.querySelector('[data-test=midsection]');
    expect(content).toBeTruthy();

    const footer = fixture.nativeElement.querySelector('[data-test=footer]');
    expect(footer).toBeTruthy();
  });
});
