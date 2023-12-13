import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AppHeaderComponent } from './common/layout/app-header.component';
import { NordeaDialogComponent } from './nordea-dialog/nordea-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    RouterOutlet,
    AppHeaderComponent,
    NordeaDialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Dialog 1
  dialog1Visible = false;
  dialog1Title = 'Simple dialog';

  openDialog1() {
    this.dialog1Visible = true;
  }

  closeDialog1() {
    this.dialog1Visible = false;
  }

  // Dialog 2
  dialog2Visible = false;
  dialog2Title = 'Simple dialog with actions';

  openDialog2() {
    this.dialog2Visible = true;
  }

  closeDialog2() {
    this.dialog2Visible = false;
  }

  // Dialog 3
  dialog3Visible = false;
  dialog3Title = 'Dialog with form inputs';

  openDialog3() {
    this.dialog3Visible = true;
  }

  closeDialog3() {
    this.dialog3Visible = false;
  }

  // Dialog 4
  dialog4Visible = false;
  dialog4Title = 'Dialog with third-party elements';

  openDialog4() {
    this.dialog4Visible = true;
  }

  closeDialog4() {
    this.dialog4Visible = false;
  }

  submmitDialog4() {
    // Do something with the form

    // Then, close the dialog
    this.closeDialog4();
  }

  // Dialog 5
  dialog5Visible = false;
  dialog5Title = 'Small dialog';

  openDialog5() {
    this.dialog5Visible = true;
  }

  closeDialog5() {
    this.dialog5Visible = false;
  }

  // Dialog 6
  dialog6Visible = false;
  dialog6Title = 'Medium dialog';

  openDialog6() {
    this.dialog6Visible = true;
  }

  closeDialog6() {
    this.dialog6Visible = false;
  }

  // Dialog 5
  dialog7Visible = false;
  dialog7Title = 'Large dialog';

  openDialog7() {
    this.dialog7Visible = true;
  }

  closeDialog7() {
    this.dialog7Visible = false;
  }
}
