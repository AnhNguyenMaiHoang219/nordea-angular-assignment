import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nordea-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nordea-dialog.component.html',
  styleUrl: './nordea-dialog.component.scss',
})
export class NordeaDialogComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Dialog Title';
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }
}
