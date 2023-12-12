import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './common/layout/app-header.component';
import { NordeaDialogComponent } from './nordea-dialog/nordea-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppHeaderComponent, NordeaDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nordea-angular-assignment';

  isDialog1Open = false;
  dialog1Title = 'Dialog 1 Title';

  isDialog2Open = false;
  dialog2Title = 'Dialog 2 Title';

  openDialog1() {
    this.isDialog1Open = true;
  }

  closeDialog1() {
    this.isDialog1Open = false;
  }

  saveDialog1() {
    // Save logic for Dialog 1
    this.closeDialog1();
  }

  cancelDialog1() {
    // Cancel logic for Dialog 1
    this.closeDialog1();
  }

  openDialog2() {
    this.isDialog2Open = true;
  }

  closeDialog2() {
    this.isDialog2Open = false;
  }

  submitDialog2() {
    // Submit logic for Dialog 2
    this.closeDialog2();
  }
}
