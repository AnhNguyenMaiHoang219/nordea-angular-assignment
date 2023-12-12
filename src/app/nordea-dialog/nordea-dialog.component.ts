import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nordea-dialog',
  standalone: true,
  imports: [],
  templateUrl: './nordea-dialog.component.html',
  styleUrl: './nordea-dialog.component.css',
})
export class NordeaDialogComponent {
  @Input() title: string;
}
