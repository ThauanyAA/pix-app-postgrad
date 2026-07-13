import { Component, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'received' | 'sent' | 'payment';
  date: string;
}

@Component({
  selector: 'app-pix-history',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './pix-history.html',
  styleUrl: './pix-history.css'
})
export class PixHistoryComponent {
  // Signal containing the mocked transaction history list matching the Figma design
  readonly transactions = signal<Transaction[]>([
    {
      id: 'tx1',
      title: 'Pix recebido - Erick S.',
      amount: 500.00,
      type: 'received',
      date: '14 de Março, 14:30'
    },
    {
      id: 'tx2',
      title: 'Transferência enviada - Pagamentos S/A',
      amount: 150.00,
      type: 'sent',
      date: '13 de Março, 09:15'
    },
    {
      id: 'tx3',
      title: 'Pix recebido - Loja Central',
      amount: 1250.00,
      type: 'received',
      date: '12 de Março, 18:45'
    },
    {
      id: 'tx4',
      title: 'Pagamento efetuado - QR Code',
      amount: 42.90,
      type: 'payment',
      date: '12 de Março, 10:20'
    }
  ]);

  // Signal to control the active tab in the mobile bottom navigation mockup
  readonly activeTab = signal<string>('inicio');

  setActiveTab(tab: string): void {
    this.activeTab.set(tab);
    console.log(`Navegou para a aba: ${tab}`);
  }

  gerarRelatorio(): void {
    console.log('Gerar Novo Relatório...');
    alert('Relatório de transações gerado e exportado com sucesso!');
  }

  voltar(): void {
    console.log('Voltar para a tela anterior...');
  }
}
