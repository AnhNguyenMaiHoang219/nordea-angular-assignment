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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
