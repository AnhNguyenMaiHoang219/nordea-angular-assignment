import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the component successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should render the website logo correctly', () => {
    fixture.detectChanges();
    const logoElement = fixture.nativeElement.querySelector('nav .logo');

    expect(logoElement).toBeTruthy();
    expect(logoElement.src).toContain('assets/logo.svg');
    expect(logoElement.alt).toBe('Website logo');
  });
});
