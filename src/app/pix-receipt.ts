import { Component, input, output } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pix-receipt',
  standalone: true,
  imports: [DecimalPipe, DatePipe],
  templateUrl: './pix-receipt.html',
  styleUrl: './pix-receipt.css'
})
export class PixReceiptComponent {
  // Signal Inputs
  readonly valor = input.required<number | null>();
  readonly nome = input.required<string>();
  readonly dataAgendamento = input<string>('');
  readonly instituicao = input<string>('Banco Neon');
  readonly idTransacao = input<string>('PIX9823749823BCN9283');

  readonly currentDate = new Date();

  // Signal Outputs
  readonly close = output<void>();
  readonly novaTransferencia = output<void>();

  onClose(): void {
    this.close.emit();
  }

  onNovaTransferencia(): void {
    this.novaTransferencia.emit();
  }

  compartilhar(): void {
    console.log('Compartilhar comprovante...');
    alert('Comprovante compartilhado com sucesso!');
  }

  baixarPDF(): void {
    console.log('Baixar PDF...');
    alert('Download do PDF iniciado!');
  }

  imprimir(): void {
    console.log('Imprimir comprovante...');
    window.print();
  }
}
