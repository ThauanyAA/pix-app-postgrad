import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, DatePipe } from '@angular/common';
import { ErrorModalComponent } from './error-modal';

@Component({
  selector: 'app-pix-transfer',
  imports: [FormsModule, DecimalPipe, DatePipe, ErrorModalComponent],
  templateUrl: './pix-transfer.html',
  styleUrl: './pix-transfer.css'
})
export class PixTransferComponent {
  chavePix = signal('');
  valor = signal<number | null>(null);
  dataAgendamento = signal('');
  confirmado = signal(false);

  // Controle de estado para a modal de erro
  showError = signal(false);
  errorTitle = signal('');
  errorMessage = signal('');

  confirmar(): void {
    if (this.chavePix() && this.valor() !== null && this.dataAgendamento()) {
      const valorNum = this.valor();
      
      // Validação de limite diário para simular um erro e disparar a modal
      if (valorNum !== null && valorNum > 5000) {
        this.errorTitle.set('Limite Excedido');
        this.errorMessage.set('Para sua segurança, transferencias Pix acima de R$ 5.000,00 precisam ser aprovadas pelo gerenre');
        this.showError.set(true);
        return;
      }

      this.confirmado.set(true);
      console.log('Transferência Pix confirmada:', {
        chavePix: this.chavePix(),
        valor: this.valor(),
        dataAgendamento: this.dataAgendamento()
      });
    }
  }
}
