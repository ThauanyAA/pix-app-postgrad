import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pix-transfer',
  imports: [FormsModule],
  templateUrl: './pix-transfer.html'
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
