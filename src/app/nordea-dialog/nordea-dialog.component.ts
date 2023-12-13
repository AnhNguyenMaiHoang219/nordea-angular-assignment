import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

type DialogSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'nordea-dialog',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  templateUrl: './nordea-dialog.component.html',
  styleUrl: './nordea-dialog.component.scss',
})
export class NordeaDialogComponent {
  @Input() opened: boolean = false;
  @Input() title: string = '';
  @Input() size: DialogSize = 'medium';

  @Output('dialog-close') closeEvent = new EventEmitter<void>();

  get dialogClasses() {
    return {
      [`dialog-${this.size}`]: true,
    };
  }

  public close() {
    this.closeEvent.emit();
  }
}
