import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NordeaDialogComponent } from './nordea-dialog.component';

describe('NordeaDialogComponent', () => {
  let component: NordeaDialogComponent;
  let fixture: ComponentFixture<NordeaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NordeaDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NordeaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should render the dialog title correctly', () => {
    const testTitle = 'Test Dialog Title';
    component.title = testTitle;
    component.opened = true;
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.dialog-header h2');
    expect(titleElement.textContent).toContain(testTitle);
  });

  it('should not render the dialog if the "opened" property is false', () => {
    component.opened = false;
    fixture.detectChanges();

    const dialogElement = fixture.nativeElement.querySelector('.dialog');
    expect(dialogElement).toBeNull();
  });

  it('should render the dialog if the "opened" property is true', () => {
    component.opened = true;
    fixture.detectChanges();

    const dialogElement = fixture.nativeElement.querySelector('.dialog');
    expect(dialogElement).toBeDefined();
  });

  it('should emit "dialog-close" event when the "close" method is called', () => {
    spyOn(component.closeEvent, 'emit');
    component.close();

    expect(component.closeEvent.emit).toHaveBeenCalled();
  });
});
