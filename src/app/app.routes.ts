import { Routes } from '@angular/router';
import { PixTransferComponent } from './pix-transfer';
import { PixHistoryComponent } from './pix-history';

export const routes: Routes = [
  { path: '', component: PixTransferComponent },
  { path: 'pix', component: PixTransferComponent },
  { path: 'extrato', component: PixHistoryComponent }
];


