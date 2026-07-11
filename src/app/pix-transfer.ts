import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pix-transfer',
  imports: [FormsModule, DecimalPipe, DatePipe],
  templateUrl: './pix-transfer.html',
  styleUrl: './pix-transfer.css'
})
export class PixTransferComponent {
  chavePix = signal('');
  valor = signal<number | null>(null);
  dataAgendamento = signal('');
  confirmado = signal(false);

  confirmar(): void {
    if (this.chavePix() && this.valor() !== null && this.dataAgendamento()) {
      this.confirmado.set(true);
      console.log('Transferência Pix confirmada:', {
        chavePix: this.chavePix(),
        valor: this.valor(),
        dataAgendamento: this.dataAgendamento()
      });
    }
  }
}
