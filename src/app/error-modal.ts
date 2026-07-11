import { Component, ElementRef, ViewChild, AfterViewInit, input, output } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [],
  templateUrl: './error-modal.html',
  styleUrl: './error-modal.css'
})
export class ErrorModalComponent implements AfterViewInit {
  title = input.required<string>();
  message = input.required<string>();
  
  close = output<void>();

  @ViewChild('errorDialog') dialogRef!: ElementRef<HTMLDialogElement>;

  // IDs únicos para associação com leitores de tela (ARIA)
  readonly titleId = `error-modal-title-${Math.random().toString(36).substring(2, 9)}`;
  readonly messageId = `error-modal-message-${Math.random().toString(36).substring(2, 9)}`;

  ngAfterViewInit(): void {
    if (this.dialogRef?.nativeElement) {
      // Abre a modal nativamente garantindo o foco inicial (focus trap automático)
      this.dialogRef.nativeElement.showModal();
    }
  }

  closeModal(): void {
    if (this.dialogRef?.nativeElement) {
      this.dialogRef.nativeElement.close();
    }
  }

  onClose(): void {
    this.close.emit();
  }
}
